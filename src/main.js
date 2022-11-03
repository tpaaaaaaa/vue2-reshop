import Vue from 'vue';
import App from './App.vue';

import router from '@/router';
import store from '@/store';

import '@/mock/mockServe';
// 全局组件
import TypeNav from '@/views/Home/TypeNav';
import CarouselChart from '@/components/CarouselChart';
import Pagination from '@/components/Pagination';

Vue.component(TypeNav.name, TypeNav);
Vue.component(CarouselChart.name, CarouselChart);
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');
