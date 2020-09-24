<template>
	<view class="box">
		<!-- 导航栏 -->
		<swiper-tab-head @tabtap="tabHead" :tabBars="tabBars" :tabIndex="tabIndex">
		</swiper-tab-head>
		
		<!-- 滑块 -->
		<swiper class="swiper" :current="tabIndex" @change="swiperChange" 
		:style="{height:swiperHight+'px'}">
			<swiper-item v-for="(items,index) in swiperList" :key="index">
				<scroll-view @scrolltolower="loadmore(index)" scroll-y="true" 
				:style="{height:swiperHight+'px'}">
					<template v-if="items.list.length>0">
						<!-- 内容 -->
						<block v-for="(item,index1) in items.list" :key="index1">
							<index-list :item="item" :index="index1">
							</index-list>
						</block>
						<!-- 加载更多 -->
						<load-more :loadtext="items.loadtext"></load-more>
					</template>
					<template v-else>
						<nothing></nothing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import swiperTabHead from '../../components/common/swiper-tab-head.vue';
	import loadMore from '../../components/common/load-more.vue';
	import nothing from '../../components/common/nothing.vue';
	export default {
		components: {
			indexList,
			swiperTabHead,
			loadMore,
			nothing
		},
		data() {
			return {
				swiperHight: 400,
				swiperList: [{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: false,
								type: "img", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/11.jpg", //封面图
								imgs:["../../static/demo/datapic/20.jpg",
									"../../static/demo/datapic/21.jpg",
									"../../static/demo/datapic/23.jpg"
								],
								inofnum: {
									status: 2, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: true,
								type: "video", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/10.jpg", //封面图
								playnum: "20W",
								long: "03:56",
								inofnum: {
									status: 1, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: false,
								type: "img", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/11.jpg", //封面图
								imgs:["../../static/demo/datapic/24.jpg",
									"../../static/demo/datapic/25.jpg"
								],
								inofnum: {
									status: 2, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: true,
								type: "video", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/10.jpg", //封面图
								playnum: "20W",
								long: "03:56",
								inofnum: {
									status: 1, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: false,
								type: "img", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/11.jpg", //封面图
								imgs:["../../static/demo/datapic/26.jpg",
									"../../static/demo/datapic/27.jpg"
								],
								inofnum: {
									status: 2, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: true,
								type: "video", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/10.jpg", //封面图
								playnum: "20W",
								long: "03:56",
								inofnum: {
									status: 1, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: false,
								type: "img", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/11.jpg", //封面图
								imgs:["../../static/demo/datapic/28.jpg"],
								inofnum: {
									status: 2, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: true,
								type: "video", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/10.jpg", //封面图
								playnum: "20W",
								long: "03:56",
								inofnum: {
									status: 1, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: false,
								type: "img", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/11.jpg", //封面图
								imgs:["../../static/demo/datapic/29.jpg",
								"../../static/demo/datapic/30.jpg",
								"../../static/demo/datapic/31.jpg"
								],
								inofnum: {
									status: 2, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							},
							{
								userpic: "../../static/demo/userpic/1.jpg",
								username: "昵称",
								isguanzhu: true,
								type: "video", //img:图文 video:视频
								title: "标题",
								titlepic: "../../static/demo/datapic/10.jpg", //封面图
								playnum: "20W",
								long: "03:56",
								inofnum: {
									status: 1, //0:无状态  1:顶  2:踩
									ding: 11,
									cai: 12
								},
								commentnum: 10,
								sharenum: 10
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: []
					},
					{
						loadtext: "上拉刷新",
						list: []
					},
					{
						loadtext: "上拉刷新",
						list: []
					}
				],
				tabIndex: 0,
				tabBars: [{
						name: "关注"
					},
					{
						name: "推荐"
					},
					{
						name: "热点"
					},
					{
						name: "娱乐"
					},
					{
						name: "财经"
					},
					{
						name: "军事"
					},
					{
						name: "媒体"
					}
				]
			}
		},
		methods: {
			swiperChange(e) {
				this.tabIndex = e.detail.current;
			},
			tabHead(index) {
				this.tabIndex = index;
			},
			loadmore(index) {
				if (this.swiperList[index].loadtext != "上拉刷新") {
					return false;
				}
				this.swiperList[index].loadtext = "加载中...";
				setTimeout(() => {
					if (this.swiperList[index].list.length <= 5) {
						let obj = {
							userpic: "../../static/demo/userpic/1.jpg",
							username: "昵称",
							isguanzhu: false,
							type: "img", //img:图文 video:视频
							title: "标题",
							titlepic: "../../static/demo/datapic/11.jpg", //封面图
							imgs:[
								"../../static/demo/datapic/36.jpg",
								"../../static/demo/datapic/37.jpg",
								"../../static/demo/datapic/38.jpg",
								"../../static/demo/datapic/39.jpg",
								"../../static/demo/datapic/40.jpg"
							],
							inofnum: {
								status: 2, //0:无状态  1:顶  2:踩
								ding: 11,
								cai: 12
							},
							commentnum: 10,
							sharenum: 10
						};
						this.swiperList[index].list.push(obj);
						this.swiperList[index].loadtext = "上拉刷新";
					} else {
						this.swiperList[index].loadtext = "没有更多数据了";
					}
				}, 1000);
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHight = res.windowHeight - uni.upx2px(102);
				}
			});
		},
		//监听输入框被点击
		// #ifdef APP-PLUS || H5
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		//监听导航栏按钮
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					
					break;
				case 1:
					uni.navigateTo({
						url: '../add-input/add-input'
					});
					break;
			}
		}
		//#endif
	}
</script>

<style lang="scss" scoped>
</style>
