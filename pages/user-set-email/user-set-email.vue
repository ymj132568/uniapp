<template>
	<view class="p-all_20">
		<view class="input-box">
			<view>
				<input maxlength="50" class="pass-input" type="text" 
				v-model="email" placeholder="请输入邮箱" />
			</view>
			<view class="f-ai-c">
				<input maxlength="16" class="pass-input" :type="inputType" 
				v-model="password" placeholder="请输入密码" />
				<text class="icon iconfont icon-yanjing" @tap="typeSwitch"
				:style="{color:inputType=='text'?'#0000FF':'#000'}"></text>
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
				email: "",
				password: "",
				inputType:"password"
			}
		},
		mounted() {
			console.log(this.getUserData.email)
		},
		computed:{
			...mapGetters(['getUserData'])
		},
		methods: {
			typeSwitch(){
				if(this.inputType=="password"){
					this.inputType="text"
				}else{
					this.inputType="password"
				}
			},
			ok() {
				const re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
				if(this.email==''){
					uni.showToast({
						title:"邮箱不能为空！",
						icon:"none"
					});
					return;
				}else if(this.password==''){
					uni.showToast({
						title:"请输入密码",
						icon:"none"
					});
					return;
				}
				if (!re.test(this.email)) {
					uni.showToast({
						title:"邮箱格式不正确！",
						icon:"none"
					});
					return;
				}
				if(this.password!=this.getUserData.password){
					uni.showToast({
						title:"密码错误！",
						icon:"none"
					})
					return
				}
				
				this.bindMail();
			},
			bindMail(){
				this.getUserData.email=this.email;
				uni.setStorage({
					key:"loginUserData",
					data:JSON.stringify([this.getUserData]),
					success: () => {
						uni.showToast({
							title:"绑定成功！",
							icon:"none"
						});
						//返回上层路由
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},500)
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
			border-bottom:1px solid #EEEEEE;
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
		button{
			background-color: #FFE933;
			border:none;
		}
	}
</style>
