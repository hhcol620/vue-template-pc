import { _debounce, _throttle } from '@/utils/utils.js';

/**
 * @description : 自定义指令
 * @date : 2021-01-09 00:37
 * @author : huanghe
 */

var mixin = {
    // 防抖自定义指令
    directives: {
        debounce: {
            bind(el, binding) {
                const executeFunction = _debounce(binding.value);
                el.addEventListener('click', executeFunction);
            }
        }
        // throttle: {
        //     bind(el, binding) {
        //         const executeFunction = _throttle(binding.value);
        //         el.addEventListener('click', executeFunction);
        //     }
        // }
    }
};

export { mixin };
