<template>
  <div class="presentation">
    <h2 class="skills"><br>Bonjour<br>Je suis Renaud<br>Développeur Web<span class="poin">.</span></h2>
    <p class="metier">Développeur front et back</p>
    <router-link to="/Contact" class="btn-contact">Contactez - moi !</router-link>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent ({
  components: {  }
})
</script>
<style src="./Home.css" scoped></style>