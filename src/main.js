import Vue from 'vue'
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.config.devtools = false

//创建vm
new Vue({
	el: '#app',
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
	render: h => h(App)
})