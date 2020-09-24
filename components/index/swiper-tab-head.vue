<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x="true">
			<view v-for="(tab,index) in tabBars"
			class="swiper-tab-list"
			:class="{active:tabIndex==index}"
			@tap="tabtap(index)"
			:key="index">
				<text>{{ tab.name }}</text>
				<view class="swiper-tab-list-bottom" v-show="tabIndex==index"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			tabtap(index) {
				this.$emit('tabtap',index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-tab-list {
		font-weight: bold;
		color: #969696;
	
		&.active {
			color: #333333;
		}
	
		.swiper-tab-list-bottom {
			border: 8upx solid #FFDF34;
			border-radius: 8upx;
			width: 60upx;
			margin: 0 auto;
		}
	}
</style>
