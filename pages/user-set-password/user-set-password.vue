<template>
	<view class="p-all_20">
		<view class="input-box">
			<view class="f-ai-c">
				<input class="pass-input" :type="passwordType1" maxlength="16" 
				v-model="password0" placeholder="原密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch1"
				:style="{color:passwordType1=='text'?'#0000FF':'#000'}"></text>
			</view>
			<view  class="f-ai-c">
				<input class="pass-input" :type="passwordType2" maxlength="16" 
				v-model="password1" placeholder="请输入新密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch2"
				:style="{color:passwordType2=='text'?'#0000FF':'#000'}"></text>
			</view>
			<view  class="f-ai-c">
				<input class="pass-input" :type="passwordType3" maxlength="16" 
				v-model="password2" placeholder="确认新密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch3"
				:style="{color:passwordType3=='text'?'#0000FF':'#000'}"></text>
			</view>
		</view>
		<view class="button">
			<button type="default" @tap="ok">完成</button>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		data() {
			return {
				password0: "",
				password1: "",
				password2: "",
				passwordType1:"password",
				passwordType2:"password",
				passwordType3:"password"
			}
		},
		mounted() {
			console.log(this.getUserData.password)
		},
		computed: {
			...mapGetters(['getUserData'])
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
			typeSwitch3(){
				if(this.passwordType3=="password"){
					this.passwordType3="text"
				}else{
					this.passwordType3="password"
				}
			},
			ok() {
				if (this.email == '') {
					uni.showToast({
						title: "请输入原密码！",
						icon: "none"
					});
					return;
				} else if (this.password1 == '') {
					uni.showToast({
						title: "请输入新密码！",
						icon: "none"
					});
					return;
				} else if (this.password2 == '') {
					uni.showToast({
						title: "请再次确认新密码！",
						icon: "none"
					});
					return;
				}
				if (this.password1 != this.password2) {
					uni.showToast({
						title: "两次密码不一致！",
						icon: "none"
					});
					return;
				}
				if(this.password0 != this.getUserData.password){
					uni.showToast({
						title: "原密码错误！",
						icon: "none"
					});
					return;
				}
				
				this.changePassword();
			},
			changePassword(){
				this.getUserData.password=this.password1;
				uni.setStorage({
					key:"loginUserData",
					data:JSON.stringify([this.getUserData]),
					success: () => {
						uni.showToast({
							title: "修改成功",
							icon: "none"
						});
						// 返回上层路由
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							})
						}, 500)
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-box {
		>view{
			padding: 20upx 0 6upx;
			border-bottom: 1px solid #EEEEEE;
			.pass-input {
				flex: 1;
				border: none;
				font-size: 38upx;
				background: none;
				outline: none;//去掉获取焦点的外边框
			}
		}
	}

	.button {
		margin: 40upx 80upx;

		button {
			background-color: #FFE933;
			border: none;
		}
	}
</style>
