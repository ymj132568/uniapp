<template>
	<view>
		<view class="bg">
			<image src="../../static/demo/topicpic/11.jpeg" mode="widthFix"></image>
		</view>
		<view class="topic-inof">
			<view class="topic-inof-t">
				<image src="../../static/demo/topicpic/11.jpeg" 
				mode="widthFix"></image>
				<text>#<text>话题名称</text>#</text>
			</view>
			<view class="topic-inof-c f-d-r">
				<view>
					<text>动态</text>
					<text>10000</text>
				</view>
				<view>
					<text>今日</text>
					<text>641</text>
				</view>
			</view>
			<view class="topic-inof-b">
				<text>置顶：</text>
				<text>程序员是青春饭吗？</text>
			</view>
		</view>
	</view>
</template>

<scrip>
	
</scrip>

<style lang="scss" scoped>
	.bg{
		height: 200px;
		overflow: hidden;
		image{
			width: 100%;
			filter: blur(10px);
			-webkit-filter:blur(3px);
		}
	}
	.topic-inof{
		padding: 0 20upx 20upx 20upx;
		position: relative;
		.topic-inof-t{
			position: relative;
			padding-left: 220upx;
			image{
				width: 200upx;
				height:200upx;
				border-radius: 20upx;
				position: absolute;
				top:-100upx;
				left: 0;
			}
			text{
				font-size: 38upx;
				font-weight: 700;
			}
		}
		.topic-inof-c{
			margin-top: 50upx;
			>view{
				margin-right: 20upx;
				>text{
					color: #CDCDCD;
				}
				>text:first-child{
					margin-right: 6upx;
				}
			}
		}
		.topic-inof-b{
			padding: 20upx 0;
			text{
				font-size: 32upx;
				font-weight: 700;
				color:#A3A3A3;
			}
		}
	}
</style>
