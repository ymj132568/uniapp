<template>
	<view>
		<!-- 状态栏 -->
		<!-- #ifdef APP-PLUS -->
		<uni-status-bar></uni-status-bar>
		<!-- #endif -->
		<!-- 按钮 -->
		<view class="btn-box">
			<view class="f-jc-sb">
				<view @tap="back" class="btn f-jc-ai-c">
					<text class="icon iconfont icon-fanhui2"></text>
				</view>
				<slot name="title" />
				<view @tap="share" class="btn f-jc-ai-c">
					<text class="icon iconfont icon-youshangjiao"></text>
				</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<uni-popup-share @select="selects"></uni-popup-share>
		</uni-popup>
	</view>
</template>

<script>
	import uniStatusBar from '../uni-status-bar/uni-status-bar.vue';
	import uniPopupShare from '../uni-popup/uni-popup-share.vue';
	import uniPopup from '../uni-popup/uni-popup.vue';
	export default {
		components: {
			uniStatusBar,
			uniPopupShare,
			uniPopup
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			share() {
				this.$refs.popup.open();
			},
			selects(obj) {
				//obj：item index
				console.log(obj.item);
				console.log(obj.index);
				// #ifdef APP-PLUS
				if (obj.index == 0) {
					plus.runtime.openURL("weixin://");
				}
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn-box {
		padding: 20upx;
		>view {
			width: 100%;

			.btn {
				width: 60upx;
				height:60upx;
				border-radius: 50%;
				background-color: rgba(0, 0, 0, .4);

				text {
					color: #FFFFFF;
				}
			}
		}
	}
</style>
