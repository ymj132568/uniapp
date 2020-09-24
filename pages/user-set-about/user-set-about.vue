<template>
	<view>
		<view class="img">
			<image src="../../static/demo/common/about.png" mode="widthFix" :lazy-load="true"></image>
		</view>
		<view class="f-jc-ai-c edition">版本号：1.0.0</view>
		<view>
			<set-list :list="menuList" @changTap="tapList"></set-list>
		</view>
	</view>
</template>

<script>
	import setList from '../../components/common/set-list.vue';
	export default {
		components: {
			setList
		},
		data() {
			return {
				menuList: [{
						name: "检测更新"
					},
					{
						name: "用户协议"
					}
				]
			}
		},
		methods: {
			tapList(index) {
				switch (index) {
					case 0:
						// 检测更新
						uni.showLoading({
							title: "请稍等...",
							success: () => {
								setTimeout(() => {
									uni.hideLoading();
									uni.showToast({
										title: "已是最新版本！",
										icon: "none"
									})
								}, 1000)
							}
						});
						break;
					case 1:
						// 用户协议
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.img {
		padding: 0 80upx;
		padding-top: 80upx;

		image {
			width: 100%;
		}
	}

	.edition {
		color: #BBBBBB;
		margin: 40upx 0;
	}
</style>
