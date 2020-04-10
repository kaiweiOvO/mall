<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item="item"/>
        <div class="load-msg" v-if="Object.keys(goods).length !== 0 && showLoadMsg">正在加载...</div>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'

    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            },
            showLoadMsg: {
                type: Boolean,
                default() {
                    return null;
                }
            }
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .load-msg {
        font-size: 10px;
        padding: 10px;
        position: absolute;
        bottom: -40px;
    }
</style>