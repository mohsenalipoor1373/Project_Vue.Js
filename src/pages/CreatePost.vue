<template>
  <h2>Create Post</h2>
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
      <button type="submit" @click="createPost()" class=" btn btn-primary" :disabled="loading">
        <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
        </div>
        Create
      </button>
    </div>
  </form>


</template>
<script>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'

export default {
  name: 'CreatePost',
  setup() {
    const loading = ref(false)
    const form = reactive({
      title: '',
      body: '',
    })


    function createPost() {
      loading.value = true;
      axios.post("https://jsonplaceholder.typicode.com/posts", {
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

    return {form, createPost, loading}
  }

}
</script>
<style>

</style>