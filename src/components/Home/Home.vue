<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() { },
})
</script>

<template>
  <div class="presentation">
    <h3>Bonjour</h3>
    <h3>Je suis Renaud</h3>
    <h3>Développeur Front-end</h3>
    <div class="btnBlock">
      <router-link to="/Contact" class="btnContact">Contacter - moi !</router-link>
      <router-link to="/Works" class="btnContact">Mes projets</router-link>
    </div>
  </div>    
</template>

<style src="./Home.css" scoped> </style>