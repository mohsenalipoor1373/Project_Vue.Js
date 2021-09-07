<template>
  <div class="container mt-5">
    <div class="row">

        <div v-if="loading" class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

        <div v-else class="col-md-4 g-3" v-for="user in users" :key="user.id">
          <CardView :user="user"></CardView>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import CardView from "../Include/CardView";

export default {
  components: {
    CardView
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            users.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getUsers();
    return {users}
  }
}
</script>

<style>

</style>