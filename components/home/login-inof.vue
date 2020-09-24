<template>
	<view class="f-ai-c user-info" @tap="openSpace">
		<view class="m-r_20">
			<image :src="getUserData.userData[0].value" 
			mode="aspectFill" lazy-load="true"></image>
		</view>
		<view class="flex1">
			<view>{{ getUserData.userData[1].value }}</view>
			<view>
				<text class="m-r_20">总访客 {{ getUserData.totalVisitors }}</text>
				<text>今日 {{ getUserData.todayVisitors }}</text>
			</view>
		</view>
		<view><text class="icon iconfont icon-xiangyou"></text></view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default{
		computed: {
			...mapGetters(['getLoginStatus', 'getUserData'])
		},
		methods:{
			openSpace(){
				// #ifdef APP-PLUS || H5
				uni.navigateTo({
					url:'../../pages/user-space/user-space?isme='+true
				})
				// #endif
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-info{
		>view:nth-of-type(1){
			image{
				width: 100upx;
				height:100upx;
				border-radius: 50%;
			}
		}
		>view:nth-of-type(2){
			>view:first-child{
				font-size: 32upx;
				font-weight: 700;
			}
			>view:last-child{
				text{
					font-size: 24upx;
					color:#BBBBBB;
				}
			}
		}
	}
</style>
