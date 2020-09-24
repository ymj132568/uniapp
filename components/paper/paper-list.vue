<template>
	<view class="paper-list f-ai-c" 
	@tap="openChatWindow"
	:class="{'border-top':index!=0}">
		<image :src="item.userPic" mode="widthFix"></image>
		<view>
			<view class="f-jc-sb">
				<view class="user-name">
					<text>{{ item.userName }}</text>
				</view>
				<view>
					<text class="time">{{ item.messageTime }}</text>
				</view>
			</view>
			<view class="f-jc-sb">
				<view class="main">
					<text>{{ item.messageText }}</text>
				</view>
				<template v-show="item.unreadNum != 0">
					<view>
						<uni-badge type="error" :text="item.unreadNum">
						</uni-badge>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			item:{
				type:Object,
				default:{}
			},
			index:{
				type:Number,
				default:0
			}
		},
		methods:{
			openChatWindow(){
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paper-list {
		padding: 20upx 0;
	
		>image {
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
			margin-right: 20upx;
			flex-shrink: 0;
			-webkit-flex-shrink: 0;
		}
	
		>view {
			flex: 1;
	
			>view:first-child {
				.user-name {
					text {
						color: #000000;
						font-size: 36upx;
					}
				}
	
				.time {
					font-size: 28upx;
					color: #CBCBCB;
				}
			}
	
			>view:last-child {
				.main {
					text {
						color: #999999;
					}
				}
			}
		}
	}
</style>
