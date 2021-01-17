// 节流
function _throttle(func, wait = 50, options = { leading: false }) {
    let result,
        timer = null,
        previous = 0; // 上一次的时间戳
    return function(...args) {
        var _now = Date.now();
        if (!previous && options.leading === false) {
            previous = _now; // 如果设置了忽略开始的调用 options中属性leading设置了false
        }
        var remaining = wait - (_now - previous); //  剩余时间 用wait - (当前时间戳减上一次的时间戳)
        if (remaining <= 0 || remaining > wait) {
            // if (remaining > wait) {
            //     //  这种情况应该只存在用户修改了时间
            // }
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            previous = _now;
            result = func.apply(this, args);
        } else if (!timer && options.trailing !== false) {
            timer = setTimeout(() => {
                pervious = options.leading === false ? 0 : Date.now();
                timer = null;
                result = func.apply(this, args);
            }, remaining);
        }
        return result;
    };
}

let num = 0;
let test = () => {
    console.log(num++);
};

let fn = _throttle(test);

for (let i = 0; i < 50000000; i++) {
    fn();
}
