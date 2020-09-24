<template>
	<view class="box">
		<view>
			<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabTap" border="none" width="33.3333%"></swiper-tab-head>
		</view>
		<swiper class="swiper" :current="tabIndex" @change="swiperChange" :style="{height: swiperHight+'px'}">
			<swiper-item v-for="(item,index) in friendsList" :key="index">
				<scroll-view scroll-y="true" :style="{height: swiperHight+'px'}">
					<template v-if="item.list.length>0">
						<block v-for="(list,index1) in item.list" :key="index1">
							<friends-list :item="list" :index="index1"></friends-list>
						</block>
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
	import friendsList from '../../components/paper/friends-fist.vue';
	import nothing from '../../components/common/nothing.vue';
	export default {
		components: {
			swiperTabHead,
			friendsList,
			nothing
		},
		data() {
			return {
				swiperHight: 400,
				tabBars: [{
						name: "互关",
						num: 16
					},
					{
						name: "关注",
						num: 3
					},
					{
						name: "粉丝",
						num: 0
					}
				],
				tabIndex: 0,
				friendsList: [{
						list: [{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 19
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 22
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 17
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 26
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 19
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 22
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 17
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 26
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 19
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 22
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 17
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 26
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 19
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 22
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 17
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 26
							}
						]
					},
					{
						list: [{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 19
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 1, //0是男 1是女
								age: 22
							},
							{
								userPic: "../../static/demo/userpic/1.jpg",
								userName: "昵称",
								sex: 0, //0是男 1是女
								age: 17
							}
						]
					},
					{
						list: []
					}
				]
			}
		},
		methods: {
			tabTap(index) {
				this.tabIndex = index;
			},
			swiperChange(e) {
				this.tabIndex = e.detail.current;
			}
		},
		//监听导航栏按钮
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		//监听输入变化
		onNavigationBarSearchInputChanged(e) {
			// console.log(e);
		},
		//监听键盘上的搜索按钮
		onNavigationBarSearchInputConfirmed(e) {
			// console.log(e);
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.swiperHight = res.windowHeight - uni.upx2px(100);
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		padding: 0 20upx;
	}
</style>
