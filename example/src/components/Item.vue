<template>
  <div class="item">
    <section class="item-left">
      <Checkbox
        @change="handleChange"
        :indeterminate="indeterminate"
        :checked="checkAll"
      />
      <div class="item-left-text">
        <span class="item-left-title">{{ title }}</span>
        <span v-if="mode == 'search'" class="item-left-subtitle">
          {{ subTitle }}
        </span>
      </div>
    </section>
    <section v-if="children.length != 0" class="item-right" @click="handleClick">
      <span class="item-right-count">已选 {{ checkAll ? children.length : count }}</span>
      <Icon type="right" />
    </section>
  </div>
</template>

<script>
import { Checkbox, Icon } from 'ant-design-vue'
import { mapMutations } from 'vuex'
import routes from '@/router/routes';

console.log('children', routes[1].children)

const createTree = children => {
  const r = [];
  children.forEach(child => {
    const key = child.path.split('/').pop();
    if(child.children) {
      r.push({
        key,
        children: createTree(child.children)
      })
    } else {
      r.push({
        key
      })
    }   
  })
  return r;
}

const tree = createTree(routes[1].children);

console.log('tree', tree);

export default {
  name: 'Item',
  props: {
    mode: {
      type: String,
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
    },
    children: {
      type: Array
    },
    prev: {
      type: Array
    }
  },
  components: {
    Checkbox,
    Icon,
  },
  data() {
    return {
      checkAll: false,
      indeterminate: false
    }
  },
  watch: {
    
  },
  methods: {
    handleClick() {
      this.$emit('jump', this.id)
    },
    handleChange(e) {
      console.log('e', e.target.checked, this.id)
      if(e.target.checked) {
        this.checkAll = true;
        this.indeterminate = false;
        if(this.children.length != 0) {
          this.children.forEach(child => {
            this.addItem(child)
          })
        }
        this.addItem(this.id)
      } else {
        this.checkAll = false;
        this.indeterminate = false;
        if(this.children.length != 0) {
          this.children.forEach(child => {
            this.deleteItem(child)
          })
        }
        this.deleteItem(this.id)
        if(this.prev.length != 0) {
          this.prev.forEach(pre => {
            this.deleteItem(pre)
          })
        }
      }
    },
    ...mapMutations([
      'addItem',
      'deleteItem'
    ]),
  },
  mounted() {
    console.log('this.id', this.id)
    if(this.$store.state.checkedList.includes(this.id)) {
      this.checkAll = true;
    } else {
      this.checkAll = false;
      this.children.forEach(child => {
        if(this.$store.state.checkedList.includes(child)) {
          this.indeterminate = true;
        }
      })
      
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 0.25rem 0.5rem;
  margin: 1px 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;
    align-items: center;
    &-text {
      margin-left: 0.125rem;
      display: flex;
      flex-direction: column;
    }

    &-subtitle {
      color: #ccc;
      margin-top: 0.125rem;
    }
  }

  &-right {
    flex: right;

    &-count {
      margin-right: 0.125rem;
    }
  }

  &-right:hover {
    cursor: pointer;
    color: #1778fe;
  }
}
</style>
