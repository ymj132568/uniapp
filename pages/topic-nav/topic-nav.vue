<template>
	<view>
		<!-- 导航栏 -->
		<view class="nav-box">
			<swiper-tab-head class="tab-nav" @tabtap="tabHead" :tabBars="tabBars" :tabIndex="tabIndex"></swiper-tab-head>
		</view>

		<!-- 滑块 -->
		<swiper class="swiper" :current="tabIndex" @change="swiperChange" :style="{height:swiperHight+'px'}">
			<swiper-item v-for="(items,index) in swiperList" :key="index">
				<scroll-view @scrolltolower="loadmore(index)" scroll-y="true" :style="{height:swiperHight+'px'}">
					<template v-if="items.list.length>0">
						<topic-list :topicdata="items.list"></topic-list>
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
	import swiperTabHead from '../../components/common/swiper-tab-head.vue';
	import nothing from '../../components/common/nothing.vue';
	import topicList from '../../components/news/topic-list.vue';
	import loadMore from '../../components/common/load-more.vue';
	let obj = {
		img: "../../static/demo/topicpic/13.jpeg",
		title: "话题名称",
		description: "话题描述-话题描述",
		total: 52141,
		todaynum: 3214
	};
	export default {
		components: {
			swiperTabHead,
			nothing,
			topicList,
			loadMore
		},
		data() {
			return {
				tabIndex: 0,
				swiperHight: 400,
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
				],
				swiperList: [{
						loadtext: "上拉刷新",
						list: [{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							},
							{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							},
							{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							},
							{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							}
						]
					},
					{
						loadtext: "上拉刷新",
						list: [{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
							},
							{
								img: "../../static/demo/topicpic/10.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 99961,
								todaynum: 6424
							},
							{
								img: "../../static/demo/topicpic/11.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 6842,
								todaynum: 674
							},
							{
								img: "../../static/demo/topicpic/12.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 1530,
								todaynum: 1134
							},
							{
								img: "../../static/demo/topicpic/13.jpeg",
								title: "话题名称",
								description: "话题描述-话题描述",
								total: 52141,
								todaynum: 3214
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
					return;
				}
				this.swiperList[index].loadtext = "加载中...";
				setTimeout(() => {
					if (this.swiperList[index].list.length < 15) {
						this.swiperList[index].list.push(obj);
						this.swiperList[index].loadtext = "上拉刷新"
					}else{
						this.swiperList[index].loadtext = "没有更多数据了"
					}
				},1000);
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHight = res.windowHeight - uni.upx2px(104);
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.nav-box {
		// position: fixed;
	}
</style>
