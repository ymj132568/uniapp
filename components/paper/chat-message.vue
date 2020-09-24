<template>
	<view>
		<view class="time-box f-jc-ai-c" v-if="item.timeShow">{{ item.timeFormat }}</view>
		<template v-if="!item.isMe">
			<view class="chat-message-left-box p-all_20 f-ai-top">
				<view class="m-r_20">
					<image :src="item.userpic" mode="widthFix" lazy-load="true">
					</image>
				</view>
				<view class="left">
					<view class="message m-l_20 p-all_20">
						<text v-if="item.text">{{ item.text }}{{item.image!=''?'\n':''}}</text>

						<image v-if="item.image&&item.image!=''" :src="item.image" mode="widthFix" lazy-load="true" @tap="previewImage">
						</image>
					</view>
					<text class="icon iconfont icon-zhixiang-zhishiqizuo"></text>
				</view>
			</view>
		</template>

		<template v-else>
			<view class="chat-message-right-box p-all_20 f-ai-top">
				<view class="right">
					<view class="message m-r_20 p-all_20">
						<text v-if="item.text">{{ item.text }}{{item.image!=''?'\n':''}}</text>

						<image v-if="item.image&&item.image!=''" :src="item.image" mode="widthFix" lazy-load="true" @tap="previewImage">
						</image>
					</view>
					<text class="icon iconfont icon-zhixiang-zhishiqiyou"></text>
				</view>
				<view class="m-l_20">
					<image :src="item.userpic" mode="widthFix" lazy-load="true">
					</image>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			previewImage: function(e) {
				uni.previewImage({
					current: 0,
					urls: [this.item.image]
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.time-box {
		padding-top: 30upx;
		color: #BBBBBB;
		font-size: 24upx;
	}

	.message {
		font-size: 32upx;
		border-radius: 20upx;

		image {
			border-radius: 10upx;
			max-width: 100px;
		}

		text {
			word-break:break-all;
			word-wrap:break-word;
		}
	}

	.chat-message-left-box {
		.message {
			background-color: #EEEEEE;

			text {
				color: #000000;
			}
		}

		>view:first-child {
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
		}

		.left {
			position: relative;

			>text {
				font-size: 100upx;
				color: #EEEEEE;
				position: absolute;
				top: -56upx;
				left: -40upx;
			}
		}
	}

	.chat-message-right-box {
		justify-content: flex-end;

		.message {
			background-color: #7878ff;

			text {
				color: #FFFFFF;
			}
		}

		>view:last-child {
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
			}
		}

		.right {
			position: relative;

			>text {
				font-size: 100upx;
				color: #7878ff;
				position: absolute;
				top: -56upx;
				right: -40upx;
			}
		}
	}
</style>
