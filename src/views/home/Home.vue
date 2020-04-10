<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl1"
                     class="tab-control"
                     v-show="isFixed"/>

        <scroll class="content" ref="scroll" :probe-type="3"
                @scroll="contentScroll"
                @pullingUp="loadMore"
                :pull-up-load="true"
                :isShowBackTop="true"
                >
            <swiper :banners="banners" @imageLoad="swiperImageLoad"/>
            <recommend-view :recommends="recommends"></recommend-view>
            <feature-view/>
            <tab-control :titles="['流行','新款','精选']"
                         @tabClick="tabClick"
                         ref="tabControl2"/>
            <goods-list :goods="showGoods" :showLoadMsg="true"/>
        </scroll>
    </div>
</template>

<script>
    import RecommendView from './childComps/RecommendView'
    import FeatureView from './childComps/FeatureView'
    import Swiper from 'components/common/kw-swiper/Swiper'
    import NavBar from 'components/common/navbar/NavBar'
    import TabControl from 'components/content/tabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/scroll/Scroll'

    import {getHomeMultidata, getHomeGoods} from "network/home";
    import {itemListenerMixin} from "common/mixins";


    export default {
        name: "Home",
        components: {
            NavBar,
            Swiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
        },
        mixins: [itemListenerMixin],
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'new': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                tabOffsetTop: 0,
                isFixed: false,
                HomeScrollTop: 0
            }
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list;
            }

        },
        methods: {

            //网络请求方法
            getHomeData(){
                getHomeMultidata().then(res => {
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                })
            },
            getHomeGood(type){
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page ++
                })
            },
            //事件监听方法
            tabClick(index) {
                switch(index){
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
            },
            contentScroll(position) {
                this.isFixed = position.y <= -(this.tabOffsetTop)
            },
            loadMore() {
                this.getHomeGood(this.currentType)
                setTimeout(() => {
                    this.$refs.scroll.finishPullUp()
                },1000)
            },
            swiperImageLoad() {
                this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
            }
        },
        created() {
            this.getHomeData()
            this.getHomeGood('pop', 0)
            this.getHomeGood('new', 0)
            this.getHomeGood('sell', 0)

        },
        mounted() {

            //图片加载事件监听
            // const refresh = debounce(this.$refs.scroll.refresh, 400)
            // this.$bus.$on('imageLoaded', () => {
            //     refresh()
            // })
            // 被封装后通过mixin混入
            this.HomeScrollTop = 0
        },
        beforeRouteLeave(to, from, next) {
            this.HomeScrollTop = this.$refs.scroll.getScrollY()
            next()
        },
        activated() {
            this.$refs.scroll.scroll.scrollTo(0, this.HomeScrollTop, )
            this.isFixed = this.$refs.scroll.scroll.y < -(this.tabOffsetTop)
            this.$refs.scroll.refresh()
        },
        deactivated() {
            // this.saveY = this.$refs.scroll.getScrollY()
        }
    }
</script>

<style scoped>
    #home {
        /*padding-top: 44px;*/
        height: 100vh;
        position: relative;
    }

    .tab-control {
        position: relative;
        z-index: 9;
    }

    .home-nav {
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