

<template>
    <router-link to="/login">Login</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/contact">Contact</router-link>
    <router-view />
  <div>
    User: {{ user }}<button @click="logOut" v-if="loggedUser">x</button>
  </div>
  
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const user = computed(() => store.getters.getUser);
    const loggedUser = computed(() => store.getters.loggedUser);
    const logOut = () =>{ 
      store.dispatch('logOut');
      router.push('/login');
    }

    return {
      user,
      logOut,
      loggedUser
    };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
