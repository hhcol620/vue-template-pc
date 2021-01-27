/**创建一个工具函数在项目编译时将路由配置写入router.json文件*/
function createRoutesJson(routers) {
    console.log(routers);
    // fs.writeFileSync('/router.json', JSON.stringify(routers));
}

module.exports = { createRoutesJson };
