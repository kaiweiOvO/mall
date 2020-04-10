<template>
    <nav-bar>
        <div slot="left" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="" class="back">
        </div>
        <div slot="center" class="title">
            <div v-for="(item, index) in titles" class="title-item"
                 :class="{active: index === currentIndex}"
                 @click="itemClick(index)">
                {{item}}
            </div>
        </div>
    </nav-bar>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'

    export default {
        name: "DetailNavBar",
        components: {
            NavBar
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index) {
                // this.currentIndex = index
                this.$emit('navClick', index)
            },
            backClick() {
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .title {
        display: flex;
    }

    .title-item {
        flex: 1;
        font-size: 12px;
    }

    .active {
        color: var(--color-high-text);
    }

    .back {
        margin-top: 11px;
    }
</style>