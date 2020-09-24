<template>
	<view class="index-list animate__animated"
	:class="{'animate__fadeIn':isAnimate}">
		<view class="index-list1 f-jc-sb f-ai-c">
			<view class="f-ai-c">
				<image :src="item.userpic" mode="widthFix" alt="头像" lazy-load="true"></image>
				<text>{{ item.username }}</text>
			</view>
			<view class="f-d-r f-ai-b">
				<template v-if="!item.isguanzhu">
					<view class="f-ai-c guanzhu animate__animated" @tap="guanzhu" :class="{animate__zoomOut:gzStatus}">
						<text class="icon iconfont icon-jiaguanzhu"></text>
						<text>关注</text>
					</view>
				</template>
				<view>
					<text class="icon iconfont icon-quxiao"></text>
				</view>
			</view>
		</view>
		<view class="index-list2">
			<text>{{ item.title }}</text>
		</view>
		<view class="index-list3 f-d-c">
			<template v-if="item.type=='img'">
				<view class="imgs">
					<block v-for="(img,index) in item.imgs" :key="index">
						<image @tap="previewImage(index)" :src="img" mode="widthFix" lazy-load="true">
						</image>
					</block>
				</view>
			</template>
			<template v-if="item.type=='video'">
				<view class="video f-jc-ai-c">
					<image :src="item.titlepic" mode="widthFix" lazy-load="true" />
					</image>
					<view class="index-list-play icon iconfont icon-bofang"></view>
					<view class="index-list-play_inof f-ai-c">
						<text class="icon iconfont icon-guankan"></text>
						<text>{{ item.playnum }}</text>
						<text>{{ item.long }}</text>
					</view>
				</view>
			</template>
		</view>
		<view class="index-list4 f-jc-sb">
			<view class="f-d-r">
				<view @tap="ding" :class="{active:(item.inofnum.status==1)}">
					<text class="icon iconfont icon-xiaolian1"></text>
					<text>{{ item.inofnum.ding }}</text>
				</view>
				<view @tap="cai" :class="{active:(item.inofnum.status==2)}">
					<text class="icon iconfont icon-bukaixintianchong"></text>
					<text>{{ item.inofnum.cai }}</text>
				</view>
			</view>
			<view class="f-d-r">
				<view>
					<text class="icon iconfont icon-pinglun"></text>
					<text>{{ item.commentnum }}</text>
				</view>
				<view>
					<text class="icon iconfont icon-fenxiang1"></text>
					<text>{{ item.sharenum }}</text>
				</view>
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
			}
		},
		data() {
			return {
				gzStatus: false, //关注成功
				isAnimate:true
			}
		},
		methods: {
			//预览图片
			previewImage(index) {
				uni.previewImage({
					current: index,
					urls: this.item.imgs,
					success:()=>{
						this.isAnimate=false
					}
				});
			},
			// 关注
			guanzhu() {
				this.gzStatus = true;
				setTimeout(() => {
					uni.showToast({
						title: "关注成功！"
					});
					this.item.isguanzhu = true;
				}, 1000);
			},
			// 点赞操作
			ding() {
				if (this.item.inofnum.status == 1) {
					return false;
				}
				if (this.item.inofnum.status == 2) {
					this.item.inofnum.ding++;
					this.item.inofnum.cai--;
				} else {
					this.item.inofnum.ding++;
				}
				this.item.inofnum.status = 1;
			},
			cai() {
				if (this.item.inofnum.status == 2) {
					return false;
				}
				if (this.item.inofnum.status == 1) {
					this.item.inofnum.ding--;
					this.item.inofnum.cai++;
				} else {
					this.item.inofnum.cai++;
				}
				this.item.inofnum.status = 2;
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/index-list.scss';
	.index-list3 .imgs{
		image{
			width: 49%;
			max-height: 200upx;
		}
		//分别设置偶数和奇数的外边距
		image:nth-child(odd){
			margin-right: 1%;
		}
		image:nth-child(even){
			margin-left: 1%;
		}
	}
	
	.index-list{
		padding: 20upx !important;
	}
</style>
