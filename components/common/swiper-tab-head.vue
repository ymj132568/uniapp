<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" scroll-x="true" 
		:style="{borderBottom:border}" :scroll-left="scrollLeft">
		
			<view v-for="(tab,index) in tabBars" class="swiper-tab-list" 
			:class="{active:tabIndex==index}" @tap="tabtap(index)"
			 :key="index" :style="{width:width}">
			 
				<text>{{ tab.name }}</text>
				<!-- 让他就算是0也显示 -->
				<text v-if="tab.num==0?!tab.num:tab.num" class="num">{{ tab.num }}</text>
				<view class="swiper-tab-list-bottom" v-show="tabIndex==index"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				scorllViewWidth: 0
			}
		},
		props: {
			tabBars: {
				type: Array,
				default: []
			},
			tabIndex: {
				type: Number,
				default: 0
			},
			border: {
				type: String,
				default: "none"
			},
			width: {
				type: String,
				default: ""
			}
		},
		methods: {
			tabtap(index) {
				this.$emit('tabtap', index);
			}
		},
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query.selectAll('.swiper-tab-list').boundingClientRect(data => {
				this.scorllViewWidth = data[0].width
			}).exec();
			console.log(this.scorllViewWidth)
		},
		watch: {
			tabIndex() {
				// 滑块变化了滚动条跟着变化
				this.scrollLeft = this.scorllViewWidth * this.tabIndex
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-tab-list {
		font-weight: bold;

		.num {
			font-weight: 400;
		}

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
