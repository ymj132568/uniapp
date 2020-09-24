<template>
	<view class="f-jc-c f-d-c">
		<view class="f-jc-ai-c">登录仿糗事百科，体验更多功能</view>
		<view class="login-method f-jc-ai-c">
			<view class="f-jc-ai-c" @tap="login">
				<text class="icon iconfont icon-weixin-1"></text>
			</view>
			<view class="f-jc-ai-c" @tap="login">
				<text class="icon iconfont icon-qq"></text>
			</view>
			<view class="f-jc-ai-c" @tap="login">
				<text class="icon iconfont icon-weibo"></text>
			</view>
		</view>
		<view class="account-login f-ai-c">
			<view @tap="openRegistration">
				<text>注册</text>
				<text class="icon iconfont icon-xiangyou"></text>
			</view>
			<view @tap="openLogin">
				<text>账号密码登录</text>
				<text class="icon iconfont icon-xiangyou"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			openRegistration(){
				uni.navigateTo({
					url:'../../pages/user-registration/user-registration'
				})
			},
			openLogin(){
				uni.navigateTo({
					url:'../../pages/user-login/user-login'
				})
			},
			login(){
				uni.showToast({
					title: '待开发，请选择账号密码登录',
					icon:"none"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-method{
		>view{
			margin: 40upx 20upx;
			width: 100upx;
			height:100upx;
			border-radius: 50%;
			text{
				font-size: 50upx;
				color:#FFFFFF;
			}
			&:nth-of-type(1){
				background-color: #2BD19B;
			}
			&:nth-of-type(2){
				background-color: #2CAEFC;
			}
			&:nth-of-type(3){
				background-color: #FC7729;
			}
		}
	}
	.account-login{
		justify-content: space-around;
		>view{
			>text:first-child{
				color:#333333;
			}
			>text:last-child{
				color:#CCCCCC;
				font-size: 26upx;
			}
		}
	}
</style>
