<script>
import { defineComponent } from 'vue'
import emailjs from 'emailjs-com';
import { ref } from 'vue';

export default defineComponent({
  setup() {
    const form = ref(null);
    const inputFieldReset = ref(null);
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(this.emailServiceID, this.emailTemplateID, form.value, this.emailPublicKey)
        .then((result) => {
          console.log('SUCCESS!', result.text);
        }, (error) => {
          console.log('FAILED...', error.text);
        });
      } catch (error) {
        console.log(error);
      }
    }
  },
  data() {
    return {
      sujet: '',
      content: '',
      form_name: '',
      from_email: '',
      emailPublicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      emailPrivateKey: import.meta.env.VITE_EMAIL_PRIVATE_KEY,
      emailServiceID: import.meta.env.VITE_EMAIL_SERVICE_ID,
      emailTemplateID: import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
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
    <form ref="form" @submit.prevent="sendEmail" class="form">
      <input type="text" name="from_name" class="formInput">
      <input type="text" name="from_email" class="formInput">
      <input type="text" name="content" class="formInput">
      <input type="text" name="subject" class="formInput">
      <input type="button" value="envoyer message">
    </form>
  </div>
</template>

<style src="./Contact.css" scoped> </style>