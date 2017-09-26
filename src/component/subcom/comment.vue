<template>
	<div class="temp">
		<div id="postcomment">
			<h3>提交评论</h3>
			<p class="p"></p>
			<textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
		</div>
		<div id="list">
			<h3>评论列表</h3>
			<p class="p"></p>
			<div v-for="(item,index) in list">
				<div class="title">
					<span>第{{index + 1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
			</div>
			<mt-button type="danger" size="large" plain @click='getmore'>加载更多</mt-button>
		</div>
	</div>
</template>

<script>
import apiline from '../../kits/common.js';
import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				postcontent:'',
				newsid:0,
				list:[],
				pageindex:1
			}
		},
		props:['newsid'],
		created(){
			this.getcomment(this.pageindex);
		},
		methods:{
			getmore(){
				this.pageindex++
				this.getcomment(this.pageindex)
			},
			postcomment(){
				if (this.postcontent.trim().length<=0) {
					Toast('评论内容不能为空');
					return
				}
				var url = apiline.apiline + '/api/postcomment/'+this.newsid;
				this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
					Toast(res.body.message);
					this.list=[
					{
						'user_name':'匿名用户',
						'add_time':new Date(),
						'content':this.postcontent
					}
					].concat(this.list);
					this.postcontent='';
				})
			},
			getcomment(pageindex){
				pageindex = pageindex || 1;
				var url = apiline.apiline + '/api/getcomments/'+this.newsid+'?pageindex='+pageindex
				this.$http.get(url).then(function(res){
					var data = res.body;
					if (data.status!=0) {
						Toast(data.message);
						return
					}
					this.list = this.list.concat(data.message);
				})
			}
		}
	}
</script>

<style>
#postcomment{
padding: 5px;
}
.p{
	height: 1px;
	width: 100%;
	border-bottom: 1px solid rgba(0,0,0,0.3);
}
#list{
	padding: 5px;
}
.title{
	padding: 5px;
	color: #6d6d72;
	font-size: 15px;
	background-color: rgba(0,0,0,0.1);
}
</style>