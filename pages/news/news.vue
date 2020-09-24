<template>
	<view>
		<!-- 自定义导航栏 -->
		<view>
			<news-nav-head :tabIndex="tabIndex" @tapAttention="attention" @tapTheme="theme"></news-nav-head>
		</view>

		<swiper class="swiper" :current="tabIndex" @change="swiperChange" 
		:style="{height:swiperHight+'px'}">
			<swiper-item>
				<scroll-view @scrolltolower="loadmore()" scroll-y="true" 
				:style="{height:swiperHight+'px'}">
					<block v-for="(item,index) in attentionObject.list" :key="index">
						<news-list @modifyStatus="guanZhuStatus(index)" 
						:item="item" :index="index"></news-list>
					</block>
					<!-- 加载更多 -->
					<load-more :loadtext="attentionObject.loadtext"></load-more>
				</scroll-view>
			</swiper-item>

			<swiper-item>
				<scroll-view scroll-y="true" :style="{height:swiperHight+'px'}">
					<view class="input-box">
						<input type="text" 
						placeholder-class="icon iconfont icon-sousuo" 
						placeholder="搜索内容~" />
					</view>
					
					<view>
						<news-swipr :imgList="swiperList"></news-swipr>
					</view>
					
					<view>
						<classlist :classlist="classList"></classlist>
					</view>
					
					<view>
						<view class="topic-list-text">
							<text>最近更新</text>
						</view>
						<topic-list :topicdata="topicData"></topic-list>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import loadMore from '../../components/common/load-more.vue';
	import newsNavHead from '../../components/news/news-nav-head.vue';
	import newsList from '../../components/news/news-list.vue';
	import newsSwipr from '../../components/news/news-swipr.vue';
	import classlist from '../../components/news/classification.vue';
	import topicList from '../../components/news/topic-list.vue';

	let moreObj = {
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
	};

	export default {
		components: {
			newsNavHead,
			newsList,
			loadMore,
			newsSwipr,
			classlist,
			topicList
		},
		data() {
			return {
				tabIndex: 0,
				swiperHight: 400,
				swiperList:[
					{src:"../../static/demo/datapic/1.jpg"},
					{src:"../../static/demo/datapic/2.jpg"},
					{src:"../../static/demo/datapic/3.jpg"}
				],
				classList:[
					{name:"最新"},
					{name:"游戏"},
					{name:"情感"},
					{name:"打卡"},
					{name:"故事"},
					{name:"喜爱"},
				],
				attentionObject: {
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
				topicData: [
					{
						img:"../../static/demo/topicpic/10.jpeg",
						title: "话题名称",
						description: "话题描述-话题描述",
						total:99961,
						todaynum:6424
					},
					{
						img:"../../static/demo/topicpic/11.jpeg",
						title: "话题名称",
						description: "话题描述-话题描述",
						total:6842,
						todaynum:674
					},
					{
						img:"../../static/demo/topicpic/12.jpeg",
						title: "话题名称",
						description: "话题描述-话题描述",
						total:1530,
						todaynum:1134
					},
					{
						img:"../../static/demo/topicpic/13.jpeg",
						title: "话题名称",
						description: "话题描述-话题描述",
						total:52141,
						todaynum:3214
					}
				]
			}
		},
		methods: {
			guanZhuStatus(index) {
				this.attentionObject.list[index].isguanzhu = true;
			},
			attention() {
				this.tabIndex = 0;
			},
			theme() {
				this.tabIndex = 1;
			},
			swiperChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore() {
				if (this.attentionObject.loadtext != "上拉刷新") {
					return false;
				}
				this.attentionObject.loadtext = "加载中...";
				setTimeout(() => {
					if (this.attentionObject.list.length <= 10) {
						this.attentionObject.list.push(moreObj);
						this.attentionObject.loadtext = "上拉刷新";
					} else {
						this.attentionObject.loadtext = "没有更多数据了";
					}
				}, 1000);
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					
					// #ifndef APP-PLUS
					this.swiperHight = res.windowHeight - uni.upx2px(90);
					// #endif
					
					// #ifdef APP-PLUS
					this.swiperHight = res.windowHeight - uni.upx2px(140);
					// #endif
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.input-box {
		padding: 20upx;

		input {
			background-color: #EEEEEE;
			border-radius: 10upx;
			font-size: 24upx;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
		}
	}
	.swiper-box{
		// width: 100%;
	}
	.topic-list-text{
		padding: 20upx;
	}
</style>
