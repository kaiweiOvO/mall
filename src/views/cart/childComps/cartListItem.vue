<template>
    <div>
        {{item}}
    </div>
</template>

<script>
    export default {
        name: "cartListItem",
        props: {
            item: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>