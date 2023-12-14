<template>
  <div class="home">
    <section v-if="$store.state.mode != 'search'" class="home-nav">
      <Breadcrumb separator=">">
        <BreadcrumbItem v-for="item in nav" :key="item.path">
          <a :href="'#' + item.path">{{item.name}}</a>
        </BreadcrumbItem>
      </Breadcrumb>
    </section>
    <section class="home-list">
      <Item
        :mode="$store.state.mode" 
        v-for="l in list" 
        :key="l.id"
        :title="l.title" 
        :subTitle="l.subTitle"
        :id="l.id"
        @jump="handleJump"
        :count="l.children.filter(l => $store.state.checkedList.indexOf(l) != -1).length"
        :children="l.children"
        :prev="l.prev"
      />
    </section>
  </div>
</template>

<script>
import { Breadcrumb } from 'ant-design-vue';
import Item from '@/components/Item';
import { APIList, APINav, APISearch } from '@/api/list';
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    Breadcrumb,
    BreadcrumbItem:Breadcrumb.Item,
    Item
  },
  data() {
    return {
      nav: [],
      list: [],
      count: 0
    }
  },
  mounted() {
    console.log('$route', this.$route);
    console.log('$router', this.$router);
    if(this.$mode !== 'search') {
      this.onGetList();
      this.onGetNav();
    } else {
      this.onSearchList()
    }
    
  },
  watch: {
    '$route.path': {
      handler(val, oldVal) {
        console.log('val', val);
        if(oldVal != val) {
          this.onGetList()
        }
      }
    },
    '$store.state.mode': {
      handler(val) {
        if(val == 'search') {
          this.list = this.onSearchList()
        }
      }
    },
    '$store.state.searchValue': {
      handler(value) {
        if(value) {
          this.onSearchList()
        }
      }
    }
  },
  beforeDestroy() {},
  methods: {
    ...mapMutations([
      'changeCount'
    ]),
    handleJump(id) {
      console.log('id', id)
      this.$router.push({
        path: `${this.$route.path}/${id}`
      })
      this.$router.go(0)
    },
    async onGetList() {
      const res = await APIList({
        params: {
          name: this.$route.name
        }
      })
      console.log('APIList', res);
      if(res.success) {
        this.list = res.data.list
      }
    },
    async onGetNav() {
      const res = await APINav({
        params: {
          name: this.$route.name
        }
      })
      console.log('APINav', res);
      if(res.success) {
        this.nav = res.data.nav;
      }
    },
    async onSearchList() {
      const res = await APISearch(
        {
          value: this.$store.state.searchValue
        }
      )
      console.log('APISearch', res);
      if(res.success) {
        this.list = res.data.list;
        console.log('list.length', this.list.length);
        this.changeCount(this.list.length)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: calc(100% - 3rem);

  &-nav {
    background: #fdfdfd;
    padding: .25rem .5rem;
  }

  &-list {

  }
}
</style>
