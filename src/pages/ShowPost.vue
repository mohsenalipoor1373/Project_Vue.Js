<template>
  <div v-if="loading" class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-12 g-3">
    <div class="card">
      <div class="card-header">
        <router-link :to="{ name:'postId' , params:{id:post.id} }">{{ post.title }}</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Body : {{ post.body }}</li>
      </ul>
    </div>
    <div class="card-footer">
      <button @click="deletePost" class="btn btn-danger">Delete</button>
      <button class="btn btn-dark ms-2">Edit</button>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from 'vue-router';
import Swal from "sweetalert2";

export default {
  setup() {
    const post = ref({});
    const loading = ref(true);
    const route = useRoute();
    function getUsers() {
      axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            loading.value = false;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    getUsers();
    function deletePost() {
      loading.value = true;
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function () {
            loading.value = false;
            Swal.fire({
              title: 'Success!',
              text: 'Post This Delete Success',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }).catch(function () {
        loading.value = false;
        Swal.fire({
          title: 'Error!',
          text: 'Error This Delete Post',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
    }
    return {post, deletePost}
  }
}
</script>

<style>

</style>