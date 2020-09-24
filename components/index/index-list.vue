<template>
	<view class="index-list animate__animated animate__fadeIn" 
	:class="{'border-top':index!=0}">
		<view class="index-list1 f-jc-sb f-ai-c">
			<view class="f-ai-c">
				<image :src="item.userpic" mode="widthFix" alt="头像" lazy-load="true"></image>
				<text>{{ item.username }}</text>
			</view>
			<view class="f-d-r f-ai-b">
				<template v-if="!item.isguanzhu">
					<view class="f-ai-c guanzhu animate__animated" @tap="guanzhu" 
					:class="{animate__zoomOut:gzStatus}">
						<text class="icon iconfont icon-jiaguanzhu"></text>
						<text>关注</text>
					</view>
				</template>
				<view>
					<text class="icon iconfont icon-quxiao"></text>
				</view>
			</view>
		</view>
		<view class="index-list2" @tap="openDetails">
			<text>{{ item.title }}</text>
		</view>
		<view class="index-list3 f-jc-ai-c" @tap="openDetails">
			<image :src="item.titlepic" mode="widthFix" lazy-load />
			</image>
			<template v-if="item.type=='video'">
				<view class="index-list-play icon iconfont icon-bofang"></view>
				<view class="index-list-play_inof f-ai-c">
					<text class="icon iconfont icon-guankan"></text>
					<text>{{ item.playnum }}</text>
					<text>{{ item.long }}</text>
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
			},
			index: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				gzStatus: false //关注成功
			}
		},
		methods: {
			//打开详情，数据存储成功后跳转路由
			openDetails() {
				uni.setStorage({
					key: 'detailsData',
					data: JSON.stringify(this.item),
					success: () => {
						uni.navigateTo({
							url: '../details/details'
						});
					},
					fail: () => {
						uni.showToast({
							title: "数据获取失败！",
							icon: "none",
							duration: 3000
						})
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
				}, 500);
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
</style>
