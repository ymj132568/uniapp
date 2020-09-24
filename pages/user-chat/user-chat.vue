<template>
	<view class="body">
		<!-- 导航栏 -->
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="head-nav-box">
			<uni-nav-bar statusBar="true" border="" title="好友名称">
				<view slot="left" @tap="back">
					<text class="icon iconfont icon-fanhui2"></text>
				</view>
				<view slot="right" @tap="userInof">
					<text class="icon iconfont icon-wode"></text>
				</view>
			</uni-nav-bar>
		</view>
		<!-- #endif -->

		<!-- 聊天界面 -->
		<view>
			<scroll-view class="scroll-box" scroll-y="true" :style="{height:style.scrollHeight+'px'}" :scroll-top="style.scrollTop"
			 :scroll-with-animation="style.scrollAnimation" id="scrollview" @scroll="hideKey">
				<view>
					<block v-for="(item,index) in messageList" :key="index">
						<chat-message class="chat-message" :item="item" :index="index">
						</chat-message>
					</block>
				</view>
			</scroll-view>
		</view>

		<!-- 输入框 -->
		<view class="input">
			<bottom-input @sendMessage="sendMesg" @sendImage="sendImg">
			</bottom-input>
		</view>
	</view>
</template>

<script>
	// #ifdef APP-PLUS || H5
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	// #endif
	import bottomInput from '../../components/common/bottom-input.vue';
	import chatMessage from '../../components/paper/chat-message.vue';
	import getTime from '../../common/gettime.js';
	export default {
		components: {
			// #ifdef APP-PLUS || H5
			uniNavBar,
			// #endif
			bottomInput,
			chatMessage
		},
		data() {
			return {
				isFocus: false,
				style: {
					scrollTop: 0,
					scrollHeight: 400,
					scrollAnimation: true
				},
				messageList: [{
						userpic: "../../static/demo/userpic/11.jpg",
						text: "吃晚饭了吗？",
						image: "../../static/demo/1.jpg",
						isMe: false,
						timestamp: 1600326600,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/14.jpg",
						text: "吃了",
						isMe: true,
						timestamp: 1600326780,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/11.jpg",
						text: "这个手机怎么样",
						isMe: false,
						timestamp: 1600326840,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/14.jpg",
						image: "../../static/demo/4.jpg",
						isMe: true,
						timestamp: 1600327200,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/14.jpg",
						text: "这个啊，看着还不错",
						isMe: true,
						timestamp: 1600327210,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/11.jpg",
						text: "我再看看，打算换手机",
						isMe: false,
						timestamp: 1600327570,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/14.jpg",
						text: "牛逼，有钱真好",
						isMe: true,
						timestamp: 1600392370,
						timeFormat: "",
						timeShow: false
					},
					{
						userpic: "../../static/demo/userpic/14.jpg",
						text: "666666666666666666666666666666666666666666666",
						image: "../../static/demo/1.jpg",
						isMe: true,
						timestamp: 1600392490,
						timeFormat: "",
						timeShow: false
					}
				]
			}
		},
		methods: {
			hideKey() {
				// 关闭软键盘
				uni.hideKeyboard()
			},
			//发送图片
			sendImg(imgArr) {
				let [time, format, show, obj] = [0, "", false, {}];
				imgArr.forEach((v, i) => {
					time = getTime.getTime.getTimestamp();
					format = getTime.getTime.getTimeFormat(time);
					show = getTime.getTime.
					getTimeDifference(time, this.messageList.length - 1 >= 0 ? this.messageList[this.messageList.length - 1].timestamp :
						0);
					obj = {
						userpic: "../../static/demo/userpic/14.jpg",
						image: v,
						isMe: true,
						timestamp: time,
						timeFormat: format,
						timeShow: show
					};
					this.messageList.push(obj);
				});
				this.getMessageHeight();
			},
			//发送信息
			sendMesg(text) {
				let time = getTime.getTime.getTimestamp();
				let format = getTime.getTime.getTimeFormat(time);
				let show = getTime.getTime.
				getTimeDifference(time, this.messageList.length - 1 >= 0 ? this.messageList[this.messageList.length - 1].timestamp :
					0);
				let obj = {
					userpic: "../../static/demo/userpic/14.jpg",
					text: text,
					isMe: true,
					timestamp: time,
					timeFormat: format,
					timeShow: show
				};
				this.messageList.push(obj);
				this.getMessageHeight();
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			userInof() {
				uni.navigateTo({
					url:'../user-space/user-space?isme='+false
				})
			},
			// 实时获取滚动条的高度
			getMessageHeight() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.chat-message').boundingClientRect();
				query.select('#scrollview').boundingClientRect();
				query.exec((res) => {
					let sum = 0;
					res[0].forEach((rect) => {
						sum += rect.height + 40;
					}); //获取所有内部子元素的高度
					setTimeout(() => {
						//判断子元素高度是否大于显示高度
						if (sum > this.style.scrollHeight) {
							this.style.scrollTop = sum - this.style.scrollHeight;
							//用子元素的高度减去显示的高度就获益获得序言滚动的高度
						}
					}, 100)
				});
			}
		},
		onReady() {
			this.getMessageHeight();
			let time = getTime.getTime.getTimestamp();

			// 初始化消息的时间点相对现在的时间的格式
			this.messageList.forEach((v, i) => {
				this.messageList[i].timeFormat = getTime.getTime.getTimeFormat(this.messageList[i].timestamp);

				this.messageList[i].timeShow = getTime.getTime
					.getTimeDifference(this.messageList[i].timestamp, i - 1 >= 0 ? this.messageList[i - 1].timestamp : 0);
			});
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					// #ifndef APP-PLUS || H5
					this.style.scrollHeight = res.windowHeight - uni.upx2px(130);
					// #endif

					// #ifdef APP-PLUS || H5
					const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
					this.style.scrollHeight = res.windowHeight -
						uni.upx2px(200) - statusBarHeight;
					// #endif
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.body {
		position: relative;
	}

	.head-nav-box {
		background-color: #FFFFFF;
	}

	.input {
		background-color: #FFFFFF;
		z-index: 199;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
