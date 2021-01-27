import { request } from '@/services/axios-http.js';

// let config = {} 这个里面可以传入一些基地址 然后传入下面的方法里面  例如 const API = request(config)
const API = request();
// 配置请求头的这样类似的参数
const initConfig = {};
const authAPI = request(initConfig);

/**
 * @params : method url params
 * @return : 接口响应的数据
 * @description :
 * @date : 2020-10-30 09:21
 * @author : huanghe
 */

export const exampleAPI = (params) => API('GET', '/test', params);
