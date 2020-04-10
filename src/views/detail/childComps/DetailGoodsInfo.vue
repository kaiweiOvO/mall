<template>
    <div class="detail_info" v-if="Object.keys(detailInfo).length !== 0">
        <div class="title">
            <div class="start">
                <div class="spot"></div>
                <div class="line"></div>
            </div>
            <div class="desc">{{ detailInfo.desc }}</div>
            <div class="end">
                <div class="spot"></div>
                <div class="line"></div>
            </div>
            <div class="look">{{ detailInfo.detailImage[0].listkey }}</div>
        </div>
        <div class="img">
            <img :src="item" v-for="(item,index) in detailInfo.detailImage[0].list"
                 :key="index" @load="imageLoad"/>
        </div>
    </div>
</template>
<script>
    export default {
        name: "DetailGoodsInfo",
        props: {
            detailInfo: {
                type: Object,
                default() {
                    return {};
                }
            },
        },
        methods: {
            imageLoad() {
                this.$emit('imageLoad')
            }
        }
    };
</script>
<style scoped>
    .detail_info {
        margin-top: 0.3rem;
    }
    .detail_info .title {
        display: flex;
        flex-direction: column;
        padding: 0.3rem;
    }
    .detail_info .title .start .spot {
        width: 0.04rem;
        height: 0.04rem;
        border: 1px solid #000000;
        background-color: #000000;
    }
    .detail_info .title .start .line {
        width: 1rem;
        height: 1px;
        background-color: #d5d5d5;
    }
    .detail_info .title .desc {
        margin: 0.3rem 0;
        font-size: 0.26rem;
    }
    .detail_info .title .end {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        right: 0px;
        width: 1rem;
    }
    .detail_info .title .end .spot {
        align-self: flex-end;
        width: 0.04rem;
        height: 0.04rem;
        background-color: #000000;
        border: 1px solid #000000;
    }
    .detail_info .title .end .line {
        width: 1rem;
        height: 1px;
        text-align: right;
        background-color: #d5d5d5;
    }
    .detail_info .title .look {
        font-size: 0.3rem;
    }
    .detail_info .img img {
        width: 100vw;
        /*height: 10.24rem;*/

    }

</style>