import request from '@/utils/request';
import mockRequest from '@/utils/mockRequest';

const getMockBannerImg = () => mockRequest.get('/banner');
const getMockFloor = () => mockRequest.get('/floor');

const getBaseCategoryList = () =>
	request.get('/api/product/getBaseCategoryList');

const getListByIdAndName = (data) => request.post('/api/list', { data });

export {
	getBaseCategoryList,
	getListByIdAndName,
	getMockBannerImg,
	getMockFloor,
};
