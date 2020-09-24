<template>
	<view class="classification">
		<view class="f-jc-sb">
			<view>热门分类</view>
			<view @tap="openTopicNav">
				<text>更多</text>
				<text class="icon iconfont icon-xiangxia"></text>
			</view>
		</view>
		<view class="f-jc-sb">
			<block v-for="(item,index) in classlist" :key="index">
				<view>
					<text>{{ item.name }}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			classlist:{
				type:Array,
				default:[]
			}
		},
		methods:{
			openTopicNav(){
				uni.navigateTo({
					url:'../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.classification{
		padding: 20upx 20upx;
		border-top: 1px solid #DDDDDD;
		border-bottom: 1px solid #DDDDDD;
		>view:first-child{
			>view:last-child{
				color:#CCCCCC;
			}
		}
		>view:last-child{
			margin-top: 20upx;
			>view{
				padding: 0 25upx;
				background-color: #EEEEEE;
				color:#9E9E9E;
				border-radius: 10upx;
			}
		}
	}
</style>
