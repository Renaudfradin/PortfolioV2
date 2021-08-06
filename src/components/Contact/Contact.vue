<template>
<div class="presentation">
  <div class="presentation2">
    <h1 class="skills">Contactez moi</h1>
    <p class="metier">Je suis interessé par les grands ou petits projets.</p>
    <p class="metier">Si vous avez des questions, n'hésitez pas à me contacter en utilisant mon adresse mail ou mon linkedin :</p>
    <p class="metier">renaudfradin@gmail.com</p>
    <p class="metier"><a href="https://www.linkedin.com/in/Renaudfradin/" onclick="window.open(this.href); return false;">Linkedin Renaud fradin</a></p>
  </div>
</div>
</template>
<script>
export default {
  name:'Contact',
  data(){
    return{
        infoform:false, 
    }
  },
}
</script>
<style src="./Contact.css" scoped> </style>