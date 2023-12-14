import Vue from "vue";
import Vuex from "vuex";
import createPersistedstate  from 'vuex-persistedstate'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mode: '',
    searchValue: '',
    count: 0,
    checkedList: []
  },
  mutations: {
    changeMode(state, p) {
      state.mode = p;
    },
    changeValue(state, v) {
      state.searchValue = v
    },
    changeCount(state, n) {
      state.count = n
    },
    addItem(state, id) {
      console.log('addItem', id)
      if(state.checkedList.indexOf(id) == -1) {
        state.checkedList.push(id)
      }
      console.log('checkedList', state.checkedList)
    },
    deleteItem(state, id) {
      console.log('deleteItem', id)
      const idx = state.checkedList.indexOf(id);
      if(idx != -1) {
        state.checkedList.splice(idx, 1)
      }
      console.log('checkedList', state.checkedList)
    }
  },
  actions: {

  },
  modules: {

  },
  plugins: [
    createPersistedstate({
      key: 'vdemo'
    })
  ]
});

export default store;
