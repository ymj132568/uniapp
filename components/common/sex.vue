<template>
	<view class="sex f-jc-ai-c"
	:style="{backgroundColor: sex==0 ? '#007AFF':'#FFC0CB'}">
		<text class="icon iconfont" 
		:class="[sex==0 ? 'icon-xingbie-nan' : 'icon-xingbie-nv']">
		</text>
		<text>{{ age }}</text>
	</view>
</template>

<script>
	export default{
		props:{
			sex:{
				type:[String,Number],
				default:0
			},
			age:{
				type:[String,Number],
				default:18
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sex {
		margin: auto 10upx;
		padding: 6upx 16upx;
		border-radius: 20upx;
		// :style background-color: #007AFF; #FFC0CB
		height: 20upx;
		
		text {
			font-size: 24upx;
			color: #FFFFFF;
		
			&:first-child {
				margin-right: 8upx;
			}
		}
	}
</style>
