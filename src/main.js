/*
 * @Author: Mikasa
 * @Date: 2020-10-04 14:25:39
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-04 14:41:40
 */
import Vue from "vue";
import App from "./App.vue";
import router from './router/index'

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router
}).$mount("#app");
