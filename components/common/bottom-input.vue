<template>
	<view class="input-box f-ai-c">
		<input :focus="isFocus" @blur="blur" v-model="text" 
		:placeholder="placeholderText" />
		<button type="default" size="mini" plain="true" @tap="sendMesg" 
		v-if="text!='' || isComment">
			<text class="icon iconfont icon-fasong"></text>
		</button>
		<button type="default" size="mini" plain="true" @tap="sendImg"
		 v-else-if="text=='' && !isComment">
			<text class="icon iconfont icon-paizhao"></text>
		</button>
	</view>
</template>

<script>
	export default {
		props:{
			isComment:{
				type:[String,Boolean],
				default:false
			},
			isFocus:{
				type:[String,Boolean],
				default:false
			},
			placeholderText:{
				type:String,
				default:"内容~"
			}
		},
		data() {
			return {
				text: ""
			}
		},
		methods: {
			blur(){
				this.$emit('inputBlur');
			},
			sendMesg() {
				if (this.text == "") {
					this.isFocus = false;
					setTimeout(() => {
						this.isFocus = true;
					}, 100);
				} else {
					this.$emit('sendMessage', this.text);
					this.text = "";
				}
			},
			sendImg(){
				uni.chooseImage({
					success:(res)=>{
						this.$emit('sendImage', res.tempFilePaths);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input-box {
		background-color: #FFFFFF;
		border-top: 1px solid #EEEEEE;
		padding: 20upx 0;
		padding-left: 20upx;

		input {
			flex: 1;
			border-radius: 10upx;
			font-size: 32upx;
			padding: 20upx;
			background-color: #EEEEEE;
		}

		button {
			border: none;
			height: 90upx;
			line-height: 90upx;

			text {
				font-size: 72upx;
			}
		}
	}
</style>
