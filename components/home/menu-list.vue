<template>
	<view class="menu">
		<block v-for="(item,index) in menuList" :key="index">
			<view class="f-jc-sb" hover-class="hover-background">
				<view class="f-s-36u">
					<text class="icon iconfont m-r_20"
					:class="[item.iconClass,index==0?'f-s-28u':'f-s-36u']"
					:style="{color:item.iconColor}"></text>
					<text>{{ item.name }}</text>
				</view>
				<view class="f-ai-c icon iconfont icon-xiangyou"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			menuList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu{
		>view{
			padding: 10upx 20upx;
			border-bottom: 1px solid #EEEEEE;
			>view:last-child{
				color:#CCCCCC;
			}
		}
		>view:first-child{
			padding: 10upx 20upx;
			border-top: 1px solid #EEEEEE;
		}
	}
	.hover-background{
		background-color: #EEEEEE;
	}
</style>
