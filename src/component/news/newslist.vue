<template>
	<div class="temp">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in list' :key='item.id'>
					<router-link v-bind="{to:'/news/newsinfo/' + item.id}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-text='item.zhaiyao'></p>
							<div class="ft">
	                            <span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
	                            <span class="fr">点击数:{{item.click}}</span>
                        	</div>
						</div>
					</router-link>
				</li>
			</ul>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'
import apiline from '../../kits/common.js'
	export default{
		data(){
			return {
				list:[]
			}
		},
		created(){
			this.getnewslis()
		},
		methods:{
			getnewslis(){
				var url = apiline.apiline + '/api/getnewslist'
				this.$http.get(url).then(function(res){
					var data = res.body;
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					this.list = data.message;
				})
			}
		}
	}
</script>

<style scoped>
	    .mui-table-view img{
        height:80px;
        width:80px;
    }

    .mui-table-view .mui-media-object{
        max-width: 80px;
        line-height: 80px;
    }

    .ft{
        margin-top: 1.5em;
        font-size: 14px;
        color:#0094ff;
    }
</style>