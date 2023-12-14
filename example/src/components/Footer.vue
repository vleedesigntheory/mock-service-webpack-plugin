<template>
  <div class="footer">
    <template v-if="mode == 'search'">
      <span class="footer-text">已搜到{{$store.state.count}}项</span>
    </template>
    <span class="footer-text" v-else>
      已选{{$store.state.checkedList.length}}项
    </span>
  </div>
</template>

<script>

export default {
    name: 'Footer',
    props: {
      mode: {
        type: String
      },
    }
}
</script>

<style lang="less" scoped>
.footer {
    width: 100%;
    height: 2rem;
    background: #fff;
    padding: .25rem .5rem;

    &-text {
      color: #1778fe;
      font-weight: bold;
    }
}
</style>