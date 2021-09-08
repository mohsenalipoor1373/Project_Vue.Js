<template>
  <h2>Edit Post</h2>
  <form @submit.prevent="validate">
    <div class="mb-3">

      <label for="exampleFormControlInput1" class="form-label">Title:</label>

      <input type="text" class="form-control" id="exampleFormControlInput1"
             v-model="form.title"
             placeholder="Please Type Title">
      <div class="form-text text-danger" v-show="!form.title">
        Title This Required
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body:</label>

      <textarea class="form-control"
                v-model="form.body"
                id="exampleFormControlTextarea1" rows="3"></textarea>
      <div class="form-text text-danger" v-show="!form.body">
        Body This Required
      </div>
    </div>
    <div>
      <button type="submit" @click="updatePost()" class=" btn btn-primary" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
        </div>
        Edit
      </button>
    </div>
  </form>


</template>
<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRoute} from "vue-router";

export default {
  name: 'UpdatePost',
  setup() {
    const loading = ref(false)
    const route = useRoute();
    const form = reactive({
      title: '',
      body: '',
    })

    function getUsers() {
      axios
          .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            form.title = response.data.title;
            form.body = response.data.body;
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getUsers();
    function updatePost() {
      loading.value = true;
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        title: form.title,
        body: form.body,
        userId: 1
      }).then(function () {
        loading.value = false;
        Swal.fire({
          title: 'Success!',
          text: 'Post This Save Success',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }).catch(function () {
        loading.value = false;
        Swal.fire({
          title: 'Error!',
          text: 'Error This Save Post',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
    }



    return {form, updatePost, loading, route}
  }

}
</script>
<style>

</style>