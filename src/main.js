//导入vue核心
import Vue from 'vue';
//导入主模块
import app from './app.vue';
//导入路由模块
import vueRouter from 'vue-router';
//导入自定义的组件
import home from './component/home.vue';
import newslist from './component/news/newslist.vue';
import newsinfo from './component/news/newsinfo.vue';
import shopcar from './component/shopcar/car.vue';
import photolist from './component/photo/photolist.vue';
import photoinfo from './component/photo/photoinfo.vue';
import goodslist from './component/goods/goodslist.vue';
import goodsinfo from './component/goods/goodsinfo.vue';
import goodsdesc from './component/goods/goodsdesc.vue';
import goodscomment from './component/goods/goodscomment.vue';
//导入vuePreview
import VuePreview from 'vue-preview';
//导入mint-ui
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.min.css';
//导入mui的css文件
import '../statics/mui/css/mui.css';
//导入公共样式
import '../statics/css/common.css';
//导入vue-resource
import vueResource from 'vue-resource';
//导入格式化时间的第三方类库
import moment from 'moment';
//自定义时间过滤器
Vue.filter('datefmt', function(input, fmtstring){
	return moment(input).format(fmtstring)
})
//在vue中绑定组件
Vue.use(Mint);
Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(VuePreview);
var router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:id',component:newsinfo},
		{path:'/shopcar',component:shopcar},
		{path:'/photo/photolist',component:photolist},
		{path:'/photo/photoinfo/:id',component:photoinfo},
		{path:'/goods/goodslist',component:goodslist},
		{path:'/goods/goodsinfo/:id',component:goodsinfo},
		{path:'/goods/goodsdesc/:id',component:goodsdesc},
		{path:'/goods/goodscomment/:id',component:goodscomment}
	]
})
new Vue({
	el:'#app',
	// render:function(create){create(app)}
	router,
	render:create=>create(app)
})