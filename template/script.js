// 先读取再写入

const path = require('path');
const fs = require('fs');

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

writeFile(
    path.resolve(__dirname, 'package/template-index.md'),
    path.resolve(__dirname, 'package/template-test.vue'),
    {
        name: 'zhangsan',
        desc: '描述'
    }
);

// 'package/template-index.js'

// let s = insertData(str, { name: 1, desc: '这是描述内容' });   这里将返回读取到的带有${}将{}中间的字段做key  看data中是否有对应的key
