<template>
	<view>
		<view class="bg">
			<image src="../../static/demo/common/loginBg.png" mode="widthFix" lazy-load="true"></image>
		</view>
		
		<!-- 登录输入框 -->
		<view>
			<login-method></login-method>
		</view>
	</view>
</template>

<script>
	import loginMethod from '../../components/user-login/login-method.vue';
	export default {
		components:{
			loginMethod
		}
	}
</script>

<style lang="scss">
	.bg{
		image{
			width: 100%;
		}
	}
</style>
