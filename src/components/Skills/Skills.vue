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
      <h2 class="titleExprerience">Skills & Expérience</h2>
      <p>Je suis intéressé par le développement back-end et l'environnement de Laravel.</p>
      <p>J'utilise le plus souvent les framework Laravel, React.js et Node.js.</p>
      <p>Visitez mon profil <a href="https://www.linkedin.com/in/Renaudfradin/">Linkedin</a> pour plus de détails et mon <a href="https://github.com/Renaudfradin">Github</a> pour voir mes projets.</p>
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
          <p class="descriptionJob">{{job.descriptionJob}}</p>
          <p>{{job.typeJob}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Skill.css" scoped> </style>