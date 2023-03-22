<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() { },
})
</script>

<template>
  <div class="gif">
    <h2>404</h2>
    <img src="@/assets/star-wars-obi-wan-kenobi.gif" alt="">
    <p>Page Not Found</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<style src="./404.css" scoped> </style>