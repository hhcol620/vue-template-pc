import axios from 'axios';
import QS from 'qs';

// 允许使用的时候传入自定义的一些参数 比如基地址
let initConfig = {
    baseUrl: '/hh', // 这个参数也可以和setupProxy中的前缀对应
    header: {
        'content-type': 'application/json,utf-8'
    }
};

export function request(config = initConfig) {
    return (method, url, data) => {
        method = method.toLowerCase(); // 转为小写
        url = urlConcat(config.baseUrl, url);
        return reqHandle(method, url, data);
    };
}

//过滤请求   请求拦截器
axios.interceptors.request.use(
    (config) => {
        //config 为请求的一些配置 例如：请求头 请求时间 Token  可以根据自己的项目需求个性化配置，参考axios的中文说明手册  自己多动动手
        // 需要设置请求头
        /* 给请求头里面添加一个属性 Authorization 并将其值设置为token令牌*/
        // config.headers.Authorization = window.localStorage.getItem('token') || ''
        config.timeout = 10 * 1000; //请求响应时间  10s
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// 添加响应拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.data.code === 200) {
            //服务端定义的响应code码为200时请求成功
            // window.localStorage.setItem('token',response.data.text)
            return Promise.resolve(response.data); //使用Promise.resolve 正常响应
        } else if (response.data.code !== 200) {
            return Promise.reject(response.data); //使用Promise.reject 抛出错误和异常
        }
    },
    (error) => {
        if (error && error.response) {
            let res = {};
            res.code = error.response.code;
            return Promise.reject(res);
        }
        return Promise.reject(error);
    }
);

function reqHandle(method, url, data) {
    if (method === 'post') {
        return axios.post(url, data); //axios的post 默认转化为json格式
    } else if (method === 'get') {
        console.log(url);
        return axios.get(url, {
            params: data
        });
    } else if (method === 'delete') {
        return axios.delete(url, {
            params: data
        });
    } else if (method === 'put') {
        return axios.put(url, data);
    } else if (method === 'form') {
        return axios.post(url, QS.stringify(data));
    }
}

/**
 * @params : url  连接url 去掉两端的/
 * @return :
 * @description :  拼接url
 * @date : 2020-10-20 10:23
 * @author : huanghe
 */
function urlConcat(url1, url2) {
    let reg = /^\/+|\/+$/gi;
    return '/' + url1.replace(reg, '') + '/' + url2.replace(reg, '');
}
