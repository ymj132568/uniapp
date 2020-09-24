<template>
	<view>
		<form>
			<view class="uni-list list-pd">
				<view class="uni-list-cell cell-pd">
					<view class="uni-uploader">
						<view class="uni-uploader-head">
							<view class="uni-uploader-title">点击可预览选好的图片</view>
							<view class="uni-uploader-info">{{imageList.length}}/9</view>
						</view>
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(image,index) in imageList" :key="index">
									<view class="uni-uploader__file">
										<view @tap="removeImg(index)" class="remove-img icon iconfont icon-shanchu"></view>
										<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
									</view>
								</block>
								<view class="uni-uploader__input-box">
									<view class="uni-uploader__input" @tap="chooseImage"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
	import permision from "@/common/permission.js";
	let sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	let sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default{
		data() {
			return {
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		methods:{
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif
			
				if (this.imageList.length === 9) {
					uni.showToast({
					    title: '最多只能选择9张图片！',
						icon:"none",
					    duration: 2000
					});
					return;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						//图片添加成功后发送给父组件
						this.$emit('uploadImg',this.imageList);
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				})
			},
			removeImg(index){
				let that=this;
				uni.showModal({
				    title: '提示',
				    content: '确定删除该图片吗？',
				    success: function (res) {
				        if (res.confirm) {
							that.imageList.splice(index,1);
							// 改动图片后发送给父组件
							that.$emit('uploadImg',that.imageList);
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell-pd {
		padding: 20upx 20upx;
	}
	
	.list-pd {
		margin-top: 50rpx;
	}
	.uni-uploader__file{
		position: relative;
		.remove-img{
			z-index: 99;
			font-size: 36upx;
			padding:0 10upx;
			color:#FFFFFF;
			border-radius: 20upx;
			background-color: rgba(0,0,0,.4);
			position: absolute;
			top:0;
			right:0;
		}
	}
</style>
