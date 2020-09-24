const getTime = {
	//比较两个时间相差多少分钟，默认5分钟 return true || false
	getTimeDifference: function(time1, time2, difference = 5) {
		let [t1, t2] = [parseInt(time1), parseInt(time2)];
		if (time1.toString().length < 13) {
			// 如果时间戳是10位的，让它变13位
			t1 *= 1000;
		}
		if (time2.toString().length < 13) {
			// 如果时间戳是10位的，让它变13位
			t2 *= 1000;
		}

		if ((t1 - t2) / (60 * 1000) >= difference) {
			return true;
		} else {
			return false;
		}
	},
	//获取时间戳
	getTimestamp: function() {
		let time = new Date().getTime();
		return time;
	},
	// 时间显示的格式
	getTimeFormat: function(time) {
		//防止传入的是字符串格式
		let t = parseInt(time);
		if (time.toString().length < 13) {
			// 如果时间戳是10位的，让它变13位
			t *= 1000;
		}
		//用户传入的时间
		let d = new Date(t);
		let year = d.getFullYear();
		let month = d.getMonth() + 1;
		let day = d.getDate();
		let hours = d.getHours();
		let minutes = d.getMinutes();

		//现在的时间
		let newD = new Date();
		let newYear = newD.getFullYear();
		let newMonth = newD.getMonth() + 1;
		let newDay = newD.getDate();
		let newHours = newD.getHours();
		let newMinutes = newD.getMinutes();

		// 补0
		let y = month < 10 ? '0' + month : month;
		let r = day < 10 ? '0' + day : day;
		let h = hours < 10 ? '0' + hours : hours;
		let f = minutes < 10 ? '0' + minutes : minutes;
		//如果是1年之外的，就要显示年份
		// console.log(newDay - day >= 2);
		if (newYear - year >= 1) {
			return (year + '年' + y + '月' + r + '日 ' + h + ':' + f);
		} else if (newMonth - month >= 1) {
			//如果是1个月之外的，就要显示几月几号
			return (y + '月' + r + '日 ' + h + ':' + f);
		} else if (newDay - day >= 2) {
			//如果是前天的，也显示几月几号
			return (y + '月' + r + '日 ' + h + ':' + f);
		} else if (newDay - day == 1) {
			//如果是昨天的，就显示昨天
			return ('昨天 ' + h + ':' + f);
		} else if (newDay == day) {
			//今天的直接显示时间，分个上下午
			if (parseInt(h) < 6) {
				return ('凌晨 ' + h + ':' + f);
			} else if (parseInt(h) < 12) {
				return ('上午 ' + h + ':' + f);
			} else if (parseInt(h) < 20) {
				return ('下午 ' + h + ':' + f);
			} else if (parseInt(h) < 24) {
				return ('晚上 ' + h + ':' + f);
			}
		}
	}
};

export default {
	getTime
}
