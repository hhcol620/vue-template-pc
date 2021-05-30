// 先读取再写入

const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const program = require('commander');
const logSymbols = require('log-symbols');

const { readRouterConfig } = require('./util.js');

/**
 * @param {*} fromFilePath 源文件路径
 * @param {*} toFilePath 目标文件路径
 * @param {*} data 写入到文件中的数据对象  Object
 */
const writeFile = function(fromFilePath, toFilePath, data = {}) {
    let str = fs.readFileSync(fromFilePath).toString();

    const insertData = function(fileStr, data) {
        let reg = /\${(\w+)}/g;
        return fileStr.replace(reg, (...args) => {
            if (Object.prototype.hasOwnProperty.call(data, args[1])) {
                return data[args[1]];
            }
        });
    };
    let res = insertData(str, data);
    fs.writeFileSync(toFilePath, res);
};
const mkdirsSync = function(dirpath) {
    let pathList = dirpath.split(path.sep);
    let _path = pathList.shift();
    while (pathList.length >= 0) {
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        if (pathList.length > 0) {
            _path = path.join(_path, pathList.shift());
        } else {
            break;
        }
    }
};

const getcssExpand = function() {
    let packageFilePath = path.resolve(__dirname, '../package.json');
    let cssExpand = require(packageFilePath).cssExpand;
    console.log(cssExpand);
    return cssExpand;
};

/**
 * 下面是交互命令
 * 获取开发者的输入的创建页面名字  作为文件夹名字
 * 关于这个页面的描述
 * 路由
 */
const questionList = [
    {
        name: 'name',
        message: 'please enter a page name:'
    },
    {
        name: 'router',
        message: 'please enter a router/url Example /dashboard/index :'
    },
    {
        name: 'description',
        message: 'please enter a description:'
    }
];

program.action(() => {
    inquirer.prompt(questionList).then((answers) => {
        console.log(answers);
        let meta = JSON.parse(JSON.stringify(answers));
        meta.cssExpand = getcssExpand();
        const spinner = ora();
        spinner.start('create start...\n');
        let filePath = path.resolve(
            __dirname,
            `../src/packages/${answers.name}`
        );
        if (!fs.existsSync(filePath)) {
            // 不存在就创建文件夹呗...
            fs.mkdirSync(filePath);
            writeFile(
                path.resolve(__dirname, './package/router.md'),
                `${filePath}/router.js`,
                meta
            );
            writeFile(
                path.resolve(__dirname, './package/template-index.md'),
                `${filePath}/index.vue`,
                meta
            );
            let deepPathViews = path.join(filePath, `/views/${answers.name}`);
            mkdirsSync(deepPathViews);
            writeFile(
                path.resolve(__dirname, './package/template-insert.md'),
                path.resolve(deepPathViews, './index.vue'),
                meta
            );
            let deepPathServer = path.join(filePath, '/server');
            mkdirsSync(deepPathServer);
            writeFile(
                path.resolve(__dirname, './server/api.md'),
                path.resolve(deepPathServer, './api.js'),
                meta
            );
            let componentsPath = path.join(filePath, '/components');
            mkdirsSync(componentsPath);
            readRouterConfig(); // 重新获取路由的配置
            spinner.succeed(chalk.green('create page successed!'));
            console.log(
                logSymbols.success,
                chalk.green(
                    `you can look the new page in baseurl:port'${answers.router}'`
                )
            );
        } else {
            spinner.fail(
                chalk.red(
                    'The folder already exists. Please modify it and try again'
                )
            );
        }
    });
});

program.parse(process.argv);
