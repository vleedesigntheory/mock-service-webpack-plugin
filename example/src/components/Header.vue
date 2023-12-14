<template>
  <div class="header">
    <Search v-model="value" @search="handleSearch" />
  </div>
</template>

<script>
import { Input } from 'ant-design-vue';
import { APISearch } from '@/api/list'
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  components: {
    Search: Input.Search
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    ...mapMutations([
      'changeMode',
      'changeValue'
    ]),
    async handleSearch(value) {
      console.log('value', value);
      const res = await APISearch({
        value
      })
      console.log('search', res);
      if(value) {
        this.changeMode('search');
        this.changeValue(value)
      } else {
        this.changeMode('')
        this.changeValue(value)
        this.$router.go(0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 1rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .5rem;
}
</style>