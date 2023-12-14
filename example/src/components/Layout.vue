<template>
  <div class="layout">
    <Header />
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer :mode="$store.state.mode"/>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  background:#f6f6f9;
}
</style>