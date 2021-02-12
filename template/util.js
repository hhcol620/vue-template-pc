const fs = require('fs');
const path = require('path');
const glob = require('glob');
const routesJson = {}; //   保存着所有的路由解析出来的对象
const readRouterConfig = function() {
    glob.sync(path.resolve(__dirname, '../src/packages/*/router.js')).forEach(
        (filePath) => {
            // console.log(filePath);
            let str = fs
                .readFileSync(filePath)
                .toString()
                .replace(/[\r\n]+/g, '')
                .replace(/(?<=component:)\s*(\w+)/g, (...args) => {
                    return '"' + args[1] + '"';
                })
                .replace(/,\s*(?=})/g, '')
                .replace(/\s+/g, '')
                .replace(/(\w+)(?=:)/g, (...args) => {
                    return '"' + args[1] + '"';
                })
                .replace(/'/g, '"')
                .match(/\[[\w\W]+\]/g)[0];

            // console.log(str);
            routesJson[filePath.replace(/[\w\W]+(?:src)/, '@')] = JSON.parse(
                str
            );
        }
    );

    /**
     * 如果需要修改或者是自定义page_router.json文件  可以在这个位置定义修改函数 routesJson
     */
    // console.log(routesJson);
    fs.writeFileSync(
        path.resolve(__dirname, '../page_router.json'),
        JSON.stringify(routesJson, null, 4)
    );
};
// readRouterConfig();

module.exports = {
    readRouterConfig
};
