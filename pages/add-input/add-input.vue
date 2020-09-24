<template>
	<view>
		<!-- 自定义导航栏 -->
		<view>
			<uni-nav-bar statusBar="true" left-icon="arrowleft" right-text="发布" left-text="返回" @clickLeft="back" @clickRight="publish">
				<view slot="title" @tap="privacy" class="nav-title">
					<text>{{ message }}</text>
					<text class="icon iconfont icon-xiangxia"></text>
				</view>
			</uni-nav-bar>
		</view>
		<!-- 输入框 -->
		<view class="uni-textarea">
			<textarea maxlength="-1" v-model="text" placeholder="说点什么吧~" />
			</view>
		<!-- 图片上传 -->
		<view>
			<upload-images @uploadImg="uploadImg"></upload-images>
		</view>
		
		<!-- 发布提示，maskLayerOff：闭遮罩层点击功能 -->
		<uni-popup ref="popup" :maskLayerOff="false" @change="change">
			<view class="prompt-box">
				<view class="f-jc-ai-c">
					<image src="../../static/demo/common/postAReminder.png" mode="widthFix"></image>
				</view>
				<view class="f-jc-c">
					<text>严禁发表以下信息</text>
				</view>
				<view>
					<view>1、涉及黄色、政治、广告及骚扰信息</view>
					<view>2、涉及人身攻击</view>
					<view>3、联系方式、透露他人隐私</view>
					<view>4、未经允许盗用他人原创内容</view>
					<view class="f-jc-c">
						<text>一经核实立即封禁，情节严重则永久封号</text>
					</view>
				</view>
				<button @tap="maskOff" type="default">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniNavTab from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import uploadImages from '../../components/common/upload-images.vue';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	
	export default {
		components:{
			uniNavTab,
			uploadImages,
			uniPopup
		},
		data() {
			return {
				message:"所有人可见",
				arr:["所有人可见","粉丝团可见","仅自己可见"],
				text:"",
				imgList:[],
				isget:false
			}
		},
		mounted(){
			this.$refs.popup.open();
		},
		methods: {
			maskOff(){
				this.$refs.popup.close();
			},
			change(e){
				
			},
			back(){
				uni.navigateBack({
					delta:1
				});
			},
			privacy(){
				let that=this;
				uni.showActionSheet({
					itemList: that.arr,
					success: (res)=> {
						that.message=that.arr[res.tapIndex];
					}
				});
			},
			publish(){
				console.log(1);
			},
			uploadImg(arr){
				this.imgList=arr;
			},
			saveDraft(){
				uni.showModal({
					title:"是否保存至草稿箱",
					confirmText:"保存",
					cancelText:"不保存",
					success:(res)=>{
						if(res.confirm){
							// return false;
						}
						this.isget=true;
						uni.navigateBack({
							delta:1
						})
					}
				});
			}
		},
		onBackPress(e){
			if(!this.isget){
				if(this.text.trim()!="" || this.imgList.length>=1){
					this.saveDraft();
					return true;
				}
			}
			this.isget=false;
		}
	}
</script>

<style lang="scss" scoped>
	.nav-title{
		margin: 0 auto;
		>text:first-child{
			margin-right: 10upx;
		}
	}
	.uni-textarea{
		>textarea{
			padding:10upx 20upx;
		}
	}
	.prompt-box{
		padding:30upx;
		border-radius: 30upx;
		background-color: #FFFFFF;
		image{
			width: 80%;
			height:80%;
		}
		>view{
			&:nth-of-type(2){
				color:#FFDF34;
				font-weight: 700;
				font-size: 38upx;
				margin-bottom: 30upx;
			}
			
			&:nth-of-type(3){
				view:last-child{
					color:#FFDF34;
					font-weight: 700;
					margin:30upx 0;
				}
			}
		}
		>button{
			font-weight: 700;
			background-color: #FFDF34;
			border:none;
		}
	}
</style>
