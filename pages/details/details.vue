<template>
	<view>
		<view v-if="flag">
			<!-- 内容详情 -->
			<details-list :item="item"></details-list>

			<view class="comment-title p-all_20 f-ai-c f-jc-sb">
				<view>
					<i>最新评论</i>
					<text>（{{ commentList.length }}）</text>
				</view>
				<view>
					<text class="icon iconfont" 
					:class="[commentSort==true?'icon-shijian-copy':'icon-redu-copy']"
					@tap="commentSort=!commentSort">
					</text>
				</view>
			</view>
			
			<!-- 评论内容 -->
			<view>
				<block v-for="(item,index) in commentList" :key="index">
					<comment-list @inputOff="openInput" @openReply="openReplyList" 
					:item="item" :index="index"></comment-list>
				</block>
			</view>
			
			<!-- 展开回复 -->
			<reply-list @offreply="off" :item="replyData"
			:height="windowHeight" :showClass="replyShowClass" v-if="replyShow">
			</reply-list>
			
			
			
			<!-- 占位盒子 -->
			<view class="placeholder-box"></view>
			<!-- 输入框 -->
			<view class="comment-input">
				<bottom-input :isFocus="inputFocus" @sendMessage="sendComment" 
				isComment="true" :placeholderText="inputPlaceholder"
				@inputBlur="bottomInputBlur">
				</bottom-input>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<uni-popup-share @select="selects"></uni-popup-share>
		</uni-popup>
	</view>
</template>

<script>
	import getTime from '../../common/gettime.js';
	import detailsList from '../../components/details/details-list.vue';
	import commentList from '../../components/details/comment-list.vue';
	import bottomInput from '../../components/common/bottom-input.vue';
	import replyList from '../../components/details/reply-list.vue';
	import uniPopupShare from '../../components/uni-popup/uni-popup-share.vue';
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	// console.log(replyList)
	export default {
		components: {
			detailsList,
			commentList,
			bottomInput,
			replyList,
			uniPopupShare,
			uniPopup
		},
		data() {
			return {
				inputPlaceholder:"请友善发言！",
				inputFocus:false,
				inputStatus:0,//0是评论状态，1是回复状态
				replyIndex:0,
				replyData:{},
				windowHeight:300,
				replyShow:false,
				replyShowClass:false,
				commentSort:false,
				flag: false,
				commentList:[
					{
						userpic:"../../static/demo/userpic/6.jpg",
						userName:"用户名1",
						likeNum:631,
						data:"评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
						timestamp:1600603913,
						time:"",
						replyData:[
							{
								userpic:"../../static/demo/userpic/7.jpg",
								userName:"用户名1",
								likeNum:51,
								data:"6666666",
								timestamp:1600604153,
								time:"2小时前",
							},
							{
								userpic:"../../static/demo/userpic/8.jpg",
								userName:"用户名2",
								likeNum:2,
								data:"6666666",
								timestamp:1600604153,
								time:"2小时前",
							},
							{
								userpic:"../../static/demo/userpic/9.jpg",
								userName:"用户名3",
								likeNum:1,
								data:"6666666",
								timestamp:1600604153,
								time:"2小时前",
							}
						]
					},
					{
						userpic:"../../static/demo/userpic/6.jpg",
						userName:"用户名2",
						likeNum:631,
						data:"6666666",
						timestamp:1600604153,
						time:"",
						replyData:[]
					},
					{
						userpic:"../../static/demo/userpic/6.jpg",
						userName:"用户名3",
						likeNum:631,
						data:"支持uni-app",
						timestamp:1600604033,
						time:"",
						replyData:[]
					}
				],
				item: {}
			}
		},
		methods: {
			share() {
				this.$refs.popup.open();
			},
			selects(obj) {},
			openInput(index){
				this.inputStatus=1;
				this.replyIndex=index;
				this.inputFocus=false;
				this.inputPlaceholder="回复 "+this.commentList[index].userName;
				setTimeout(()=>{
					this.inputFocus=true;
				},100);
			},
			bottomInputBlur(){
				this.inputFocus=false;
				this.inputPlaceholder="请友善发言！";
			},
			off(bool){
				this.replyShowClass=bool;
				// #ifndef APP-PLUS || H5
				this.replyShow=bool;
				// #endif
				
				// #ifdef APP-PLUS || H5
				setTimeout(()=>{
					this.replyShow=bool;
				},700)
				// #endif
			},
			openReplyList(index){
				uni.getSystemInfo({
					success:(res)=>{
						this.windowHeight=res.windowHeight*8/10;
					}
				});
				this.replyData=this.commentList[index];
				this.replyShow=true;
				this.replyShowClass=true;
			},
			sendComment(text){
				if(text.trim()==''){
					uni.showToast({
						title:"评论无实质内容！",
						icon:"none"
					})
					return;
				}
				if(this.inputStatus==0){
					//正常评论
					const obj={
						userpic:"../../static/demo/userpic/5.jpg",
						userName:"游客",
						likeNum:0,
						data:text,
						timestamp:getTime.getTime.getTimestamp(new Date().getTime()),
						time:getTime.getTime.getTimeFormat(new Date().getTime()),
						replyNum:0,
						replyData:[]
					};
					this.commentList.unshift(obj);
				}else{
					//处于一级回复状态则把评论状态改成正常评论
					this.inputStatus=0;
					//回复评论
					const obj={
						userpic:"../../static/demo/userpic/10.jpg",
						userName:"游客",
						likeNum:0,
						data:text,
						timestamp:getTime.getTime.getTimestamp(new Date().getTime()),
						time:getTime.getTime.getTimeFormat(new Date().getTime()),
					};
					this.commentList[this.replyIndex].replyData.unshift(obj);
					this.replyData=this.commentList[this.replyIndex];
				}
			}
		},
		onLoad() {
			this.commentList.forEach((v,i)=>{
				this.commentList[i].time=getTime.getTime.getTimeFormat(this.commentList[i].timestamp);
			});
			
			uni.getStorage({
				key: "detailsData",
				success: (res) => {
					this.item = JSON.parse(res.data);
					uni.setNavigationBarTitle({
						title: this.item.title
					})
					//数据获取成功后渲染页面
					this.flag = true;
				},
				fail: (res) => {
					uni.showToast({
						title: "数据获取失败！",
						icon: "none",
						duration: 3000
					})
				}
			});
		},
		onBackPress(e){
			if(this.replyShow){
				this.replyShow=!this.replyShow;
				return true;
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index==0){
				this.share()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-title {
		border-top: 1px solid #EEEEEE;

		i {
			font-size: 38upx;
			font-weight: 700;
		}
	}
	.placeholder-box{
		height: 140upx;
	}
	.comment-input{
		position: fixed;
		bottom:0;
		left:0;
		right:0;
	}
</style>
