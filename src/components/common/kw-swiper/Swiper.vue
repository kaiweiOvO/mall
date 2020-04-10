<template>
    <swiper v-if="banners.length > 0":options="swiperOptions" class="swiper">
        <swiper-slide class="swiperItem" v-for="banner in banners" :key="banner.image">
            <a :href="banner.link">
                <img class="itemImage" :src="banner.image" alt="" @load="imageLoad">
            </a>
        </swiper-slide>
<!--        <div v-if="banners.length > 1" class="swiper-pagination" id="pagination" slot="pagination"></div>-->
    </swiper>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        //报错 Maximum call stack size exceeded
        //name 不能是 Swiper
        name: "kw-Swiper",
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false
                    }
                }
            }
        },
        props: {
            banners: Array,
            default() {
                return []
            }
        },
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            directive
        },
        methods: {
            imageLoad() {
                this.$emit('imageLoad')
            }
        }
    }
</script>

<style scoped>
    .itemImage {
        width: 100%;
    }
</style>