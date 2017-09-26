<template>
	<div class="temp">
		<div class="title">
			<h4>{{info.title}}</h4>
			<p>{{info.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}，阅读：{{info.click}}次</p>
		</div>
		<div id="content" v-html='info.content'></div>
		<comment :newsid="id"></comment>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import apiline from '../../kits/common.js'
	import comment from '../subcom/comment.vue'
	export default{
		components:{
			comment
		},
		data(){
			return {
				id:0,
				info:[]
			}
		},
		created(){
			Indicator.open('加载中...');
			this.id = this.$route.params.id
			this.getinfo();
		},
		methods:{
			getinfo(){
				var url = apiline.apiline+'/api/getnew/'+this.id;
				this.$http.get(url).then(function(res){
					var data = res.body;
					Indicator.close()
					if (data.status !=0) {
						Toast(data.message);
						return
					}
					this.info = data.message[0];
				})
			}
		}
	}
</script>

<style scoped>
	.title h4{
		color: #0F73EF;
	}
	.title p{
        color:rgba(0,0,0,0.5);
    }

    .title,.content{
        padding: 5px;
    }
</style>