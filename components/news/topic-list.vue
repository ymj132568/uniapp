<template>
		<view class="update">
			<block v-for="(item,index) in topicdata" :key="index">
				<view @tap="topicInof" 
				class="topic f-d-r animate__animated animate__fadeIn"
				:class="{'border-top':index!=0}">
					<view class="left">
						<image :src="item.img" mode="widthFix" lazy-load></image>
					</view>
					<view class="right f-d-c">
						<view>
							<text>#<text>{{ item.title }}</text>#</text>
						</view>
						<view>
							<text>{{ item.description }}</text>
						</view>
						<view class="f-d-r data">
							<view>
								<text>动态</text>
								<text>{{ item.total }}</text>
							</view>
							<view>
								<text>今日</text>
								<text>{{ item.todaynum }}</text>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
</template>

<script>
	export default {
		props:{
			topicdata:{
				type:Array,
				default:[]
			}
		},
		methods:{
			topicInof(){
				uni.navigateTo({
					url:'../../pages/topic-inof/topic-inof'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.update {
		padding: 20upx;
		.topic {
			padding: 16upx 0 20upx 0;
			.left {
				image {
					width: 180upx;
					height: 180upx;
					border-radius: 10upx;
					margin-right: 20upx;
				}
			}

			.right {
				>view {
					text {
						font-size: 24upx;
						color: #A4A4A4;
					}
				}

				>view:first-child {
					text {
						font-size: 32upx;
						color: #000000;
						font-weight: 700;
					}
				}
				.data{
					>view{
						text:first-child{
							margin-right: 6upx;
						}
					}
					>view:first-child{
						margin-right: 30upx;
					}
				}
			}
		}
	}
</style>
