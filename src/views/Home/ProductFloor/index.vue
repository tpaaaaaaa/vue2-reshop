<template>
    <!--楼层-->
    <div class="floor">
        <div class="py-container" v-for="productList of hotProductList" :key="productList.id">
            <div class="title clearfix">
                <h3 class="fl">{{ productList.name }}</h3>
                <div class="fr">
                    <ul class="nav-tabs clearfix">
                        <li :class="{ active: index === 0 }" v-for="(nav, index) of productList.navList"
                            :key="index">
                            <a :href="nav.url" data-toggle="tab">{{ nav.text }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane">
                    <div class="floor-1">
                        <div class="blockgary">
                            <ul class="jd-list">
                                <li v-for="(keyword, index) of productList.keywords" :key="index">{{ keyword }}</li>
                            </ul>
                            <img :src="getAsyncAssets(productList.imgUrl)" />
                        </div>
                        <div class="floorBanner">
                            <!-- <div class="swiper-container" id="floor1Swiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <img src="@/assets/images/home/floor-1-b01.png">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="@/assets/images/home/floor-1-b02.png">
                                    </div>
                                    <div class="swiper-slide">
                                        <img src="@/assets/images/home/floor-1-b03.png">
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>

                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div> -->

                            <CarouselChart :bannerList="productList.carouselList"></CarouselChart>

                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="@/assets/images/home/floor-1-2.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="@/assets/images/home/floor-1-3.png" />
                            </div>
                        </div>
                        <div class="split center">
                            <img :src="getAsyncAssets(productList.bigImg)" />
                        </div>
                        <div class="split">
                            <span class="floor-x-line"></span>
                            <div class="floor-conver-pit">
                                <img src="@/assets/images/home/floor-1-5.png" />
                            </div>
                            <div class="floor-conver-pit">
                                <img src="@/assets/images/home/floor-1-6.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ProductFloor',
    beforeCreate() {
        this.$store.dispatch('home/getHotProductList');
    },
    computed: {
        ...mapState('home', ['hotProductList'])
    },
    methods: {
        getAsyncAssets(url) {
            return require('@/' + url);
        }
    },
};
</script>

<style lang="less" scoped>
.floor {
    margin-top: 15px;

    .py-container {
        width: 1200px;
        margin: 0 auto;

        .title {
            .fl {
                float: left;
                color: #c81623;
                font-size: 20px;
                line-height: 30px;
                margin: 9px 0;
                font-weight: 700;
            }

            .fr {
                float: right;

                .nav-tabs {
                    margin: 10px 0 0;
                    display: inline-block;

                    li {
                        float: left;
                        line-height: 18px;

                        a {
                            padding-top: 1px;
                            font-weight: 400;
                            background-color: #fff;

                            &::after {
                                content: "|";
                                padding: 0 10px;
                            }
                        }

                        &:nth-child(7) {
                            a {
                                &::after {
                                    content: "";
                                }
                            }
                        }

                        &.active {
                            a {
                                color: #e1251b;
                            }
                        }
                    }
                }
            }
        }

        .tab-content {
            border-top: 2px solid #c81623;
            border-bottom: 1px solid #e4e4e4;

            .tab-pane {
                .floor-1 {
                    height: 360px;
                    display: flex;

                    .blockgary {
                        width: 210px;
                        height: 100%;
                        background: #f7f7f7;

                        .jd-list {
                            padding: 15px 0;
                            overflow: hidden;

                            li {
                                list-style-type: none;
                                float: left;
                                width: 40%;
                                margin: 0 10px;
                                border-bottom: 1px solid #e4e4e4;
                                text-align: center;
                                line-height: 26px;
                            }
                        }

                        img {
                            width: 100%;
                        }
                    }

                    .floorBanner {
                        width: 330px;
                        height: 100%;
                    }

                    .split {
                        width: 220px;
                        height: 100%;
                        position: relative;

                        .floor-x-line {
                            position: absolute;
                            background: #e4e4e4;
                            width: 220px;
                            height: 1px;
                            top: 180px;
                        }

                        .floor-conver-pit {
                            width: 100%;
                            height: 50%;

                            img {
                                width: 100%;
                                height: 100%;
                                transition: all 400ms;

                                &:hover {
                                    opacity: 0.8;
                                }
                            }
                        }
                    }

                    .center {
                        border: 1px solid #e4e4e4;
                    }
                }
            }
        }
    }
}
</style>