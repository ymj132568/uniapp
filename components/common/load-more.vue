<template>
	<view class="load-more"><text>{{ loadtext }}</text></view>
</template>

<script>
	export default{
		props:{
			loadtext:String
		}
	}
</script>

<style lang="scss" scoped>
	.load-more{
		margin:20upx auto;
		text-align: center;
	}
</style>
