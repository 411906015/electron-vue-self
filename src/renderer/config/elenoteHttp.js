import axios from 'axios'
import baseUrl from './baseUrl'
import QS from 'qs'
import {Message} from "element-ui";

axios.defaults.timeout = 10000;

//----------------- 二、响应拦截器 忽略
axios.interceptors.response.use(function (response) {
    if(response.status==200){
        return response.data;
    }else{
        //...
        Message.error('链接错误'+response.status)
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function elenoteGet(url, params={}){
    return new Promise((resolve, reject) =>{
        url = baseUrl.apiUrl+url;
        params.token = window.localStorage.getItem('token')
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}

export function elenotePost(url, params) {
    return new Promise((resolve, reject) => {
        url = baseUrl.apiUrl+url+'?token=' + window.localStorage.getItem('token');
        // params.token = window.localStorage.getItem('token')
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err =>{
                reject(err.data)
            })
    });
}