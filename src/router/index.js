import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 解决重复跳转出现的红字
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
	return originalReplace.call(this, location).catch((err) => err);
};

// import Home from '@/views/Home';
// import Login from '@/views/Login';
// import Register from '@/views/Register';
// import Search from '@/views/Search';

export default new VueRouter({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: () => import('@/views/Home'),
			meta: { showFooter: true },
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/Login'),
			meta: { showFooter: false },
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('@/views/Register'),
			meta: { showFooter: false },
		},
		{
			path: '/search/:keyword?',
			name: 'search',
			component: () => import('@/views/Search'),
			meta: { showFooter: true },
			props: true,
		},
		{
			path: '/',
			redirect: { name: 'home' },
		},
	],
});
