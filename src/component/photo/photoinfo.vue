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
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in list">
                    <img class="preview-img" :src="item.src" height="100" @click="$preview.open(index, list)">
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
				imgdata:{},
				list:[]
			}
		},
		created(){
			this.id=this.$route.params.id
			this.getdata();
			this.getminimg();
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
					this.imgdata =  data.message[0];
				})
			},
			getminimg(){
				var url = apiline.apiline+'/api/getthumimages/'+this.id;
				this.$http.get(url).then(function(res){
					var data = res.body;
					if(data.status!=0){
						Toast(data.message);
						return
					}
					this.list=data.message;
					this.list.forEach(function(item){
						item['w']=450;
						item['h']=450;
					})
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