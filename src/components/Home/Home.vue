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
    <h3>Développeur Full-stack</h3>
    <div class="btnBlock">
      <router-link to="/works" class="btnHome">Mes projets</router-link>
      <router-link to="/contact" class="btnHome">Contactez - moi !</router-link>
    </div>
  </div>    
</template>

<style src="./Home.css" scoped> </style>