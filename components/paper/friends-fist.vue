<template>
	<view class="f-ai-c body" :class="{'border-top':index!=0}">
		<view class="img f-ai-c">
			<image :src="item.userPic" mode="widthFix" lazy-load="true"></image>
		</view>
		<view class="message">
			<view>
				<text>{{ item.userName }}</text>
			</view>
			<view>
				<sex class="sex" :sex="item.sex" :age="item.age"></sex>
			</view>
		</view>
		<view class="select f-jc-c" @tap="isSelect">
			<text :style="{color:select==true ? '#0000FF' : '#BBBBBB'}" class="icon iconfont icon-gouxuanxuanzhong_huaban1"></text>
		</view>
	</view>
</template>

<script>
	import sex from '../common/sex.vue';
	export default {
		components: {
			sex
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
		data() {
			return {
				select: false,
			}
		},
		methods: {
			isSelect() {
				this.select = !this.select;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		padding: 20upx 0;
		.img {
			image {
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right: 20upx;
			}
		}

		.message {
			flex: 1;

			text {
				font-size: 36upx;
			}

			.sex {
				width: 60upx;
			}
		}

		.select {
			width: 60upx;

			text {
				font-size: 44upx;
			}
		}
	}
</style>
