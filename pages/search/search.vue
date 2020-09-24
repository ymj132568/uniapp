<template>
	<view class="box">
		<template v-if="list.length>0 && isSearch">
			<block v-for="(item,index) in list" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
		</template>
		<template v-else-if="list.length==0 && isSearch">
			<view :style="{height:nothingHight+'px'}">
				<nothing></nothing>
			</view>
		</template>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue';
	import nothing from '../../components/common/nothing.vue';
	const arr = [{
			userpic: "../../static/demo/userpic/1.jpg",
			username: "昵称",
			isguanzhu: false,
			type: "img", //img:图文 video:视频
			title: "标题",
			titlepic: "../../static/demo/datapic/11.jpg", //封面图
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
	];
	export default {
		components: {
			indexList,
			nothing
		},
		data() {
			return {
				isSearch: false,
				searchText: "",
				nothingHight: 300,
				list: []
			}
		},
		methods: {
			getData(isRefresh = false) {
				if (this.searchText == "") {
					return;
				}
				//判断是搜索事件还是刷新事件
				if (!isRefresh) {
					this.isSearch = false;
					uni.showLoading({
						title: "搜索中..."
					});
				}
				setTimeout(() => {
					//搜索就执行搜索，刷新就追加数据
					if(!isRefresh){
						//模拟随机有无数据
						if (parseInt(Math.random() * 2)) {
							this.list = [...arr];
						} else {
							this.list = [];
						}
					}else{
						arr.forEach((v)=>{
							this.list.unshift(v);
						});
					}
					this.isSearch = true;
					uni.hideLoading();
					uni.stopPullDownRefresh();
				}, 2000);
			}
		},
		mounted() {
			//"autoBackButton":"false"配置不生效，只能直接操作dom元素隐藏
			//#ifdef H5
			document.querySelector('.uni-page-head-hd').style.display = 'none';
			//#endif
		},
		//监听下拉刷新
		onPullDownRefresh() {
			if (this.isSearch) {
				this.getData(true);
			} else {
				uni.stopPullDownRefresh();
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					this.nothingHight = res.windowHeight;
				}
			});
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
			this.searchText = e.text;
		},
		//监听键盘上的搜索按钮
		onNavigationBarSearchInputConfirmed(e) {
			// console.log(e);
			this.getData();
		}
	}
</script>

<style lang="less" scoped>
	.box {}
</style>
