<template>
	<view class="swiper-box">
		<swiper :style="{height:height+'px'}" class="swiper" 
		indicator-dots="true" 
		autoplay="true" interval="3000"
		circular="true">
			<block v-for="(item,index) in imgList" :key="index">
			<swiper-item>
				<image class="img" :src="item.src" mode="widthFix" lazy-load></image>
			</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			imgList:{
				type:Array,
				default:[]
			}
		},
		data() {
			return {
				height: 200
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			let _this = this; //1000*470
			query.select('.swiper .img').boundingClientRect((res) => {
				_this.height = res.width / 1000 * 470;
			}).exec();
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		padding: 0 20upx 20upx 20upx;
		image {
			width: 100%;
			border-radius: 10upx;
		}
	}
</style>
