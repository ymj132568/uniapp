<template>
	<view>
		<block v-for="(item,index) in setUserInofList" :key="index">
			<user-inof-list @changSetInof="setInof" :item="item" :index="index">
			</user-inof-list>
		</block>
		<view class="m-all_20 f-jc-ai-c ok">编辑好后退出自动保存</view>
	</view>
</template>

<script>
	import userInofList from '../../components/user-set-inof/user-inof-list.vue';
	export default {
		components: {
			userInofList
		},
		data() {
			return {
				setUserInofList: [{
						name: "头像",
						type: "image",
						value: "../../static/demo/userpic/12.jpg"
					},
					{
						name: "昵称",
						type: "input",
						value: "热爱生活"
					},
					{
						name: "性别",
						type: "text",
						value: "男"
					},
					{
						name: "生日",
						type: "text",
						value: "2000-11-21"
					},
					{
						name: "情感状态",
						type: "text",
						value: "未婚"
					},
					{
						name: "职业",
						type: "text",
						value: "IT"
					},
					{
						name: "家乡",
						type: "input",
						value: "广西 贵港"
					}
				]
			};
		},
		onLoad() {
			this.initUserInofList()
		},
		methods: {
			ok() {
				uni.navigateBack({
					delta: 1
				})
			},
			setInof(data) {
				this.$store.commit('reviseUserInof',data)
			},
			initUserInofList() {
				this.setUserInofList.forEach((v, i) => {
					this.setUserInofList[i].value = this.$store.getters.getUserData.userData[i].value;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ok{
		color:#CCCCCC;
	}
</style>
