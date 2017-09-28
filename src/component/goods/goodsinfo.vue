<template>
	<div class="temp">
		<div class="silder">
			<silder :imglis='imgs'></silder>
		</div>
		<div class="buy">
			<h3 class="goodtitle" v-text='info.title'></h3>
			<hr />
			<ul class="ml10">
				<li>
					<span>市场价：</span><s class="gary">￥{{info.market_price}}</s><span class="ml10">销售价：</span><span class="red">￥{{info.sell_price}}</span></p>
					<span>购买数量：</span>
				</li>
				<li class="mt10">
					<mt-button type="default" size='small'>-</mt-button>
					<span class="num">1</span>
					<mt-button type="default" size='small'>+</mt-button>
				</li>
				<li class="mt10">
					<mt-button type="primary" size='small'>立即购买</mt-button>
					<mt-button type="danger" size='small'>加入购物车</mt-button>
				</li>
			</ul>
		</div>
		<div class="params mt10">
				<h6>商品参数</h6>
				<p class="line"></p>
			<ul class="ml10">
				<li>商品货号：{{info.goods_no}}</li>
				<li>库存情况：{{info.stock_quantity}}</li>
				<li>上架时间：{{info.add_time | datefmt('YYYY-MM-DD')}}</li>
			</ul>
		</div>
		<div class="other mt10">
			<router-link v-bind="{to:'/goods/goodsdesc/'+id}">
				<mt-button class="imgdesc" type="primary" size="large" plain>图文详情</mt-button>
			</router-link>
			<router-link v-bind="{to:'/goods/goodscomment/'+id}">
				<mt-button type="danger" size="large" class='mt10' plain>商品评论</mt-button>
			</router-link>
		</div>
	</div>
</template>

<script>
import silder from '../subcom/silder.vue'
import apiline from '../../kits/common.js'
	export default{
		components:{
				silder,
			},
		data(){
			return {
				id:0,
				imgs:[],
				info:{}
			}
		},
		created(){
			this.id=this.$route.params.id;
			this.getimgs();
			this.getinfo();
		},
		methods:{
			getinfo(){
				var url = apiline.apiline+'/api/goods/getinfo/'+this.id;
				this.$http.get(url).then(function(res){
					var data = res.body;
					if (data.status!=0) {
						alert(data.message);
						return
					}
					this.info = data.message[0]
				})
			},
			getimgs(){
				var url = apiline.apiline+'/api/getthumimages/'+this.id;
				this.$http.get(url).then(function(res){
					var data=res.body;
					if (data.status!=0) {
						alert(data.message);
						return
					}
					this.imgs=data.message;
				})
			}
		}
	}
</script>

<style scoped>
	 .silder{
		 border:1px solid rgba(0,0,0,0.4);
		 border-radius: 5px;
		 margin: 5px;
	 }
	.buy,.params,.other{
		margin: 5px;
		padding: 5px;
		border:1px solid rgba(0,0,0,0.4);
		border-radius: 5px;
	}
	.num{
		display: inline-block;
		height: 33px;
		text-align: center;
		line-height: 33px;
		border: 1px solid #ccc;
		padding: 0 10px;
	}
</style>