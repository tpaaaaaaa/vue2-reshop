<template >
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <h2 class="all" @mouseenter="showCategory">全部商品分类</h2>
            <div class="sort" v-show="show" @mouseleave="hiddenCategory">
                <div class="all-sort-list2" @click="goSearch($event)">
                    <div class="item" v-for="c1 of cutAllCategory" :key="c1.categoryId">
                        <h3>
                            <a href="#" :data-category1id="c1.categoryId" :data-categoryname="c1.categoryName">
                                {{ c1.categoryName }}
                            </a>
                        </h3>
                        <div class="item-list clearfix">
                            <div class="subitem" v-for="c2 of c1.categoryChild" :key="c2.categoryId">
                                <dl class="fore">
                                    <dt>
                                        <a href="#" :data-category2id="c2.categoryId"
                                           :data-categoryname="c2.categoryName">
                                            {{ c2.categoryName }}
                                        </a>
                                    </dt>
                                    <dd>
                                        <em v-for="c3 of c2.categoryChild" :key="c3.categoryId">
                                            <a href="#" :data-category3id="c3.categoryId"
                                               :data-categoryname="c3.categoryName">
                                                {{ c3.categoryName }}
                                            </a>
                                        </em>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'TypeNav',
    computed: {
        ...mapGetters('home', ['cutAllCategory'])
    },
    beforeCreate() {
        this.$store.dispatch('home/getAllCategory');

    },
    mounted() {
        if (this.$route.name !== 'home') {
            this.show = false;
        }
    },
    data() {
        return {
            show: true
        };
    },
    methods: {
        goSearch(e) {
            e.preventDefault();
            if (!e.target.closest('a')) return;
            const { categoryname, category1id, category2id, category3id } = e.target.dataset;

            if (!categoryname) return;
            let location = { name: 'search', query: { categoryName: categoryname } };

            if (category1id) {
                location.query.category1Id = category1id;
            }
            else if (category2id) {
                location.query.category2Id = category2id;
            }
            else {
                location.query.category3Id = category3id;
            }
            this.$router.push(location);
        },
        showCategory() {
            if (this.$route.name !== 'home') {
                this.show = true;
            }
        },
        hiddenCategory() {
            if (this.$route.name !== 'home') {
                this.show = false;
            }
        }

    }
};
</script>

<style lang="less" scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;


            .all-sort-list2 {
                .item {
                    :hover {
                        background-color: #ccc;
                    }

                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            display: block;
                        }
                    }
                }
            }
        }
    }
}
</style>