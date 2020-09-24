<template>
	<uni-nav-bar fixed="true" class="nav-bar" statusBar="true">
		<!-- 左 -->
		<view class="nav-left" slot="left">
			<text class="icon iconfont icon-qiandao"></text>
		</view>
		<!-- 标题 -->
		<view class="nav-title f-jc-ai-c" slot="title">
			<view @tap="guanZhu">
				<text :class="{active:tabIndex==0}">关注</text>
				<view v-show="tabIndex==0"></view>
			</view>
			<view>|</view>
			<view @tap="huaTi">
				<text :class="{active:tabIndex==1}">话题</text>
				<view v-show="tabIndex==1"></view>
			</view>
		</view>
		<!-- 右 -->
		<view class="nav-right" slot="right">
			<text @tap="tapRight" class="icon iconfont icon-bianji"></text>
		</view>
	</uni-nav-bar>
</template>

<script>
	import uniNavTab from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default{
		components:{
			uniNavTab
		},
		data(){
			return{
			}
		},
		props:{
			tabIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			tapLeft() {
				return;
			},
			tapRight() {
				uni.navigateTo({
					url: '../add-input/add-input'
				});
			},
			guanZhu(){
				this.$emit('tapAttention');
			},
			huaTi(){
				this.$emit('tapTheme');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-bar {
	
		.nav-left,
		.nav-right {
			height: 88upx;
			line-height: 76upx;
	
			text {
				font-size: 30px;
			}
		}
	
		.nav-left {
			text {
				color: #FFDF34;
			}
		}
	
		.nav-title {
			margin: 0 auto;
	
			>view {
				position: relative;
				font-weight: 700;
				color: #000000;
	
				>text {
					font-size: 32upx;
					padding: 0 20upx;
					color: #969696;
	
					&.active {
						color: #000000;
					}
				}
	
				>view {
					position: absolute;
					bottom: -10upx;
					left: 11upx;
					width: 60upx;
					border: 8upx solid #FFDF34;
					border-radius: 8upx;
					margin: 0 auto;
				}
			}
		}
	}
</style>
