<template>
	<view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="share-button" :style="{backgroundColor:headBgColor}">
			<head-button></head-button>
		</view>
		<!-- #endif -->
		<!-- 背景墙和头部信息 -->
		<view>
			<user-inof-head :buttonShow="!buttonShow"></user-inof-head>
		</view>

		<!-- 用户信息 -->
		<view class="user-info">
			<!-- 数据栏 -->
			<view class="p-t-b_20 f-d-r m-b_20 bg-fff">
				<block v-for="(item,index) in menuList" :key="index">
					<view class="f-d-c flex1" @tap="lookData(index)">
						<view class="f-jc-c f-s-32u">{{ item.num }}</view>
						<view class="f-jc-c f-s-32u">{{ item.name }}</view>
					</view>
				</block>
			</view>

			<!-- 导航栏 -->
			<view class="bg-fff">
				<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" width="33.333%" @tabtap="switchTab">

				</swiper-tab-head>
			</view>
			<!-- 具体信息 -->
			<view class="bg-fff p-l-r_20">
				<swiper class="swiper" :current="tabIndex" @change="swiperChange" :style="{height:swiperHieght+'px'}">
					<swiper-item>
						<space-info></space-info>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import headButton from '../../components/common/head-button.vue';
	import userInofHead from '../../components/user-space/user-inof-head.vue';
	import swiperTabHead from '../../components/common/swiper-tab-head.vue';
	import spaceInfo from '../../components/user-space/space-info.vue';
	export default {
		components: {
			headButton,
			userInofHead,
			swiperTabHead,
			spaceInfo
		},
		data() {
			return {
				buttonShow: false,
				maxScrollTop: 0,
				isInTheEnd: false,
				headBgColor: "rgba(255, 255, 255,0)",
				swiperHieght: 300,
				tabIndex: 0,
				tabBars: [{
						name: "主页"
					},
					{
						name: "糗事"
					},
					{
						name: "动态"
					}
				],
				menuList: [{
						name: "获赞",
						num: 0
					},
					{
						name: "关注",
						num: 0
					},
					{
						name: "粉丝",
						num: 0
					}
				]
			}
		},
		methods: {
			swiperChange(e) {
				this.tabIndex = e.detail.current
			},
			switchTab(index) {
				this.tabIndex = index
			},
			lookData(index) {
				console.log('点击了第' + index + '个按钮')
			}
		},
		onLoad(e) {
			this.buttonShow = e.isme == 'true' ? true : false;
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef APP-PLUS
					this.swiperHieght = res.windowHeight - uni.upx2px(180);
					// #endif
					
					//app里还要减去状态栏
					// #ifdef APP-PLUS
					this.swiperHieght = res.windowHeight -
						uni.upx2px(180) - res.statusBarHeight;
					// #endif
				}
			});
		},
		onPageScroll(res) {
			if (res.scrollTop == 0) {
				this.headBgColor = "rgba(255,255,255,0)";
			}
			// 滚动条到底后，获取最大的滚动条值，用于导航栏的背景渐变，兼容各端
			if (this.isInTheEnd) {
				if (res.scrollTop > this.maxScrollTop) {
					this.maxScrollTop = res.scrollTop
				}
				this.headBgColor = "rgba(255,255,255," +
					(res.scrollTop / this.maxScrollTop) + ")"
			}
		},
		onReachBottom() {
			this.isInTheEnd = true;
			this.headBgColor = "rgba(255,255,255,1)";
		}
	}
</script>

<style lang="scss" scoped>
	.share-button {
		z-index: 99;
		position: fixed;
		// position: absolute;
		top: 0;
		left: 0;
		right: 0;

		.topic-name {
			margin: auto;
			font-size: 38upx;
		}
	}

	.user-info {
		background-color: #f4f4f4;
	}
</style>
