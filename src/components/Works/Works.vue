<script>
import { defineComponent } from 'vue'
import JsonData from "../JsonData/DataProjet.json";

export default defineComponent({
  data(){
  return{
    jsonWorks: JsonData,
    searchwork: null,
    jsonResultWork: null,
  }
  },
  methods:{
    searchWorks(){
      let searchInput = this.searchwork.toLowerCase();
      let filterArray = this.jsonWorks.projet.filter(item => item.nomProjet.toLowerCase().includes(searchInput))
      this.jsonResultWork = filterArray;
      if (this.jsonResultWork.length == 0) {
        console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
      }
    }
  },
  beforeUpdate(){
    this.searchWorks();
  }
})
</script>
<template>
  <div>
    <div class="searchwork">
      <input type="text" v-model="searchwork" class="inputSearchwork" placeholder="recherche un projet">
    </div>
    <div class="worksWrapper" v-if="jsonResultWork == null ? works = jsonWorks.projet : works = jsonResultWork">
      <div v-for="(projet, index) in works" v-bind:key="index" class="workCard">
        <img :src="projet.imgProjet" class="workImg">
        <h5 class="workTitle">{{projet.nomProjet}}</h5>
        <p class="workDescription">{{projet.diescriptionProjet}}</p>
        <div class="workStack">
          <p v-for="(stack, index2) in projet.stackProjet" v-bind:key="index2" class="stack">
            {{stack.stack1}}
            {{stack.stack2}}
            {{stack.stack3}}
            {{stack.stack4}}
            {{stack.stack5}}
          </p>
        </div>
        <p class="workTime">{{projet.realisationProjet}}</p>
        <div class="workBtn">
          <a v-if="projet.urlCodeProjet != null" :href="projet.urlCodeProjet" class="btnStyle" target="_blank">code</a>
          <a v-if="projet.urlSiteProjet != null" :href="projet.urlSiteProjet" class="btnStyle" target="_blank">url</a>
        </div>
      </div>
      <div v-if="jsonResultWork != null && jsonResultWork.length == 0" class="nullResult">
        <p>Aucun résultat pour "{{searchwork}}"</p>
        <p>Essayez de chercher autre chose ou Vérifiez l’orthographe du projet recherché. </p>
        <img src="@/assets/pouletoo.png" alt="">
      </div>
    </div>
  </div>
</template>

<style src="./Works.css" scoped> </style>