//导入vue核心
import Vue from 'vue';
//导入主模块
import app from './app.vue';
//导入路由模块
import vueRouter from 'vue-router';
//导入自定义的组件

//导入mint-ui
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css';
import '../statics/mui/css/mui.css';
import '../statics/css/common.css';
import home from './component/home.vue';
Vue.use(Mint);
Vue.use(vueRouter);
var router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/home',component:home}
	]
})
new Vue({
	el:'#app',
	// render:function(create){create(app)}
	router,
	render:create=>create(app)
})