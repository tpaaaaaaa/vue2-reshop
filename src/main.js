import Vue from 'vue';
import App from './App.vue';

import TypeNav from '@/views/Home/TypeNav';
import CarouselChart from '@/components/CarouselChart';

Vue.component(TypeNav.name, TypeNav);
Vue.component(CarouselChart.name, CarouselChart);

import router from '@/router';

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
}).$mount('#app');
