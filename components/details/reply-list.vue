<template>
	<view class="reply-box">
		<view>
			<!-- @touchmove.stop.prevent 阻止父组件滑动 -->
			<view class="mask-layer" @tap="offReply" 
			@touchmove.stop.prevent="moveHandle"></view>
			<view class="trply-list animate__animated"
			:class="[showClass==true?'animate__bounceInUp':'animate__bounceOutDown']"
			 style="{height:height+'px'}"
			@touchmove.stop.prevent="moveHandle">
				<scroll-view scroll-y="true"  :style="{height:height+'px'}">
					<comment-list :item="item" :isComment="false"></comment-list>
					
					<view class="list2 p-all_20">
						<text>全部回复 {{item.replyData.length}}</text>
					</view>
					
					<block v-for="(reply,index) in item.replyData" :key="index">
						<comment-list :item="reply" :isComment="false" :index="index">
						</comment-list>
					</block>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import commentList from './comment-list.vue';
	export default{
		components:{
			commentList
		},
		props:{
			showClass:{
				type:[String,Boolean],
				default:false
			},
			height:{
				type:Number,
				default:300
			},
			item:{
				type:Object,
				default:{}
			}
		},
		methods:{
			moveHandle(){},
			offReply(){
				this.$emit('offreply',false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mask-layer{
		z-index: 100;
		background-color: rgba(0,0,0,.3);
		position: fixed;
		top: 0;
		bottom: 0;
		left:0;
		right:0;
	}
	.trply-list{
		z-index: 11110;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left:0;
		right:0;
		.list2{
			border-top: 1px solid #EEEEEE;
		}
	}
</style>
