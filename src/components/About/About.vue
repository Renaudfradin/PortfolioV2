<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
      dateResult: null
    }
  }
})
</script>

<template>
  <div class="presentationCard">
    <h3 class="presentationtitle">Présentation</h3>
    <p>Développeur web passionné de 25 ans, je suis actuellement en CDI en tant que Full-Stack Developer.</p>
    <p>Diplômé d’un Mastère CTO & Tech Lead à l’école EEMI, j’ai également obtenu un Bachelor Développeur Web à HETIC, un BTS SIO SLAM, ainsi qu’un Titre professionnel Développeur Web & Web Mobile à l’AFPA.</p>
    <p>J’aime concevoir des solutions innovantes, apprendre en continu et relever de nouveaux défis techniques. Mon parcours m’a permis d’acquérir une solide expérience sur des projets variés, du back-end au front-end.</p>
    <p>En dehors du code, je me passionne pour le sport, l’histoire, les jeux vidéo et je m’investis activement pour la cause animale.</p>
    <a href="cv/cv_renaud.pdf" download="CV_Renaud.pdf" class="btnCV">Voir mon CV</a>
  </div>
</template>

<style src="./About.css" scoped> </style>
