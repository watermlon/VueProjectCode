<template>
	<div class="temp">
		<div class="title">
			<h4>{{imgdata.title}}</h4>
			<p>{{imgdata.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}  浏览：{{imgdata.click}}次</p>
			<hr />
		</div>
		<!-- 缩略图 -->
		<div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <!-- <span class="mui-icon mui-icon-home"></span> -->
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <!-- <span class="mui-icon mui-icon-email"></span> -->
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goods/goodslist">
                        <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/feedback">
                        <!-- <span class="mui-icon mui-icon-location"></span> -->
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/video">
                        <!-- <span class="mui-icon mui-icon-search"></span> -->
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/callme">
                        <!-- <span class="mui-icon mui-icon-phone"></span> -->
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- 详情 -->
        <p class="content" v-html='imgdata.content'></p>
        <comment :newsid='this.id'></comment>
	</div>
</template>

<script>
import apiline from '../../kits/common.js';
import { Toast } from 'mint-ui';
import comment from '../subcom/comment.vue'
	export default{
		components:{
			comment
		},
		data(){
			return{
				id:0,
				imgdata:{}
			}
		},
		created(){
			this.id=this.$route.params.id
			this.getdata();
		},
		methods:{
			getdata(){
				var url = apiline.apiline+'/api/getimageInfo/'+this.id;
				this.$http.get(url).then(function(res){
					var data = res.body;
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					console.log(data.message)
					this.imgdata=data.message[0]
				})
			}
		}
	}
</script>

<style scoped>
	.title h4{
		min-width: 320px;
		line-height: 25px;
	}
	.title p{
		color:#717170;
	}
	.content{
		padding: 5px;
		color: #2D2D2D;
		line-height: 20px;
	}
</style>