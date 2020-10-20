/*
 * @Author: your name
 * @Date: 2020-10-05 22:56:14
 * @LastEditTime: 2020-10-11 18:00:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\network\request.js
 */

import axios from 'axios'


// 1. 第一种方式,通过传参回调的方式
// export function request(config, success, failure) {
//   // 1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   // 2. 发送真正的网络请求
//   instance(config)
//   .then(res => {
//     success(res)
//   })
//   .catch(err => {
//     failure(err)
//   })
// }


// 2.  第二种方式 promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1. 创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     // 2. 发送真正的网络请求
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }

// 3. 直接返回instance,返回的就是promise
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/h8',
    timeout: 5000
  })
  // 2. axios的拦截器
  // 1. 拦截请求
  instance.interceptors.request.use(config => {
    // console.log(config)
    // 请求拦截的作用
    // 1. 比如config中的一些信息不符合服务器的要求,比如添加新的header
    // 2. 比如每次发送网络请求的时候,都希望在界面show一个loading图,请求成功的时候再去响应里把它隐藏
    // 3. 比如某些网络请求(登录携带(token)), 必须携带一些特殊信息,如果没有,比如这里可以跳转到登录页面.可以拿到url,判断url是否为某些请求,做出响应提示或跳转

    // 做完事情记得返回配置
    return config
  }, err => {
    console.log(err)
	})
	
  // 2. 拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res)
    // 做完事情记得返回结果
    return res.data
  }, err => {
    console.log(err)
  })


  // 3. 发送真正的网络请求
  return instance(config)
}


// 4. 可以创建多个
// export function request2() {

// }
