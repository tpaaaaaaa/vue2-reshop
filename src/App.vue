<template >
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/';
import Footer from './components/Footer/';
export default {
  name: 'app',
  components: { Header, Footer }
}
</script>

<style scoped>

</style>