const fs = require('fs');
const path = require('path');
const glob = require('glob');
const routesJson = {};
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
            routesJson[filePath] = JSON.parse(str);
        }
    );
    // console.log(routesJson);
    fs.writeFileSync(
        path.resolve(__dirname, '../router.json'),
        JSON.stringify(routesJson, null, 4)
    );
};
// readRouterConfig();

module.exports = {
    readRouterConfig
};
