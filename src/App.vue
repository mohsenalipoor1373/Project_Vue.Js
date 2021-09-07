<template>
  <div class="container">
 <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./Include/Header";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

</style>
