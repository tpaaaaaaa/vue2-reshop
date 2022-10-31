<template >
    <div>
        {{ $route.params }}----{{ keyword }}
        {{ $route.query }}
    </div>
</template>

<script>
export default {
    name: 'ShopSearch',
    props: ['keyword']
}
</script>

<style lang="less" scoped>

</style>