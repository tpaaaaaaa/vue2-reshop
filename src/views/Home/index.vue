<template >
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <TodayRecommend></TodayRecommend>
        <ProductRank></ProductRank>
        <ProductLike></ProductLike>
        <ProductFloor></ProductFloor>
        <ProductFloor></ProductFloor>
        <ProductBrand></ProductBrand>
    </div>
</template>

<script>
import ListContainer from './ListContainer';
import TodayRecommend from './TodayRecommend';
import ProductRank from './ProductRank';
import ProductLike from './ProductLike';
import ProductFloor from './ProductFloor';
import ProductBrand from './ProductBrand';
export default {
    name: 'ShopHome',
    components: {
        ListContainer,
        TodayRecommend,
        ProductRank,
        ProductLike,
        ProductFloor,
        ProductBrand
    },

};
</script>

<style lang="less" scoped>

</style>