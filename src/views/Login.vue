<template>
  <div>
    <h2>Login</h2>
    <p>
      User directly: {{ userTest }}
    </p>
    <b>{{ userName }}</b>
    <input type="text" v-model="userName" >

  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore(); 

    const userTest = ref(store.state.user.name);

    const userName = computed({
      get: () => store.getters.getUser,
      set: (value) => {
        store.commit('updateUserName', value);
      },
    });

    const updateUserName = () => {
      store.commit('updateUserName', userName.value);
    };

    return {
      userName,
      userTest
    };
  },
};
</script>