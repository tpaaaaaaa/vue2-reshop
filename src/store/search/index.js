import * as api from '@/api';

const state = {
	searchList: {},
};
const actions = {
	async getSearchList(context, value) {
		console.log(value);
		// api.getListByIdAndName(value).then((res) => console.log(res));
		const result = await api.getListByIdAndName(value);
		if (result.status !== 200) return new Error('搜索失败');
		context.commit('GETSEARCHLIST', result.data.data);
	},
};
const mutations = {
	GETSEARCHLIST(state, value) {
		state.searchList = value;
	},
};
const getters = {
	attrsList(state) {
		return state.searchList.attrsList;
	},
	goodsList(state) {
		return state.searchList.goodsList;
	},
	trademarkList(state) {
		return state.searchList.trademarkList;
	},
	pageInfo(state) {
		const { pageNo, pageSize, total, totalPages } = state.searchList;
		return { pageNo, pageSize, total, totalPages };
	},
};

export default { namespaced: true, state, getters, actions, mutations };
