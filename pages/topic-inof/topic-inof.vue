<template>
	<view class="topic-box">
		<!-- 按钮 -->
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="share-button" :style="{backgroundColor:headBgColor}">
			<head-button>
				<view slot="title" v-show="topicShow" class="topic-name">
					<text>#<text>话题名称</text>#</text>
				</view>
			</head-button>
		</view>
		<!-- #endif -->
		
		<!-- 话题信息 -->
		<view class="topic-head">
			<news-topic-inof-head></news-topic-inof-head>
		</view>
		
		<!-- 导航栏 -->
		<view>
			<swiper-tab-head @tabtap="tabHead" :tabBars="tabBars" :tabIndex="tabIndex" border="none" width="50%">
			</swiper-tab-head>
		</view>
		
		<!-- 滑块内容 -->
		<view class="swiper-box">
			<swiper class="swiper" :current="tabIndex" @change="swiperChange" 
			:style="{height:swiperHight+'px'}">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					
					<scroll-view @scrolltolower="loadmore(index)" :scroll-y="scrollY" 
					:style="{height:swiperHight+'px'}">
						<block v-for="(obj,index1) in item.list" :key="index1">
							<news-list @modifyStatus="guanZhuStatus(index)" 
							:item="obj" :index="index1"></news-list>
						</block>
						<load-more :loadtext="item.loadtext"></load-more>
					</scroll-view>
					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsTopicInofHead from '../../components/news/news-topic-inof-head.vue';
	import swiperTabHead from '../../components/common/swiper-tab-head.vue';
	import newsList from '../../components/news/news-list.vue';
	import loadMore from '../../components/common/load-more.vue';
	// #ifdef APP-PLUS || H5
	import headButton from '../../components/common/head-button.vue';
	// #endif
	export default {
		components: {
			newsTopicInofHead,
			swiperTabHead,
			newsList,
			loadMore,
			// #ifdef APP-PLUS || H5
			headButton
			// #endif
		},
		data() {
			return {
				// #ifdef APP-PLUS || H5
				inTheEnd: false,
				scrollTop: 0,
				topicShow: false,
				headBgColor: "rgba(255,255,255,0)",
				// #endif
				scrollY:false,
				swiperHight: 400,
				tabIndex: 0,
				tabBars: [{
						name: "默认"
					},
					{
						name: "最新"
					}
				],
				swiperList: [{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								sex: 1, //0是男 1是女
								age: 29,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								address: "深圳 龙岗",
								goodnum: 324,
								commentnum: 89,
								sharenum: 23
							},
							{
								userpic: "../../static/demo/userpic/11.jpg",
								username: "昵称",
								sex: 0, //0是男 1是女
								age: 25,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								video: {
									titlepic: "../../static/demo/datapic/2.jpg",
									looknum: 200000,
									longTime: "03:31"
								},
								address: "深圳 龙岗",
								goodnum: 1230,
								commentnum: 310,
								sharenum: 63
							},
							{
								userpic: "../../static/demo/userpic/13.jpg",
								username: "昵称",
								sex: 1, //0是男 1是女
								age: 19,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								share: {
									titlepic: "../../static/demo/datapic/1.jpg",
									title: "分享标题"
								},
								address: "深圳 龙岗",
								goodnum: 450,
								commentnum: 163,
								sharenum: 13
							},
							{
								userpic: "../../static/demo/userpic/10.jpg",
								username: "昵称",
								sex: 0, //0是男 1是女
								age: 31,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								image: "../../static/demo/datapic/3.jpg",
								address: "广州 白云",
								goodnum: 95,
								commentnum: 35,
								sharenum: 3
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								sex: 1, //0是男 1是女
								age: 29,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								address: "深圳 龙岗",
								goodnum: 324,
								commentnum: 89,
								sharenum: 23
							},
							{
								userpic: "../../static/demo/userpic/11.jpg",
								username: "昵称",
								sex: 0, //0是男 1是女
								age: 25,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								video: {
									titlepic: "../../static/demo/datapic/2.jpg",
									looknum: 200000,
									longTime: "03:31"
								},
								address: "深圳 龙岗",
								goodnum: 1230,
								commentnum: 310,
								sharenum: 63
							},
							{
								userpic: "../../static/demo/userpic/13.jpg",
								username: "昵称",
								sex: 1, //0是男 1是女
								age: 19,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								share: {
									titlepic: "../../static/demo/datapic/1.jpg",
									title: "分享标题"
								},
								address: "深圳 龙岗",
								goodnum: 450,
								commentnum: 163,
								sharenum: 13
							},
							{
								userpic: "../../static/demo/userpic/10.jpg",
								username: "昵称",
								sex: 0, //0是男 1是女
								age: 31,
								isguanzhu: false,
								title: "我的心情 || 我的感受",
								image: "../../static/demo/datapic/3.jpg",
								address: "广州 白云",
								goodnum: 95,
								commentnum: 35,
								sharenum: 3
							}
						]
					}
				]
			}
		},
		methods: {
			tabHead(index) {
				this.tabIndex = index;
			},
			swiperChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if (this.swiperList[index].loadtext != "上拉刷新") {
					return false;
				}
				this.swiperList[index].loadtext = "加载中...";
				setTimeout(() => {
					if (this.swiperList[index].list.length <= 10) {
						let obj = {
							userpic: "../../static/demo/userpic/10.jpg",
							username: "昵称",
							sex: 0, //0是男 1是女
							age: 31,
							isguanzhu: false,
							title: "我的心情 || 我的感受",
							image: "../../static/demo/datapic/3.jpg",
							address: "广州 白云",
							goodnum: 95,
							commentnum: 35,
							sharenum: 3
						};
						this.swiperList[index].list.push(obj);
						this.swiperList[index].loadtext = "上拉刷新";
					} else {
						this.swiperList[index].loadtext = "没有更多数据了";
					}
				}, 1000);
			},
			guanZhuStatus(index) {
				this.swiperList[index].list.isguanzhu = true;
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef APP-PLUS || H5
					this.swiperHight = res.windowHeight - uni.upx2px(100);
					// #endif
					// #ifdef H5
					this.swiperHight = res.windowHeight - uni.upx2px(220);
					// #endif
					// #ifdef APP-PLUS
					//app里还要减去状态栏
					this.swiperHight = res.windowHeight -
						uni.upx2px(220) - res.statusBarHeight;
					// #endif
				}
			});
		},
		onPageScroll(e) {
			// #ifdef APP-PLUS || H5
			if (this.inTheEnd) {
				if (this.scrollTop < e.scrollTop) {
					this.scrollTop = e.scrollTop;
				}
			}
			
			// 标题栏变化和滚动条的禁用状态
			if (e.scrollTop == 0) {
				this.headBgColor = "rgba(255,255,255,0)";
				this.topicShow = false;
			} else if (this.scrollTop - e.scrollTop <= 5 && this.inTheEnd) {
				this.headBgColor = "rgba(255,255,255,1)";
				this.topicShow = true;
			} else if (this.inTheEnd) {
				if (parseInt(e.scrollTop / this.scrollTop * 10) >= 8) {
					this.topicShow = true;
				} else {
					this.topicShow = false;
				}
				this.headBgColor = "rgba(255,255,255," + 
				(e.scrollTop / this.scrollTop) + ")";
			}
			// #endif
			
			if(e.scrollTop==0){
				// 大的滚动条回到顶部就禁用滑块的滚动条，页面滑到底部再打开
				this.scrollY=false;
			}
		},
		onReachBottom() {
			this.scrollY=true;
			// #ifdef APP-PLUS || H5
			if (!this.inTheEnd) {
				this.inTheEnd = true;
				this.topicShow = true;
				this.headBgColor = "#FFFFFF";
			}
			// #endif
		}
	}
</script>

<style lang="scss" scoped>
	.topic-box {
		position: relative;
	}

	.share-button {
		z-index: 99;
		position: fixed;
		// position: absolute;
		top: 0;
		left: 0;
		right: 0;

		.topic-name {
			margin: auto;
			font-size: 38upx;
		}
	}

	.bg-white {
		background-color: #FFFFFF;
	}

	.swiper-box {
		padding-top: 20upx;
	}
</style>
