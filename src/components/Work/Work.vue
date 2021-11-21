<template>
<div class="info_projet">
  <div v-for="(projet , index) in jsonData" v-bind:key="index"> 
    <div v-for="(projetss , index2) in projet" v-bind:key="index2">
      <div v-if="projetss.nomProjet == $route.params.name" >
        <h3 class="titlte_project">{{projetss.nomProjet}}</h3>
        <img class="card_img" :src="projetss.imgProjet1" >
        <div class="description_projet">
          <p class="description_projet_text">{{projetss.diescriptionProjet}}</p>
          <p>{{projetss.realisationProjet}}</p>
          <div class="list">
            <li v-for="(stack , index3) in projetss.stackProjet" v-bind:key="index3" class="list_stack">
              <ul>{{stack.stack1}}</ul>
              <ul>{{stack.stack2}}</ul>
              <ul>{{stack.stack3}}</ul>
              <ul>{{stack.stack4}}</ul>
              <ul>{{stack.stack5}}</ul>
            </li>
          </div>
        </div>
        <div class="btn_parent_info">
          <a v-if="projetss.urlSiteProjet != 'rien'" :href="projetss.urlSiteProjet" class="btn_info" target="_blank">site</a>
          <a v-if="projetss.urlCodeProjet != 'rien'" :href="projetss.urlCodeProjet" class="btn_info" target="_blank">code</a>
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

<style src="./Work.css" scoped></style>

