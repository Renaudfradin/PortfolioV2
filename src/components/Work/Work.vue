<script>
import { defineComponent } from 'vue'
import JsonData from "../Data/Projet.json";

export default defineComponent({
  data(){
    return{
      jsonWorks: JsonData
    }
  }
})
</script>

<template>
    <div v-for="(projects , index) in jsonWorks.project" v-bind:key="index" class="cardWork"> 
      <div v-if="projects.nameProject == $route.params.name" >
        <h3 class="titleWork">{{projects.nameProject}}</h3> 
        <img class="imgWork" :src="projects.imgProject1" >
        <p class="descriptionWork">{{projects.descriptionProject}}</p>
        <div class="stackWork">
          <p v-for="(stack , index2) in projects.stackProject" v-bind:key="index2" class="stack">
            {{stack.stack1}}
            {{stack.stack2}}
            {{stack.stack3}}
            {{stack.stack4}}
            {{stack.stack5}}
          </p>
        </div>
        <div class="Workbtn">
          <a v-if="projects.urlCodeProject != null" :href="projects.urlCodeProject" class="btnWork" target="_blank">code</a>
          <a v-if="projects.urlSiteProject != null" :href="projects.urlSiteProject" class="btnWork" target="_blank">site</a>
        </div>
      </div>
  </div>
</template>

<style src="./Work.css" scoped> </style>