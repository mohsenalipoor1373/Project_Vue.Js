<template>
  <div>
    <router-link class="btn btn-primary" :to="{name:'createPost'}">CreatePost</router-link>

  </div>
  <div v-if="loading" class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-4 g-3" v-for="post in posts" :key="post.id">
    <div class="card">
      <div class="card-header">
        <router-link :to="{ name:'postId' , params:{id:post.id} }">{{ post.title }}</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router";

export default {

  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const route = useRoute();

    function getPosts() {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(function (response) {
            posts.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getPosts();
    return {posts, loading, route}
  }
}
</script>

<style>

</style>