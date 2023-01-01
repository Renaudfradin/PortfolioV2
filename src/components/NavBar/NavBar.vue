<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() { },
  data(){
    return{
      urlLink:"https://www.linkedin.com/in/renaudfradin/",
      urlGit:"https://github.com/Renaudfradin"
    }
  }
})
</script>

<template>
  <div class="header">
    <div>
      <router-link class="nav1" to="/"><img class="nav3" style="width:100%" src="@/assets/logo.svg" alt=""></router-link>
    </div>
    <div>
      <router-link class="nav" to="/" active-class="acticeClass"><i class="fas fa-home"></i></router-link>
      <router-link class="nav" to="/About" active-class="acticeClass"><i class="far fa-user"></i></router-link>
      <router-link class="nav" to="/Skills" active-class="acticeClass"><i class="fas fa-cog"></i></router-link>
      <router-link class="nav" to="/Works" active-class="acticeClass"><i class="far fa-eye"></i></router-link>
      <router-link class="nav" to="/Contact" active-class="acticeClass"><i class="far fa-envelope"></i></router-link>
    </div>
    <div>
      <a class="nav" :href="urlLink" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a class="nav" :href="urlGit" target="_blank"><i class="fab fa-github"></i></a>
    </div> 
  </div>
</template>

<style src="./NavBar.css" scoped> </style>