import axios from 'axios';
import QS from 'qs';

// 允许使用的时候传入自定义的一些参数 比如基地址
const initConfig = {
    baseUrl: '/'
};

// const headers = {
//     _formData: {
//         'content-type': 'application/x-www-form-urlencoded'
//     }
// };

//过滤请求   请求拦截器
axios.interceptors.request.use(
    (config) => {
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
        console.log('method:get  url:', url);
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

export function request(config = initConfig) {
    return (method, url, data) => {
        method = method.toLowerCase(); // 转为小写
        return reqHandle(method, url, data);
    };
}
