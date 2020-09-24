<template>
	<view>
		<uni-collapse :accordion="true">
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :name="index" 
				:showAnimation="true">
					<text class="content">{{ item.text }}</text>
				</uni-collapse-item>
			</block>
		</uni-collapse>
		
		<view class="button-box">
			<button type="default">意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue';
	import uniCollapseTtem from '../../components/uni-collapse-item/uni-collapse-item.vue';
	export default {
		components: {
			uniCollapse,
			uniCollapseTtem
		},
		data() {
			return {
				list: [{
						title: "客服什么时候在线？",
						text: `客服在线时间为：周一至周六的 10:00~22:00\n客服不在线的时候留言即可，客服在线后第一时间为您处理\n\nPs：紧急问题联系电话客服********为您处理`
					},
					{
						title: "忘记密码了怎么办？",
						text: `使用手机号，绑定的邮箱均可以找回密码哦！`
					},
					{
						title: "手机号不用了怎么更换？",
						text: `只能申诉哦！客服将在24小时内处理您的申诉`
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 20upx;
		word-break: break-word;
		background-color: #F4F5F6;
	}
	.button-box{
		padding:40upx 80upx;
		button{
			background-color: #FFE933;
			border:none;
		}
	}
</style>
