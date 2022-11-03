<template>
    <div class="fr page">
        <div class="sui-pagination clearfix">
            <ul>
                <li class="prev " :class="{ disabled: pageInfo.pageNo > 1 }">
                    <a href="#">«上一页</a>
                </li>
                <template v-for="(page, index) of pageInfo.totalPages">
                    <li
                        :class="{ active: pageInfo.pageNo === page }"
                        :key="index"
                        v-if="(limit / 2) > (page - pageInfo.pageNo)"
                        @click="switchPage($event)">
                        <a href="#" :data-page="page">{{ page }}</a>
                    </li>
                </template>

                <!-- <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">4</a>
                </li>
                <li>
                    <a href="#">5</a>
                </li> -->
                <li class="dotted"><span>...</span></li>
                <li>
                    <a href="#">{{ pageInfo.totalPages }}</a>
                </li>
                <li class="next" :class="{ disabled: pageInfo.pageNo >= pageInfo.totalPages }">
                    <a href=" #">下一页»</a>
                </li>
            </ul>
            <div><span>共{{ pageInfo.totalPages }}页&nbsp;</span></div>
        </div>
    </div>
</template>

<script>
/**
 * pageInfo:{
 *  pageNo:当前页码
 *  pageSize：一页的数据数
 *  total：总共数据
 *  totalPages：总页数
 *   }
 */
export default {
    name: 'PaginationComponent',
    props: ['pageInfo'],
    data() {
        return {
            limit: 5,
            page: 1
        };
    },
    methods: {
        getDateList() {
            this.$store.dispatch('search/getSearchList', this.$route.query);
        },
        switchPage(e) {
            e.preventDefault();
            this.page = e.target.dataset.page;
            console.log(this.page);
            this.$route.query.pageNo = this.page;
        }
    }
};
</script>

<style lang="less" scoped>
.page {
    width: 733px;
    height: 66px;
    overflow: hidden;
    float: right;

    .sui-pagination {
        margin: 18px 0;

        ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
                line-height: 18px;
                display: inline-block;

                a {
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    border: 1px solid #e0e9ee;
                    margin-left: -1px;
                    font-size: 14px;
                    padding: 9px 18px;
                    color: #333;
                }

                &.active {
                    a {
                        background-color: #fff;
                        color: #e1251b;
                        border-color: #fff;
                        cursor: default;
                    }
                }

                &.prev {
                    a {
                        background-color: #fafafa;
                    }
                }

                &.disabled {
                    a {
                        color: #999;
                        cursor: default;
                    }
                }

                &.dotted {
                    span {
                        margin-left: -1px;
                        position: relative;
                        float: left;
                        line-height: 18px;
                        text-decoration: none;
                        background-color: #fff;
                        font-size: 14px;
                        border: 0;
                        padding: 9px 18px;
                        color: #333;
                    }
                }

                &.next {
                    a {
                        background-color: #fafafa;
                    }
                }
            }
        }

        div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
        }
    }
}
</style>