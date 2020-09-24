<template>
	<view class="user-data p-all_20 f-d-r">
		<block v-for="(item,index) in dataList" :key="index">
			<view class="flex1">
				<view>{{ item.num }}</view>
				<view>{{ item.name }}</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default{
		props:{
			dataList:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-data{
		>view>view{
			font-size: 32upx;
			text-align: center;
			&:last-child{
				color:#999999;
			}
		}
	}
</style>
