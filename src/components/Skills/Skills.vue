<script>
import { defineComponent } from 'vue'
import Job from '../Data/Job.json'
import Stack from '../Data/Stack.json'

export default defineComponent({
  setup() { },
  data(){
    return{
      Job:Job,
      Stack:Stack
    }
  }
})
</script>

<template>
  <div class="SkillsStackJob">
    <div class="exprerience">
      <h2 class="titleExprerience">Compétences & Parcours</h2>
      <p>Développeur passionné, je me spécialise dans le back-end et l’écosystème Laravel, tout en gardant un œil sur les dernières tendances du web.</p>
      <p>J’aime créer des solutions performantes et sur-mesure avec Laravel, React.js et Node.js, en alliant technique et créativité.</p>
      <p>Curieux d’en découvrir davantage ? Retrouvez mon parcours complet sur <a href="https://www.linkedin.com/in/Renaudfradin/">LinkedIn</a> ou explorez mes projets sur <a href="https://github.com/Renaudfradin">GitHub</a>.</p>
      <div class="stackWrap">
        <div v-for="(stack , index) in Stack.Stack" v-bind:key="index">
          <img :src="stack.imgStack" alt="" srcset="" class="imgStack">
          <p class="titleStack">{{stack.titleStack}}</p>
        </div>
      </div>
    </div>
    <div class="StackJob">
      <div class="jobWrapper">
        <div v-for="(job , index) in Job.Job" v-bind:key="index">
          <h5 class="tileJob">{{job.titleJob}}</h5>
          <p>{{job.entrepriseJob}}</p>
          <p>{{job.dateJob}}</p>
          <p>{{job.typeJob}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Skill.css" scoped> </style>