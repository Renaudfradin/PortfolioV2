<template>
<div class="map langstyle">
  <div class="lang" v-for="(lang,index) in tableCompetence" v-bind:key="index" >
    <img :src="lang.imgLang" alt="">
    <h5>{{lang.Lang}}</h5>
  </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  components:{ },
  data(){
    return{
      tableCompetence:[
        {imgLang:"imgskills/js.svg" ,Lang:"javascript"},
        {imgLang:"imgskills/vuejs.svg" ,Lang:"vue.js"},
        {imgLang:"imgskills/node.svg" ,Lang:"node.js"},
        {imgLang:"imgskills/symfony.svg" ,Lang:"symfony"},
        {imgLang:"imgskills/php.svg" ,Lang:"php"},
        {imgLang:"imgskills/wp.svg" ,Lang:"wordpress"},
      ]
    }
  }
})
</script>
<style src="./ImgSkills.css" scoped>

</style>
