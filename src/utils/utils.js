/**
 * @params : fn需要防抖的函数 delay延迟时间 immediately是否需要立即执行
 * @return :
 * @example : 付款按钮 点赞按钮 这种容易被人连续点击的按钮
 * @description : 防抖 _debounce  防止用户快速连续点击造成短时间内发出多个重复的请求,给服务器造成压力
 * @date : 2021-01-08 21:21
 * @author : huanghe
 */

function _debounce(fn, delay = 300, immediately = true) {
    let timer = null,
        result;
    return function(...args) {
        if (timer) clearTimeout(timer);
        if (!timer && immediately) {
            result = fn.apply(this, args);
        }
        timer = setTimeout(() => {
            timer = null;
            if (!immediately) {
                result = fn.apply(this, args);
            }
        }, delay);
        return result;
    };
}

/**
 * @params : fn需要节流的函数 delay控制相邻两次的时间间隔最少是 delay ms   节流参数配置options {} 传入{leading:false} 忽略开始函数的调用 传入{trailing:false} 忽略结尾函数调用 两者  不能共存
 * @return :
 * @example : 使用场景 比如滚动事件处理函数
 * @description : 节流 _throttle  在需要连续触发的事件进行稀释  减少cpu 或者是内存的占用
 * @date : 2021-01-08 21:21
 * @author : huanghe
 */

function _throttle(fn, delay = 300) {
    //节流
    let lastTime = 0;
    return function(...args) {
        let nowTime = new Date().getTime();
        if (nowTime - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    };
}

/**
 * @params : num   1243142.092834
 * @return : num   1,243,142.092834
 * @description : 千位打点
 */

function _numFormate(num) {
    if (!num) return '';
    let reg = /(\d)(?=(\d{3})+$)/g;

    return num.toString().replace(/\d+/, (n) => {
        return n.replace(reg, ($1) => {
            return $1 + ',';
        });
    });
}

export { _debounce, _throttle, _numFormate };
