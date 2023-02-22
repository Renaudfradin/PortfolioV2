<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() { },
  data() {
    return {
      test: '',
      sujet: '',
      content: '',
      form_name: '',
      from_email: '',
    }
  }
})
</script>

<template>
  <div class="contactCard">
    <h1 class="contactTitle">Contactez moi</h1>
    <p>Je suis interessé par les grands ou petits projets : il n'y a que la création qui compte !</p>
    <p>Si vous avez des questions, n'hésitez pas à me contacter en utilisant mon adresse mail ou mon linkedin :</p>
    <p>renaudfradin@gmail.com</p>
    <a href="https://www.linkedin.com/in/Renaudfradin/" class="contactLink" target="_blank">Linkedin Renaud fradin</a>
  </div>
</template>

<style src="./Contact.css" scoped> </style>