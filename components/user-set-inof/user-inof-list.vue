<template>
	<view>
		<view class="f-jc-sb f-ai-c set-inof-box" @tap="setInof(index)">
			<text>{{ item.name }}</text>
			<view class="flex1 f-ai-c f-jc-end">
				<view class="f-ai-c">
					<template v-if="item.type=='image'">
						<image :src="value" mode="aspectFill">
						</image>
					</template>
					<template v-else-if="item.type=='input'">
						<input type="text" :focus="isFocus" v-model="value"/>
					</template>
					<template v-else>
						<text v-model="value">{{ value }}</text>
					</template>
				</view>
				<text class="icon iconfont icon-bianji"></text>
			</view>
		</view>
		<view v-if="index==3">
			<birthTime :class="{active: show}" @confirm="confirm" @cancel="show=false"></birthTime>
		</view>
	</view>
</template>

<script>
	import birthTime from '../../components/birth-date-plug/birth-time.vue';
	export default {
		components: {
			birthTime
		},
		data() {
			return {
				show: false,
				value: "",
				isTap: false,
				isFocus: false,
				sex: ['男', '女', '保密'],
				emotion: ['已婚', '未婚', '恋爱中', '单身', '保密'],
				job: ['自由职业', '教师', '金融', '电子科技', 'IT', '无业','保密']
			}
		},
		mounted() {
			this.value = this.item.value
		},
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			confirm(data) {
				this.value=data;
				this.show = false;
			},
			setInof(index) {
				//设置点击后才可以传输数据
				this.isTap = true;
				switch (index) {
					case 0:
						// 修改头像
						uni.chooseImage({
							count: 1,
							sizeType: ['original'],
							success: (res) => {
								this.value = res.tempFilePaths[0];
								setTimeout(() => {
									uni.showToast({
										title: "上传成功！",
										icon: "none"
									})
								}, 1000)
							}
						});
						break;
					case 1:
						// 修改昵称
						this.isFocus = false;
						setTimeout(() => {
							this.isFocus = true;
						}, 100)
						break;
					case 2:
						// 性别
						uni.showActionSheet({
							itemList: this.sex,
							success: (res) => {
								this.value = this.sex[res.tapIndex];
							}
						})
						break;
					case 3:
						// 生日
						this.show = true
						break;
					case 4:
						// 情感状态
						uni.showActionSheet({
							itemList: this.emotion,
							success: (res) => {
								this.value = this.emotion[res.tapIndex];
							}
						})
						break;
					case 5:
						// 职业
						uni.showActionSheet({
							itemList: this.job,
							success: (res) => {
								this.value = this.job[res.tapIndex];
							}
						})
						break;
					case 6:
					// 修改家乡地址
						this.isFocus = false;
						setTimeout(() => {
							this.isFocus = true;
						}, 100)
						break;
				}
			}
		},
		watch: {
			value: function() {
				if (this.isTap) {
					this.$emit('changSetInof', {
						index: this.index,
						value: this.value
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.set-inof-box {
		margin: 0 20upx;
		padding: 10upx 0;
		border-bottom: 1px solid #EEEEEE;

		text {
			font-size: 36upx;
		}

		>text {
			color: #999999;
		}

		>view {
			>view {
				margin-right: 20upx;

				image {
					max-width: 80upx;
					max-height: 80upx;
					border-radius: 50%;
				}

				input {
					text-align: right;
					font-size: 36upx;
				}
			}
		}
	}
</style>
