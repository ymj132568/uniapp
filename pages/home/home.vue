<template>
	<view>
		<!-- 登录 -->
		<view class="p-all_20">
			<template v-if="!getLoginStatus">
				<not-login></not-login>
			</template>
			<template v-else>
				<login-inof></login-inof>
				<!-- 数据 -->
				<user-data :dataList="dataList"></user-data>
			</template>
		</view>

		<!-- 广告位 -->
		<view class="advertising p-all_20">
			<image src="../../static/demo/banner3.jpg" mode="widthFix" lazy-load="true"></image>
		</view>

		<!-- 操作菜单 -->
		<view>
			<menu-list :menuList="menuList"></menu-list>
		</view>
		
		<!-- #ifndef APP-PLUS || H5 -->
		<view class="f-jc-ai-c m-t_20" v-show="getLoginStatus">
			<button type="warn" size="mini" @tap="exitLogin">退出登录</button>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import notLogin from '../../components/home/not-login.vue';
	import loginInof from '../../components/home/login-inof.vue';
	import userData from '../../components/home/user-data.vue';
	import menuList from '../../components/home/menu-list.vue';
	import {mapGetters} from 'vuex';
	export default {
		components: {
			notLogin,
			loginInof,
			userData,
			menuList
		},
		data() {
			return {
				dataList: [{
						name: "糗事",
						num: 0
					},
					{
						name: "动态",
						num: 0
					},
					{
						name: "评论",
						num: 0
					},
					{
						name: "收藏",
						num: 0
					}
				],
				menuList: [{
						iconClass: "icon-yanjing",
						iconColor: "#44B3FF",
						name: "浏览历史"
					},
					{
						iconClass: "icon-renzheng",
						iconColor: "#FF7434",
						name: "糗百认证"
					},
					{
						iconClass: "icon-shenhe",
						iconColor: "#44B3FF",
						name: "糗百审核"
					}
				]
			}
		},
		computed: {
			...mapGetters(['getLoginStatus', 'getUserData']),
			listenUserData() {
				return this.getUserData
			}
		},
		onLoad() {
			if(this.getLoginStatus){
				this.initDataList();
			}
		},
		methods: {
			// #ifndef APP-PLUS || H5
			exitLogin(){
				uni.showModal({
					title:"提示",
					content:"是否退出登录?",
					confirmText:"退出",
					success:(res)=>{
						if(res.confirm){
							this.$store.commit('reviseLoginStatus',false);
						}
					}
				})
			},
			// #endif
			initDataList(isflag=false) {
				this.dataList[0].num=this.getUserData.qiushiNum;
				this.dataList[1].num = this.getUserData.newsNum;
				this.dataList[2].num = this.getUserData.commentNum;
				this.dataList[3].num = this.getUserData.collectNum;
				
				// 更新完储存本地
				if(isflag){
					uni.setStorage({
						key:"loginUserData",
						data:JSON.stringify([this.listenUserData])
					})
				}
			}
		},
		// #ifdef APP-PLUS || H5
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateTo({
					url: '../user-set/user-set'
				})
			}
		},
		// #endif
		watch: {
			listenUserData: {
				handler: function() {
					// 监听用户数据变化并且更新数据
					this.initDataList(true)
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.advertising {
		image {
			width: 100%;
			border-radius: 20upx;
		}
	}
</style>
