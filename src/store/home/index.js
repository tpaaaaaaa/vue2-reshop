import * as api from '@/api';

const state = {
	allBaseCategory: [],
	bannerList: [],
	hotProductList: [],
};
const actions = {
	async getAllCategory(context) {
		const result = await (await api.getBaseCategoryList()).data;
		if (result.code !== 200) return new Error('获取分类失败');
		context.commit('GETALLCATEGORY', result.data);
	},
	async getBannerList(context) {
		const result = await api.getMockBannerImg();
		if (result.code !== 200) return new Error('获取失败');
		context.commit('GETBANNERLIST', result.data);
	},
	async getHotProductList(context) {
		const result = await api.getMockFloor();
		if (result.code !== 200) return new Error('获取失败');
		context.commit('GETHOTPRODUCTLIST', result.data);
	},
};
const mutations = {
	GETALLCATEGORY(state, value) {
		state.allBaseCategory = value;
	},
	GETBANNERLIST(state, value) {
		state.bannerList = value;
	},
	GETHOTPRODUCTLIST(state, value) {
		state.hotProductList = value;
	},
};
const getters = {
	cutAllCategory(state) {
		return state.allBaseCategory.slice(0, -2);
	},
};

export default { namespaced: true, state, getters, actions, mutations };
