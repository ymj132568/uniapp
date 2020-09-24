<template>
	<view class="body">
		<view>
			<block v-for="(item,index) in list" :key="index">
				<paper-list :item="item" :index="index"></paper-list>
			</block>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue';
	import paperList from '../../components/paper/paper-list.vue';

	const arr = [{
			userPic: "../../static/demo/userpic/1.jpg",
			userName: "昵称1",
			messageTime: "13:00",
			messageText: "消息前面部分的内容",
			unreadNum: 1
		},
		{
			userPic: "../../static/demo/userpic/2.jpg",
			userName: "昵称2",
			messageTime: "13:00",
			messageText: "消息前面部分的内容",
			unreadNum: 2
		},
		{
			userPic: "../../static/demo/userpic/3.jpg",
			userName: "昵称3",
			messageTime: "13:00",
			messageText: "消息前面部分的内容",
			unreadNum: 1
		},
		{
			userPic: "../../static/demo/userpic/4.jpg",
			userName: "昵称4",
			messageTime: "13:00",
			messageText: "消息前面部分的内容",
			unreadNum: 1
		}
	];

	export default {
		components: {
			uniBadge,
			paperList
		},
		data() {
			return {
				list: [{
						userPic: "../../static/demo/userpic/10.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 3
					},
					{
						userPic: "../../static/demo/userpic/11.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 10
					},
					{
						userPic: "../../static/demo/userpic/12.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 0
					},
					{
						userPic: "../../static/demo/userpic/13.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 0
					},
					{
						userPic: "../../static/demo/userpic/14.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/15.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/16.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/17.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/18.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},

					{
						userPic: "../../static/demo/userpic/16.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/17.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					},
					{
						userPic: "../../static/demo/userpic/18.jpg",
						userName: "昵称",
						messageTime: "13:00",
						messageText: "消息前面部分的内容",
						unreadNum: 1
					}
				]
			}
		},
		methods: {

		},
		//监听下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				arr.forEach((v) => {
					this.list.unshift(v);
				});
				uni.showToast({
					title: "刷新成功"
				});
			}, 2000);
		},
		//监听菜单栏按钮
		// #ifdef H5 || APP-PLUS
		onNavigationBarButtonTap(e) {
			switch (e.index) {
				case 0:
					// 好友列表
					uni.navigateTo({
						url: '../user-list/user-list'
					});
					break;
				case 1:
					// 添加好友
					break;
				case 2:
					// 清除消息
					break;
			}
		}
		// #endif
	}
</script>

<style lang="scss" scoped>
	.body {
		padding: 0 20upx;
	}
</style>
