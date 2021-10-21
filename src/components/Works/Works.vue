<template>
<div class="home">
  <div v-for="(projet , index) in jsonData" v-bind:key="index" class="row">
    <div v-for="(projetss , index2) in projet" v-bind:key="index2" class="col" >  
      <div class="style_card">
        <router-link :to="{ name: 'Work' , params: { name:projetss.nomProjet }}"><img class="card_img" :src="projetss.imgProjet" alt=""></router-link>
        <div class="cardbody">
          <div class="text_info">
            <h5 class="text_info_name">{{projetss.nomProjet}}</h5>
            <p class="text_info_description">{{projetss.diescriptionProjet}}</p>
            <div class="stack_info">
              <p v-for="(stack , index3) in projetss.stackProjet" v-bind:key="index3" class="stack_style" >
                {{stack.stack1}}  {{stack.stack2}} {{stack.stack3}} {{stack.stack4}} {{stack.stack5}}
              </p>
            </div>
              
            <p class="text_info_btnprojet">{{projetss.realisationProjet}}</p>
          </div>
          <div class="btn_parent">
            <a v-if="projetss.urlSiteProjet != 'rien'" :href="projetss.urlSiteProjet" class="btn_info" target="_blank">site</a>
            <a v-if="projetss.urlCodeProjet != 'rien'" :href="projetss.urlCodeProjet" class="btn_info" target="_blank">code</a>
          </div>
        </div>
      </div>
    </div> 
  </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import json from '../jsondata/data.json';
export default defineComponent({
  data(){
    return{
      jsonData:json
    }
  }
})
</script>
<style src="./Works.css" scoped></style>