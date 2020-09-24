<template>
	<view class="comment-list-box p-all_20 f-d-r">
		<view>
			<image class="m-r_20" :src="item.userpic" mode="widthFix" lazy-load="true"></image>
		</view>
		<view class="comment-main">
			<view class="f-jc-sb">
				<text class="user-name">{{ item.userName }}</text>
				<view @tap="tapLike">
					<text class="like-num">{{ item.likeNum }}</text>
					<text class="icon iconfont icon-xinaixin animate__animated" :class="{'animate__fadeInDownBig':isLike}" v-if="isLike"></text>

					<text class="icon iconfont icon-xinaixin1 animate__animated" :class="{'animate__fadeInDown':!isLike}" v-else></text>
				</view>
			</view>
			<view @tap="openInput">
				<text class="main">{{ item.data }}</text>
			</view>
			<view class="time-and-reply">
				<text class="m-r_20">{{ item.time }}</text>
				<text @tap="openReplyList(index)" class="reply-btn" v-if="isComment">{{ item.replyData.length }} 回复</text>
			</view>
		</view>
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
			},
			isComment: {
				type: [String, Boolean],
				default: true
			}
		},
		data() {
			return {
				isLike: false,
				isTapLike: false,
				windowHeight: 300
			}
		},
		methods: {
			openInput() {
				this.$emit('inputOff', this.index)
			},
			openReplyList(index) {
				this.$emit('openReply', index);
			},
			tapLike() {
				//节流阀
				if (this.isTapLike) {
					return;
				}
				this.isTapLike = true;
				this.isLike = !this.isLike;
				if (this.isLike) {
					this.item.likeNum++;
				} else {
					this.item.likeNum--;
				}
				setTimeout(() => {
					this.isTapLike = false;
				}, 1000);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-list-box {
		>view:first-child {
			image {
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
			}
		}

		.comment-main {
			flex: 1;

			.user-name {
				color: #007AFF;
			}

			.main {
				word-break: break-word;
			}

			.like-num {
				margin-right: 10upx;
			}

			.icon-xinaixin {
				color: #ff0000;
			}

			.time-and-reply {
				margin-top: 10upx;

				.reply-btn {
					padding: 4upx 20upx;
					font-size: 24upx;
					border-radius: 20upx;
					background-color: #EEEEEE;
				}
			}
		}
	}
</style>
