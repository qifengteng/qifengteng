/*
 * @Author: your name
 * @Date: 2020-10-04 20:23:37
 * @LastEditTime: 2020-10-11 23:51:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \01.vue初体验c:\Users\Administrator\qifengteng\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载导入组件
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')


// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [
	{
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/profile',
		component: Profile
	},{
		path: '/detail/:iid',
		component: Detail
	}
]
const router = new VueRouter({
	routes,
	mode: 'history'
})

// 3. 导出
export default router