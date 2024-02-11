import { createStore } from 'vuex';

export default createStore({
  state: {
    user:{
      name:'Bacero'
    },
    counter: 0,
  },
  mutations: {
    removeUserName(state){
      state.user.name ='';
    },
    updateUserName(state, name) {
      state.user.name = name;
    }, 

  },
  getters:{
    getUser: state => state.user.name,
    loggedUser: state => state.user.name != '' ? true : false,
  },
  actions: {
    logOut({commit}){
      commit('removeUserName');
    }
  },
  modules: {
   
  },
});