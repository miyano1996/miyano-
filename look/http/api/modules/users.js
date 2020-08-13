import axios from '../../axios.js';

const users = {
	login: function(data) {//登录路径  带有token弹头   但token弹头屏蔽了登录注册 不会验证
		return axios({
			url: '/users/login',
			method: 'post',
			// data:data
			data//相同缩写缩写  引用函数时传来的登录值data={name,pass}
		})
	},
	register: function(data) {
		return axios({
			url: '/users/register',
			method: 'post',
			data
		})
	},
	again: function(data) {
		return axios({
			url: '/users/again',
			method: 'get',
			params:{username:data}
		})
	},
}

export default users;