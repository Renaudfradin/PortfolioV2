<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar/NavBar.vue'

export default {
  components: {
    NavBar,
  }
}
</script>

<template>
  <NavBar />
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
html{
  background-color: #222222;
  height: 100vh;
}
body{
  margin: 0%;
  padding: 0%;
}
</style>
