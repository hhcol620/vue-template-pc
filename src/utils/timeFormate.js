/**
 * @params : time 时间戳  type 需要转化的时间类型 YY 年 MM 月 DD日   hh时mm分ss秒 中间连字符随意
 * @return : 转换之后的时间 string
 * @description : 时间转换工具方法
 * @date : 2020-12-30 18:15
 * @author : huanghe
 */

const _timeFormat = (time, type) => {
    let dateObj = new Date(Number(time));
    let year = dateObj.getFullYear();
    let month =
        dateObj.getMonth() + 1 > 10
            ? dateObj.getMonth() + 1
            : '0' + (dateObj.getMonth() + 1);
    let day =
        dateObj.getDate() > 10 ? dateObj.getDate() : '0' + dateObj.getDate();
    let hour =
        dateObj.getHours() > 10 ? dateObj.getHours() : '0' + dateObj.getHours();
    let minutes =
        dateObj.getMinutes() > 10
            ? dateObj.getMinutes()
            : '0' + dateObj.getMinutes();
    let seconds =
        dateObj.getSeconds() > 10
            ? dateObj.getSeconds()
            : '0' + dateObj.getSeconds();
    //  YY-MM-DD hh-mm-ss

    let dateOp = {
        YY: year,
        MM: month,
        DD: day,
        hh: hour,
        mm: minutes,
        ss: seconds
    };
    let reg = /(YY)?(MM)?(DD)?(hh)?(mm)?(ss)?/g;
    let res = String(type).replace(reg, (...args) => {
        if (!args[0]) {
            return '';
        }
        return dateOp[args[0]];
    });
    return res;
};

/**
 * @params : time时间字符串   2020-12
 * @return : 该时间戳当月的日历表  用二维数组存
 * @description : 根据输入时间戳输出日历数组
 * @date : 2020-12-30 18:20
 * @author : huanghe
 */
const _calendarList = (time) => {
    let daysList = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
    let res = time.split('-');
    let year = res[0];
    let month = res[1];
    if (month < 0 || month > 12) return '输入不正确';
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysList[1] = 29;
    }
    // 计算这个月1号应该是周几
    let nDay = new Date(`${year}-${month}-01`).getDay();
    // 这个月最后一天应该是几号
    let lastDay = daysList[month - 1];
    // 假设日历表可以在下面二维数组中  后面针对没有被填充数字的进行删除
    let resArray = [
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-']
    ];
    let i = 0;
    while (i < lastDay) {
        resArray[Math.floor((nDay + i) / 7)][(nDay + i) % 7] = ++i;
    }
    while (resArray[resArray.length - 1].every((item) => item === '-')) {
        resArray.pop();
    }
    return resArray;
};

// let test = calendarList('2020-12');
// console.log(test);

/**
 * @params : time 时间戳
 * @return : 距离入参过去时间
 * @description :
 * @date : 2021-01-16 13:32
 * @author : huanghe
 */

function _timeAgoFormat(time) {
    let _now = Date.now() || new Date().getTime(); // 获取当前的时间戳
    if (_now - parseInt(time) < 0) {
        // 后端提供的时间戳不合法
        console.log('传入的时间戳不合法');
        return '--';
    }
    let _seconds = (_now - parseInt(time)) / 1000;
    let _minutes = Math.floor(_seconds / 60);
    let _hours = Math.floor(_minutes / 60);
    let _days = Math.floor(_hours / 24);
    let _months = Math.floor(_days / 30); //  这里默认将30天视为一个月
    let _years = Math.floor(_months / 12);
    let _list = ['年前', '月前', '天前', '小时前', '分钟前', '刚刚']; // 这里做一个映射
    let _res = '--'; //  默认返回值
    let _timeList = [_years, _months, _days, _hours, _minutes, _seconds];
    let _index = _timeList.findIndex((item) => item > 0);
    _res = _minutes > 0 ? _timeList[_index] + _list[_index] : _list[_index]; // 判断是不足一分钟的情况,直接返回  刚刚
    return _res;
}
// console.log(_timeAgoFormat(1606780800000));

export { _timeFormat, _calendarList, _timeAgoFormat };
