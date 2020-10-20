/*
 * @Author: Mikasa
 * @Date: 2020-10-04 14:25:39
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-04 14:41:40
 */
import Vue from "vue";
import App from "./App.vue";
import router from './router/index'
import store from './store/index'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false;
// 创建事件总线
Vue.prototype.$bus = new Vue()
// 解决移动端300ms的延迟
FastClick.attach(document.body)
// 安装创建的插件toast
Vue.use(toast)
// 图片懒加载插件
Vue.use(VueLazyLoad, {
	loading: require('./assets/img/common/placeholder.png')
})

new Vue({
	render: (h) => h(App),
	router,
	store
}).$mount("#app");
