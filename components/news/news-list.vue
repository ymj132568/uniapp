<template>
	<view class="list f-d-r animate__animated animate__fadeIn">
		<view>
			<image :src="item.userpic" mode="widthFix" lazy-load=""></image>
		</view>
		<view>
			<view class="list1 f-jc-sb">
				<view class="f-d-r">
					<text>{{ item.username }}</text>
					<sex :sex="item.sex" :age="item.age"></sex>
				</view>
				<view class="f-ai-c">
					<template v-show="!item.isguanzhu">
						<view @tap="guanzhu" 
						class="f-jc-ai-c animate__animated"
						:class="{animate__zoomOut:gzStatus}">
							<text class="icon iconfont icon-jiaguanzhu"></text>
							<text>关注</text>
						</view>
					</template>
					<text class="icon iconfont icon-quxiao"></text>
				</view>
			</view>
			<view class="list2">
				<text>{{ item.title }}</text>
			</view>
			<view class="list3 f-jc-ai-c">
				<template v-if="item.video">
					<image :src="item.video.titlepic" mode="widthFix" lazy-load></image>
					<view class="index-list-play icon iconfont icon-bofang"></view>
					<view class="index-list-play_inof f-ai-c">
						<text class="icon iconfont icon-guankan"></text>
						<text>{{ item.video.looknum>=10000 ? (item.video.looknum/10000)+'w' : item.video.looknum }}</text>
						<text>03:23</text>
					</view>
				</template>
	
				<!-- 分享格式显示 -->
				<template v-else-if="item.share">
					<view class="share-box f-ai-c">
						<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
						<view>
							<text>{{ item.share.title }}</text>
						</view>
					</view>
				</template>
				<template v-else-if="item.image">
					<image :src="item.image" mode="widthFix" lazy-load=""></image>
				</template>
			</view>
			<view class="list4 f-jc-sb">
				<view>
					<text>{{ item.address }}</text>
				</view>
				<view class="f-d-r">
					<view>
						<text class="icon iconfont icon-fenxiang1"></text>
						<!-- #ifdef H5 || APP-PLUS -->
						<sup>{{ item.sharenum>999 ? '999+' : item.sharenum }}</sup>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
						<text>{{ item.sharenum>999 ? '999+' : item.sharenum }}</text>
						<!-- #endif -->
					</view>
					<view>
						<text class="icon iconfont icon-pinglun"></text>
						<!-- #ifdef H5 || APP-PLUS -->
						<sup>{{ item.commentnum>999 ? '999+' : item.commentnum }}</sup>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
						<text>{{ item.commentnum>999 ? '999+' : item.commentnum }}</text>
						<!-- #endif -->
					</view>
					<view>
						<text class="icon iconfont icon-dianzan"></text>
						<!-- #ifdef H5 || APP-PLUS -->
						<sup>{{ item.goodnum>999 ? '999+' : item.goodnum }}</sup>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN || MP-ALIPAY -->
						<text>{{ item.goodnum>999 ? '999+' : item.goodnum }}</text>
						<!-- #endif -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import sex from '../common/sex.vue';
	export default{
		components:{
			sex
		},
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
		data(){
			return{
				gzStatus:false
			}
		},
		methods:{
			guanzhu(){
				this.gzStatus=true;
				setTimeout(()=>{
					this.$emit('modifyStatus');
					uni.showToast({
						title:"关注成功！"
					});
				},500);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		padding: 20upx;
	
		>view:first-child {
			image {
				margin-right: 20upx;
				width: 90upx;
				height: 90upx;
				border-radius: 100%;
			}
		}
	
		>view:last-child {
			width: 100%;
		}
	
		.list1 {
			color: #969696;
	
			>view:first-child {
				>text {
					font-weight: 700;
					font-size: 32upx;
				}
			}
	
			>view:last-child {
				>view {
					height: 40upx;
					line-height: 40upx;
					margin-right: 20upx;
					border-radius: 20upx;
					padding: 0 20upx;
					background-color: #BBBBBB;
					color: #FFFFFF;
	
					text {
						font-size: 24upx;
					}
				}
	
				>text {
					padding-left: 20upx;
					font-size: 32upx;
				}
			}
		}
	
		.list2 {
			margin: 20upx 0;
	
			text {
				font-size: 32upx;
				font-weight: 700;
				line-height: 24upx;
			}
		}
	
		.list3 {
			position: relative;
	
			>image {
				width: 100%;
				border-radius: 20upx;
			}
	
			.index-list-play {
				z-index: 99;
				position: absolute;
				color: #FFFFFF;
				font-size: 80upx;
			}
	
			.index-list-play_inof {
				position: absolute;
				bottom: 8upx;
				right: 8upx;
				color: #fff;
				font-size: 24upx;
				border-radius: 24upx;
				padding: 0 16upx;
				background-color: rgba(51, 51, 51, .8);
	
				>text:first-child {
					margin-right: 10upx;
				}
	
				>text:last-child {
					margin-left: 20upx;
				}
			}
	
			.share-box {
				width: 100%;
				background-color: #EEEEEE;
				padding: 20upx;
				border-radius: 10upx;
	
				>image {
					border-radius: 10upx;
					width: 200upx;
					height: 150upx;
					margin-right: 20upx;
				}
			}
		}
	
		.list4 {
			font-size: 24upx;
			color: #BBBBBB;
			padding: 15upx 0;
			border-bottom: 1px solid #BBBBBB;
	
			>view:last-child {
				>view {
					margin-left: 20upx;
				}
			}
		}
	}
</style>
