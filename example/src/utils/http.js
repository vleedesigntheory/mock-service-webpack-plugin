import axios from 'axios';

const BaseAxios = axios.create({
    timeout: 60000
});

// 请求拦截
BaseAxios.interceptors.request.use(async config => {
    if (sessionStorage.getItem('token')) {
        config.headers.Token = sessionStorage.getItem('token');
        config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

// 响应拦截
BaseAxios.interceptors.response.use( res => {
    if(res.data.success ||
        res.data.FLAG === "SUCCESS" ||
        res.data.retCode === "200" ||
        res.status === 200){
        return res.data
    } else {
        message.error(res.data.msg || res.data.MESSAGE || res.data.message || "Error");
        return Promise.reject(res.data)
    }
}, err => {
    return Promise.reject(err)
});

export default BaseAxios;