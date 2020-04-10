<template>
    <div>
        <nav-bar class="cart-nav">
            <div slot="center">购物车({{length}})</div>
        </nav-bar>
        <scroll class="content">
            <cart-list :cartList="list"/>
        </scroll>
    </div>
</template>

<script>

    import NavBar from "components/common/navbar/NavBar";
    import CartList from "./childComps/cartList";

    import Scroll from "components/common/scroll/Scroll";
    import { mapGetters } from 'vuex'

    export default {
        name: "Cart",
        components: {
            NavBar,
            CartList,
            Scroll,
        },
        data() {
            return {
                count: 0
            }
        },
        computed: {
            // ...mapGetters(['cartLength', 'cartList'])
            ...mapGetters({
                length: 'cartLength',
                list: 'cartList'
            })
        }

    }
</script>

<style scoped>
    .cart-nav {
        background-color: var(--color-high-text);
        color: #fff;
    }
    .content {
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>