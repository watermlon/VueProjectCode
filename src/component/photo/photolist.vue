<template>
	<div class="temp">
		<div id="cate">
			<ul v-bind="{style:'width:'+ulWidth+'px'}">
				<li @click='getimgdata(0)'>全部</li>
				<li v-for='item in cates' :key='item.id' @click='getimgdata(item.id)'>{{item.title}}</li>
			</ul>
		</div>
		<div>
			<ul id="imglist">
				<li v-for='item in imgdata'>
					<router-link v-bind='{to:"/photo/photoinfo/"+item.id}'>
						<img v-lazy="item.img_url">
						<div id="desc">
							<h5 v-text="item.title"></h5>
							<p v-text="item.zhaiyao"></p>
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
	export default{
		data(){
			return{
				cates:[],
				ulWidth:320,
				imgdata:[]
			}
		},
		created(){
			this.getcates();
			this.getimgdata(0);
		},
		methods:{
			getcates(){
				var url = apiline.apiline+'/api/getimgcategory'
				this.$http.get(url).then(function(res){
					var data = res.body
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					this.cates=data.message;
					var w = 62;
					var count = data.message.length+1;
					this.ulWidth=w*count;
				})
			},
			getimgdata(cateid){
				cateid=cateid||0;
				var url = apiline.apiline+'/api/getimages/'+cateid;
				this.$http.get(url).then(function(res){
					var data = res.body
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					if (data.message.length==0) {
						Toast('无数据')
						return
					}
					this.imgdata=data.message;
				})
			}
		}
	}
</script>

<style scoped>
	#cate{
		width: 375px;
		max-width: 375px;
		overflow-x: auto;
	}
	#cate ul{
		margin: 0px;
		padding-left: 10px;
	}
	#cate li{
		list-style: none;
		display: inline-block;
		color:#0094ff;
		font-size: 14px;
		padding-left: 6px;
	}
	#imglist{

	}
	#imglist ul {
		padding-left: 0px;
	}
	#imglist li{
		list-style:none;
		position: relative ;
	}
	#imglist img{
		width:100%;
		height: 300px;
	}

	#desc{
		width: 100%;
		background-color: rgba(0,0,0,0.3);
		position: absolute;
		bottom: 2px;
		left: 0px;
	}

	#desc h5{
		color: #ffffff;
		font-weight: bold;
	}
	#desc p{
		color:#fff;
	}

	image[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
</style>