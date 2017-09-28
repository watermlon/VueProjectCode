<template>
	<div class="temp">
		<div id="mui-content" class="mui-content" style="background-color:#fff">
			
			    <ul class="mui-table-view mui-grid-view" ref="loadmore">
			        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for='item in goodlis' :key='item.id'>
			            <router-link v-bind='{to:"/goods/goodsinfo/"+item.id}'>
			                <img class="mui-media-object" :src="item.img_url">
			                <div class="desc">
			                	<div class="mui-media-body" v-text='item.title'></div>
				                <p><span class="red">￥{{item.sell_price}}</span><s class="gary">￥{{item.market_price}}</s></p>
				                <p><span>热卖中</span><span class="fr">剩余{{item.stock_quantity}}件</span></p>
			                </div>
			            </router-link>
			        </li>
			    </ul>

		</div>
	</div>
</template>

<script>
import apiline from '../../kits/common.js';
import { Toast } from 'mint-ui';
import { Loadmore } from 'mint-ui';
	export default{
		data(){
			return {
				goodlis:[],
				pageindex:1
			}
		},
		created(){
			this.getgoods(1)
		},
		methods:{
			loadBottom(){
				this.pageindex++;
				this.getgoods(this.pageindex);
			},
			getgoods(pageindex){
				pageindex = pageindex || 1
				var url = apiline.apiline+'/api/getgoods?pageindex='+pageindex;
				this.$http.get(url).then(function(res){
					var data = res.body;
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					this.goodlis=this.goodlis.concat(data.message);
				})
			}
		}
	}
</script>

<style scoped>
#mui-content li{
	border: 1px solid rgba(0,0,0,0.2);
	box-shadow: 0 0 5px #000;
	padding-left: 3px;
	padding-top: 0;
	margin-left: 4px;
	font-size: 12px;
}
#mui-content a{
	padding-left: 13px;
	padding-top: 14px;
}
#mui-content .mui-media-body{
	font-size: 12px;
	text-overflow: ellipsis;
	text-align: center;
}
.desc{
	background-color: rgba(0,0,0,0.3);
}
.desc p{
	text-align: left;
}
.desc s{
	margin-left: 30px;
}
</style>