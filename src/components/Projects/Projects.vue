<script>
import { defineComponent } from 'vue'
import JsonData from "../Data/Projet.json";

export default defineComponent({
  data(){
    return{
      jsonWorks: JsonData,
      searchwork: null,
      jsonResultWork: null,
      githubResult: null
    }
  },
  methods:{
    searchWorks(){
      let searchInput = this.searchwork.toLowerCase();
      let filterArray = this.jsonWorks.project.filter(item => item.nameProject.toLowerCase().includes(searchInput))
      this.jsonResultWork = filterArray;
      if (this.jsonResultWork.length == 0) {
        console.log("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
      }
    },
  },
  beforeUpdate(){
    this.searchWorks();
  }
})
</script>
<template>
  <div>
    <div class="worksWrapper" v-if="jsonResultWork == null ? works = jsonWorks.project : works = jsonResultWork">
      <div v-for="(projet, index) in works" v-bind:key="index" class="workCard">
        <router-link :to="{ name: 'Work', params: { name:projet.nameProject }}"><img :src="projet.imgProject" class="workImg" ></router-link>  
        <div class="workCards">
          <div class="workInformation">
            <h5 class="workTitle">{{projet.nameProject}}</h5>
            <p class="workDescription">{{projet.descriptionProject}}</p>
          </div>
          <div class="workInformation">
            <div class="workStack">
              <p v-for="(stack, index2) in projet.stackProject" v-bind:key="index2" class="stack">
                {{stack.stack1}}
                {{stack.stack2}}
                {{stack.stack3}}
                {{stack.stack4}}
                {{stack.stack5}}
              </p>
            </div>
            <p class="workTime">{{projet.timeProject}}</p>
            <div class="workBlock">
              <a v-if="projet.urlCodeProject != null" :href="projet.urlCodeProject" class="btnStyle" target="_blank">GitHub</a>
              <a v-if="projet.urlSiteProject != null" :href="projet.urlSiteProject" class="btnStyle" target="_blank">Demo</a>
            </div>
          </div>
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

<style src="./Projects.css" scoped> </style>