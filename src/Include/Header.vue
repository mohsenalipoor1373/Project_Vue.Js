<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SPA_Vue.Js</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user">Users</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/post">Posts</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
</style>