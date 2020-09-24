import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let userData = [];
try {
	const value = uni.getStorageSync('loginUserData');
	if (value) {
		userData = JSON.parse(value);
	}
} catch (e) {
	uni.showToast({
		title: "获取数据失败！",
		icon: "none"
	})
}
const store = new Vuex.Store({
	state: {
		userData: userData
	},
	getters: {
		getUserData(state) {
			return state.userData[0];
		},
		getLoginStatus(state) {
			return state.userData.length ? state.userData[0].isLogin : false;
		}
	},
	mutations: {
		reviseLoginStatus(state, bool) {
			// 修改数据时在获取一次数据，防止变量保存着的是上一次储存的数据
			uni.getStorage({
				key: 'loginUserData',
				success: function(res) {
					state.userData = JSON.parse(res.data);
					state.userData[0].isLogin = bool;
					// 保存数据
					uni.setStorage({
						key: "loginUserData",
						data: JSON.stringify(state.userData)
					})
				}
			});
		},
		reviseUserInof(state, value) {
			state.userData[0].userData[value.index].value = value.value;
			uni.setStorage({
				key: "loginUserData",
				data: JSON.stringify(state.userData)
			})
		}
	}
});
export default store
