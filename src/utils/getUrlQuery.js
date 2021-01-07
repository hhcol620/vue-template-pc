/**
 * @params : url  默认值完整的url
 * @return: query type:Object
 * @description : 获取url中参数
 * @date : 2021-01-07 23:00
 * @author : huanghe
 */
function _getUrlQuery(url = window.location.href) {
    url = decodeURIComponent(url);
    console.log(url);
    let reg = new RegExp('[&?](\\w)=(\\w*)', 'g');
    let iterator = url.matchAll(reg);
    let query = {};
    for (let item of iterator) {
        query[item[1]] = item[2];
    }
    return query;
}

export { _getUrlQuery };
