const path = require('path');
const fs = require('fs');

const mkdirsSync = function(dirpath) {
    let pathList = dirpath.split('/');
    console.log(pathList);
    let _path = pathList.shift();
    while (pathList.length >= 0) {
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
        }
        if (pathList.length > 0) _path = path.join(_path, pathList.shift());
        else {
            break;
        }
    }
};

let str = 'G:/vue-template-pc/src/packages/test/views/test';
mkdirsSync(str);
