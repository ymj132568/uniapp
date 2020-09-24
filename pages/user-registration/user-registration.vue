<template>
	<view>
		<view class="bg">
			<image src="../../static/demo/common/loginBg.png" mode="widthFix" lazy-load="true"></image>
		</view>

		<!-- 输入框 -->
		<view class="input">
			<view>
				<input class="pass-input" type="text" maxlength="11" 
				v-model="phone" placeholder="11位手机号" />
			</view>
			<view class="f-ai-c">
				<input class="pass-input" :type="passwordType1" maxlength="16" 
				v-model="password1" placeholder="8-16位密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch1"
				:style="{color:passwordType1=='text'?'#0000FF':'#000'}"></text>
			</view>
			<view class="f-ai-c">
				<input class="pass-input" :type="passwordType2" maxlength="16" 
				v-model="password2" placeholder="再次确认密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch2"
				:style="{color:passwordType2=='text'?'#0000FF':'#000'}"></text>
			</view>
		</view>

		<view class="ok-button">
			<button type="default" @tap="verifyRegistration">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				password1: "",
				password2: "",
				passwordType1:"password",
				passwordType2:"password"
			};
		},
		methods: {
			typeSwitch1(){
				if(this.passwordType1=="password"){
					this.passwordType1="text"
				}else{
					this.passwordType1="password"
				}
			},
			typeSwitch2(){
				if(this.passwordType2=="password"){
					this.passwordType2="text"
				}else{
					this.passwordType2="password"
				}
			},
			verifyRegistration() {
				if (!this.isUndefined()) return
				if (!this.verifyPhone()) return
				if (!this.verifyPassword()) return
				if (this.password2 != this.password1) {
					uni.showToast({
						title: "两次密码不一致！",
						icon: "none"
					})
					return
				}
				
				// 走到了说明通过了正则表达式
				this.storageAccount();
			},
			isUndefined() {
				if (this.phone == '') {
					uni.showToast({
						title: "请输入手机号！",
						icon: "none"
					})
					return false
				}
				if (this.password1 == '') {
					uni.showToast({
						title: "请输入密码！",
						icon: "none"
					})
					return false
				}
				if (this.password2 == '') {
					uni.showToast({
						title: "请再次输入密码！",
						icon: "none"
					})
					return false
				}
				return true
			},
			verifyPhone() {
				if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
					uni.showToast({
						title: "请输入正确的手机号！",
						icon: "none"
					});
					return false;
				}
				return true;
			},
			verifyPassword() {
				if (this.password1.length < 8) {
					uni.showToast({
						title: "密码最少是8位！",
						icon: "none"
					})
					return false
				}
				// 验证是否包含中文
				if (/.*[\u4e00-\u9fa5]+.*$/.test(this.password1)) {
					uni.showToast({
						title: "密码不能包含中文！",
						icon: "none"
					})
					return false;
				}
				if (/.*[\u4e00-\u9fa5]+.*$/.test(this.password2)) {
					uni.showToast({
						title: "密码不能包含中文！",
						icon: "none"
					})
					return false;
				}
				return true
			},
			storageAccount(){
				let userObject=[{
					isLogin:false,
					phone:this.phone,
					password:this.password1,
					email:"",
					totalVisitors:0,
					todayVisitors:0,
					qiushiNum:0,
					newsNum:0,
					commentNum:0,
					collectNum:0,
					userData:[
						{
							name:"头像",
							value:"../../static/demo/userpic/12.jpg"
						},
						{
							name:"昵称",
							value:"用户编号001"
						},
						{
							name:"性别",
							value:"保密"
						},
						{
							name:"生日",
							value:"1999-01-01"
						},
						{
							name:"情感状态",
							value:"保密"
						},
						{
							name:"职业",
							value:"保密"
						},
						{
							name:"家乡",
							value:"未填写"
						}
					]
				}];
				
				uni.setStorage({
					key:"loginUserData",
					data:JSON.stringify(userObject),
					success: () => {
						uni.showToast({
							title:"注册成功！正在为您跳转...",
							icon:"none",
							duration:1000
						})
						setTimeout(()=>{
							uni.redirectTo({
								url:'../user-login/user-login'
							})
						},1000)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		image {
			width: 100%;
		}
	}

	.input {
		>view {
			border-bottom:1px solid #EEEEEE;
			padding: 20upx 20upx 6upx;

			.pass-input {
				flex: 1;
				border: none;
				font-size: 38upx;
				background: none;
				outline: none;//去掉获取焦点的外边框
			}

			button {
				border: none;
			}
		}
	}

	.ok-button {
		padding: 40upx 20upx;

		button {
			background-color: #FFE933;
			border: none;
		}
	}
</style>
