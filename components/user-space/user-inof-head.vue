<template>
	<view class="user-inof-head">
		<view class="f-jc-ai-c">
			<image src="../../static/demo/userpic/12.jpg" mode="aspectFill"></image>
		</view>
		<view class="f-jc-ai-c">
			<text class="f-s-36u f-w700">昵称</text>
			<view>
				<sex age="18" sex="0"></sex>
			</view>
		</view>
		<view class="f-jc-ai-c" v-show="buttonShow" @tap="attention">
			<text class="f-w700">{{ isAttention?"已关注":"关注他" }}</text>
		</view>
	</view>
</template>

<script>
	import sex from '../common/sex.vue';
	export default {
		data() {
			return {
				isAttention: false,
				isTap: false
			}
		},
		methods: {
			attention() {
				if (this.isTap) {
					return
				}
				this.isTap = true;
				this.isAttention = !this.isAttention;
				if (this.isAttention) {
					uni.showToast({
						title: "关注成功"
					})
				} else {
					uni.showToast({
						title: "已取消关注！",
						icon: "none"
					})
				}
				setTimeout(() => {
					this.isTap = false
				}, 1500)
			}
		},
		components: {
			sex
		},
		props: {
			buttonShow: {
				type: [String, Boolean],
				default: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-inof-head {
		background-image: url("../../static/demo/topicpic/4.jpeg");
		background-repeat: no-repeat;
		background-size: 100%;
		padding-top: 100upx;

		>view:nth-of-type(1) {
			image {
				width: 200upx;
				height: 200upx;
				border-radius: 50%;
				border: 1px solid #FFFFFF;
			}
		}

		>view:nth-of-type(2) {
			padding: 20upx 0;

			>text {
				color: #FFFFFF;
			}
		}

		>view:nth-of-type(3) {
			padding-bottom: 40upx;

			text {
				border-radius: 10upx;
				padding: 10upx 30upx;
				background-color: #FFDF34;
			}
		}
	}
</style>
