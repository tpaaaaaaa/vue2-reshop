<template>
    <swiper
            class="swiper"
            :options="swiperOptoion">
        <!-- <swiper-slide v-for="( url, index) of imgUrl" :key="index">
            <img :src="url" />
        </swiper-slide> -->

        <swiper-slide
                      v-for="url of bannerList"
                      :key="url.id">
            <img :src="getAsyncAssets(url.imgUrl)" />
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
// import { mapState } from 'vuex';

export default {
    name: 'CarouselChart',
    components: { Swiper, SwiperSlide },
    props: { bannerList: Array },
    computed: {
        // imgUrl() {
        //     return this.imgUrls.nums.map((num => require('@/' + this.imgUrls.url.replace('<%num%>', `${num}`))));
        // },
        // ...mapState('home', ['bannerList'])
    },
    data() {
        return {
            swiperOptoion: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    // renderBullet: function (index, className) {
                    //     return '<span class="' + className + ' bullet-cube-point">' + (index + 1) + '</span>';
                    // }
                }
            }
        };
    },
    methods: {
        getAsyncAssets(url) {
            return require('@/' + url);
        }
    },
};
</script>
<style lang="less" scoped>
>.bullet-cube-point {
    border-radius: 0 !important;
}
</style>
