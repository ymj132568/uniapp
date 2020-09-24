<template>
	<view>
		<view>
			<template v-if="getLoginStatus">
				<set-list :list="loginMenuList" @changTap="loginUserSet">
				</set-list>
			</template>
			<template v-else>
				<set-list :list="notLoginMenuList"  @changTap="notLoginUserSet">
				</set-list>
			</template>
		</view>
		<view>
			<template v-if="getLoginStatus">
				<view class="button-box">
					<button type="default" @tap="exitLogin">退出登录</button>
				</view>
			</template>
			<template v-else>
				<view class="button-box">
					<button type="default" @tap="login">立即登录</button>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import setList from '../../components/common/set-list.vue';
	import {mapGetters} from 'vuex';
	export default {
		components: {
			setList
		},
		data() {
			return {
				loginMenuList: [{
						name: "账号安全"
					},
					{
						name: "绑定邮箱"
					},
					{
						name: "编辑资料"
					},
					{
						name: "小纸条"
					},
					{
						name: "清除缓存"
					},
					{
						name: "意见反馈"
					},
					{
						name: "关于仿糗事百科"
					}
				],
				notLoginMenuList: [{
						name: "清除缓存"
					},
					{
						name: "意见反馈"
					},
					{
						name: "关于仿糗事百科"
					}
				]
			}
		},
		computed: {
			...mapGetters(['getLoginStatus', 'getUserData'])
		},
		methods: {
			exitLogin(){
				uni.showModal({
					title:"提示",
					content:"是否退出登录?",
					confirmText:"退出",
					success:(res)=>{
						if(res.confirm){
							this.$store.commit('reviseLoginStatus',false);
							uni.navigateBack({
								delta:1
							})
						}
					}
				})
				
			},
			login(){
				uni.navigateTo({
					url:'../../pages/user-login/user-login'
				})
			},
			clearCache(){
				uni.showModal({
					title:"提示",
					content:"清除缓存后会图片和聊天信息将会消失，是否继续?",
					confirmText:"继续",
					success:(res)=>{
						if(res.confirm){
							//删除指定key的本地储存
							uni.removeStorage({
								key:"key",
								success: () => {
									uni.showToast({
										title:"清理缓存成功！",
										icon:"none"
									})
								},
								fail: () => {
									uni.showToast({
										title:"目前没有缓存，无需清理！",
										icon:"none"
									})
								}
							})
						}
					}
				})
			},
			loginUserSet(index){
				switch(index){
					case 0:
					//账号安全
						uni.navigateTo({
							url:'../user-set-password/user-set-password'
						})
						break;
					case 1:
					//邮箱绑定
						uni.navigateTo({
							url:'../user-set-email/user-set-email'
						})
						break;
					case 2:
					//编辑资料
						uni.navigateTo({
							url:'../user-set-inof/user-set-inof'
						})
						break;
					case 3:
					// 小纸条
						break;
					case 4:
					// 清除缓存
						this.clearCache()
						break;
					case 5:
					// 意见反馈
						uni.navigateTo({
							url:'../user-set-feedback/user-set-feedback'
						})
						break;
					case 6:
					// 关于仿糗事百科
						uni.navigateTo({
							url:'../user-set-about/user-set-about'
						})
						break;
				}
			},
			notLoginUserSet(index){
				switch(index){
					case 0:
					//清除缓存
						break;
					case 1:
					//意见反馈
						uni.navigateTo({
							url:'../user-set-feedback/user-set-feedback'
						})
						break;
					case 2:
					//关于仿糗事百科
						uni.navigateTo({
							url:'../user-set-about/user-set-about'
						})
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button-box{
		padding: 0 40upx;
		padding-top:40upx;
		button{
			background-color: #FFE933;
			border:none;
		}
	}
</style>
