<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<view class="view-list f-jc-sb" :class="{'border-top':index==0}"
			hover-class="hover-background" @tap="listTap(index)">
				<view class="f-jc-ai-c">{{ item.name }}</view>
				<view class="f-jc-ai-c icon iconfont icon-xiangyou"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		methods:{
			listTap(index){
				this.$emit('changTap',index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view-list {
		padding: 20upx;
		margin: 0 20upx;
		border-bottom: 1px solid #EEEEEE;
		>view:last-child{
			color:#CCCCCC;
		}
	}

	.border-top {
		border-top: 1px solid #EEEEEE;
	}
	.hover-background{
		background-color: #fbfbfb;
	}
</style>
