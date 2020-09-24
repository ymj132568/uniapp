<template>
	<view>
		<template v-if="loginMethod">
			<view class="account-login">
				<view>
					<input  class="pass-input" maxlength="50" v-model="account" 
					type="text" placeholder="账号/手机号/邮箱" />
				</view>
				<view class="f-ai-c">
					<input class="pass-input" maxlength="16" v-model="password" 
					:type="inputType" placeholder="密码" />
					<text class="icon iconfont icon-yanjing" @tap="typeSwitch"
					:style="{color:inputType=='text'?'#0000FF':'#000'}"></text>
					<button type="default" size="mini" @tap="switchState" plain="true">忘记密码</button>
				</view>
			</view>
		</template>
		<template v-else>
			<view class="verification-code-login">
				<view class="">
					<input maxlength="11" v-model="phone" type="text" placeholder="11位手机号" />
				</view>
				<view class="f-jc-sb">
					<input maxlength="4" v-model="code" type="text" placeholder="验证码" />
					<button type="default" size="mini" @tap="getCode">
						{{ countdown }}</button>
				</view>
			</view>
		</template>

		<view class="ok-button">
			<button type="default" @tap="verifyLogin">登录</button>
		</view>
		<view class="f-jc-ai-c f-s-26u login-method">
			<text @tap="switchState">{{ loginMethod? '验证码登录':'账号密码登录'}}</text>
			<text @tap="switchState" class="f-s-26u icon iconfont icon-xiangyou">
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputType:"password",
				loginMethod: true, //true是账号密码登录，false是验证码登录
				account: "",
				password: "",
				phone: "",
				code: "",
				countdown: "获取验证码",
				isGetCode: false,
				isflag: false
			}
		},
		methods: {
			typeSwitch(){
				if(this.inputType=="password"){
					this.inputType="text"
				}else{
					this.inputType="password"
				}
			},
			verifyLogin() {
				if (this.loginMethod) {
					//账号登录
					if (!this.verifyAccount()) {
						return;
					}
					uni.getStorage({
						key: "loginUserData",
						success: (res) => {
							this.changeData(JSON.parse(res.data));
						},
						fail: () => {
							uni.showToast({
								title: "账号未注册!",
								icon: "none"
							})
						}
					})
				} else {
					//验证码登录
					// 再次检测手机号
					if (!this.verifyPhone()) {
						return;
					}
					if (!this.verifyCode()) {
						return;
					}
					uni.showToast({
						title: "请使用账号密码登录！",
						icon: "none"
					})
				}
			},
			changeData(data) {
				if (!(this.account == data[0].phone || this.account == data[0].email) 
				|| this.password != data[0].password) {
					uni.showToast({
						title: "账号或密码错误！",
						icon: "none"
					})
					return false
				}
				// 验证成功更改登录状态
				this.$store.commit('reviseLoginStatus', true);
				uni.showToast({
					title: "登录成功！正在为您跳转...",
					icon: "none",
					duration: 1000
				})
				setTimeout(() => {
					uni.switchTab({
						url: '../../pages/home/home'
					})
				}, 1000)
			},
			switchState() {
				this.loginMethod = !this.loginMethod;
				//切换登录方式 初始化，清空输入框
				this.account = "";
				this.password = "";
				this.phone = "";
				this.code = "";
				this.isflag = false;
			},
			// 获取验证码
			getCode() {
				if (this.isGetCode) {
					return;
				}
				if (!this.verifyPhone()) {
					return;
				}
				this.countdown = 60;
				this.isGetCode = true;
				this.isflag = true;
				const timer = setInterval(() => {
					this.countdown--;
					if (this.countdown < 1) {
						this.isGetCode = false;
						this.countdown = "获取验证码";
						clearInterval(timer);
					}
				}, 1000);
			},
			// 检验手机号
			verifyPhone() {
				if (this.phone == '') {
					uni.showToast({
						title: "您还没有输入手机号！",
						icon: "none"
					});
					return false;
				}
				if (!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.phone))) {
					uni.showToast({
						title: "请输入正确的手机号！",
						icon: "none"
					});
					return false;
				}
				return true;
			},
			//检验 验证码
			verifyCode() {
				if (!this.isflag) {
					uni.showToast({
						title: "请先获取验证码！",
						icon: "none"
					});
					return false;
				}
				if (this.code == '') {
					uni.showToast({
						title: "请输入验证码！",
						icon: "none"
					});
					return false;
				}
				//验证是否为纯数字，是否满足验证码相应的位数，减轻服务器负担
				if (!(/^[0-9]*$/.test(this.code)) || this.code.length != 4) {
					uni.showToast({
						title: "验证码错误！",
						icon: "none"
					});
					return false;
				}
				// 下面的就是验证服务器发送的验证码了
				return true;
			},
			// 检验账号和密码登录
			verifyAccount() {
				if (this.account == '') {
					uni.showToast({
						title: "请输入账号！",
						icon: "none"
					});
					return false;
				}
				if (this.password == '') {
					uni.showToast({
						title: "请输入密码！",
						icon: "none"
					});
					return false;
				}
				if (this.password.length < 8) {
					uni.showToast({
						title: "密码最少是8位！",
						icon: "none"
					});
					return false;
				}
				// 验证是否包含中文
				if (/.*[\u4e00-\u9fa5]+.*$/.test(this.account)) {
					uni.showToast({
						title: "该账号不存在！",
						icon: "none"
					});
					return false;
				}
				if (/.*[\u4e00-\u9fa5]+.*$/.test(this.password)) {
					uni.showToast({
						title: "密码错误！",
						icon: "none"
					});
					return false;
				}
				return true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.account-login {
		>view {
			border-bottom: 1px solid #EEEEEE;
			padding: 20upx 20upx 6upx 40upx;

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

	.verification-code-login {
		>view {
			border-bottom: 1px solid #EEEEEE;
			padding: 20upx 20upx 6upx 40upx;

			input {
				flex: 1;
				font-size: 38upx;
			}

			button {
				color: #666666;
				border: none;
			}
		}
	}

	.ok-button {
		padding: 40upx;

		button {
			border: none;
			background-color: #FFE933;
		}
	}

	.login-method {
		>text:first-child {
			color: #666666;
		}

		>text:last-child {
			color: #BBBBBB;
			margin-left: 6upx;
		}
	}
</style>
