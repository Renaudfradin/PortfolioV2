<script>
import { defineComponent } from 'vue'
// import emailjs from '@emailjs/browser';

export default defineComponent({
  data() {
    return {
      sujet: null,
      content: null,
      form_name: null,
      from_email: null,
      emailPublicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      emailPrivateKey: import.meta.env.VITE_EMAIL_PRIVATE_KEY,
      emailServiceID: import.meta.env.VITE_EMAIL_SERVICE_ID,
      emailTemplateID: import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
    }
  },
  methods:{
    // sendEmail(e) {
    //   console.log(e);
    //   try {
    //     emailjs.send('service_3gagdhh', 'template_bjr6xev', e.target,'8ai34btHdzJlxV8YL', {
    //       subject: "subject vuye",
    //       content: "content vuye",
    //       from_name: "test1 vuye",
    //       from_email: "renaudddddddfradin@gmail.com vuye",
    //     })
    //     .then((response) => {
    //       console.log('succes', response.status, response);
    //     })
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },

})
</script>

<template>
  <div class="contactCard">
    <h1 class="contactTitle">Contactez moi</h1>
    <p>Je suis interessé par les grands ou petits projets : il n'y a que la création qui compte !</p>
    <p>Si vous avez des questions, n'hésitez pas à me contacter en utilisant mon adresse mail : renaudfradin@gmail.com </p>
    <p>ou mon linkedin : <a href="https://www.linkedin.com/in/Renaudfradin/" class="contactLink" target="_blank">Linkedin Renaud fradin</a></p>
    <!-- <form class="form" @submit.prevent="sendEmail">
      <input type="text" name="from_name" class="formInput" v-model="form_name">
      <input type="text" name="from_email" class="formInput" v-model="from_email">
      <input type="text" name="content" class="formInput" v-model="content">
      <input type="text" name="subject" class="formInput" v-model="sujet">
      <input type="button" value="Envoyer le message">
    </form> -->
  </div>
</template>

<style src="./Contact.css" scoped> </style>