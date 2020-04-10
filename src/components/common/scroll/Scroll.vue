<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <back-top v-if="isShowBackTop && show" @click.native="backClick"/>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import BackTop from './BackTop'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            },
            isShowBackTop: false
        },
        data() {
            return {
                scroll: null,
                show: false
            }
        },
        components: {
            BackTop
        },
        methods: {
            scrollTo(x, y, time=300) {
                this.scroll && this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            getScrollY() {
                return this.scroll ? this.scroll.y : 0
            },
            backClick() {
                this.scroll.scrollTo(0, 0, 500)
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                click: true,
                pullUpLoad: {

                },
                mouseWheel: true
            })
            this.scroll.on('scroll', (position) => {
                this.show = position.y  < -1000
                this.$emit('scroll', position)
            })
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        }
    }
</script>

<style scoped>

</style>