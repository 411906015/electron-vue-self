import axios from 'axios'
import baseUrl from './baseUrl'
import QS from 'qs'
import {Message,MessageBox} from "element-ui";
import router from '../router/index.js'
axios.defaults.timeout = 10000;

//----------------- 二、响应拦截器 忽略
axios.interceptors.response.use(function (response) {
    if(response.status==200){
        if (response.data.code === 20001){
            MessageBox.confirm('登录信息错误，请重新登录', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() => {
                // this.elenoteGet('/user/exitLogin').then(res=>{
                //     localStorage.removeItem('elenote_id');
                //     localStorage.removeItem('local_user');
                //
                // })
                // router.push({
                //     path:'/login'
                // })
                // Message({
                //     type: 'success',
                //     message: '退出登录'
                // });
                // this.$router.push({
                //     path:'/login'
                // })
            }).catch(() => {
                // this.$message({
                //     type: 'info',
                //     message: '已取消删除'
                // });
            });
        }
        return response.data;
    }else{
        //...
        Message.error('链接错误'+response.status)
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//获取用户信息
export function elenoteGetUserInfo(url,params={}){
    return new Promise((resolve, reject) =>{
        url = baseUrl.apiUrl+'/user/checkLogin';
        params.elenote_id = localStorage.getItem('elenote_id');
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

export function elenoteGet(url, params={}){
    return new Promise((resolve, reject) =>{
        url = baseUrl.apiUrl+url;
        params.elenote_id = localStorage.getItem('elenote_id');
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

export function elenotePost(url, params={}) {
    return new Promise((resolve, reject) => {
        url = baseUrl.apiUrl+url+'?elenote_id=' + localStorage.getItem('elenote_id');
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res);
            })
            .catch(err =>{
                reject(err)
            })
    });
}