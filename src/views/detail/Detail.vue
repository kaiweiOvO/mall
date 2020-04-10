<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @navClick="navClick" ref="nav"/>
        <scroll class="content" ref="scroll" @scroll="contentScroll"
                :probeType="3"
                :isShowBackTop="true"
        >
            <detail-swiper :top-images="topImages"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info ref="param" :param-info="paramInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <goods-list ref="recommend" :goods="recommends"/>
        </scroll>
        <detail-bottom-bar @addToCart="addToCart"/>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    import DetailBaseInfo from './childComps/DetailBaseInfo'
    import DetailShopInfo from './childComps/DetailShopInfo'
    import DetailGoodsInfo from './childComps/DetailGoodsInfo'
    import DetailParamInfo from './childComps/DetailParamInfo'
    import DetailCommentInfo from './childComps/DetailCommentInfo'
    import DetailBottomBar from "./childComps/DetailBottomBar";

    import Scroll from 'components/common/scroll/Scroll'
    import GoodsList from 'components/content/goods/GoodsList'

    import {getDetail, Goods, Shop, GoodsParam} from 'network/detail'
    import {getRecommend} from 'network/detail'
    import {itemListenerMixin} from "common/mixins";
    import {debounce} from "common/utils";
    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailBottomBar,
            GoodsList,
            Scroll
        },
        mixins: [itemListenerMixin],
        data() {
            return {
                iid: null,
                topImages: null,
                goods: {},
                shop: {},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommends: [],
                compsOffsetTop: [],
                debounceImageLoad: null,
                currentIndex: 0
            }
        },
        methods: {
            imageLoad() {
                this.debounceImageLoad()
            },
            navClick(index) {
                this.$refs.scroll.scrollTo(0, -(this.compsOffsetTop[index]), 500)
            },
            contentScroll(position) {
                const y = -Math.floor(position.y)
                // if (y >= this.compsOffsetTop[3]) {
                //     if (this.currentIndex === 3)
                //         return
                //     this.$refs.nav.currentIndex = 3
                //     this.currentIndex = 3
                //     return
                // }
                // else if (y >= this.compsOffsetTop[2]) {
                //     if (this.currentIndex === 2)
                //         return
                //     this.$refs.nav.currentIndex = 2
                //     this.currentIndex = 2
                //     return
                // }
                // else if(y >= this.compsOffsetTop[1]) {
                //     if (this.currentIndex === 1)
                //         return
                //     this.$refs.nav.currentIndex = 1
                //     this.currentIndex = 1
                //     return
                // }
                // else {
                //     if (this.currentIndex === 0)
                //         return
                //     this.$refs.nav.currentIndex = 0
                //     this.currentIndex = 0
                //
                // }
                let length = this.compsOffsetTop.length
                for(let i = 0; i < length; i++) {
                    // if (this.currentIndex !== i
                    //     && (
                    //         (i < length - 1
                    //             && y >= this.compsOffsetTop[i]
                    //             && y < this.compsOffsetTop[i+1])
                    //         || (i === length - 1 && y >= this.compsOffsetTop[i]))) {
                    if (this.currentIndex !== i &&
                        (y >= this.compsOffsetTop[i] &&
                            y < this.compsOffsetTop[i+1])
                    ){
                        this.currentIndex = i
                        this.$refs.nav.currentIndex = i
                    }
                }

            },
            addToCart() {
                const product = {}
                product.image = this.topImages[0]
                product.title = this.goods.title
                product.desc = this.goods.desc
                product.price = this.goods.realPrice
                product.iid = this.iid
                this.$store.dispatch('addToCart', product)
            }
        },
        created() {
            this.iid = this.$route.params.iid

            getDetail(this.iid).then(res => {
                const data = res.result
                this.topImages = data.itemInfo.topImages
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
                this.shop = new Shop(data.shopInfo)
                this.detailInfo = data.detailInfo
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                if (data.rate.cRate !== 0)
                    this.commentInfo = data.rate.list[0]
            })

            getRecommend().then(res => {
                this.recommends = res.data.list
            })

            this.debounceImageLoad = debounce(() => {
                this.$refs.scroll.refresh()
                this.compsOffsetTop = []
                this.compsOffsetTop.push(0)
                this.compsOffsetTop.push(this.$refs.param.$el.offsetTop)
                this.compsOffsetTop.push(this.$refs.comment.$el.offsetTop)
                this.compsOffsetTop.push(this.$refs.recommend.$el.offsetTop)
                this.compsOffsetTop.push(Number.MAX_VALUE)
            })

        }
    }

</script>

<style scoped>
    #detail{
     position: relative;
     z-index: 10;
     background-color: #fff;
    }

    .content {
        height: calc(100vh - 44px - 58px);
        overflow: hidden;
    }
    
    .detail-nav {
        position: relative;
        background-color: #fff;
        z-index: 11;
    }
</style>