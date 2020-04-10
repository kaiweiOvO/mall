<template>
    <div>
        <cart-list-item v-for="(item, index) in cartList" :key="index" :item="item"/>
    </div>
</template>

<script>
    import CartListItem from './cartListItem'

    export default {
        name: "cartList",
        props: {
            cartList: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        components: {
            CartListItem
        }
    }
</script>

<style scoped>

</style>