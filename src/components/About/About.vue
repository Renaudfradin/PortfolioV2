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
    <p>Je suis un étudiant de 24 ans.</p>
    <p>Je suis actuellement en Mastère CTO & Tech Lead a l'école EEMI.</p>
    <p>J'ai obtenu un Bachelor développeur web à Hetic en septembre 2022.</p>
    <p>J'ai obtenu un BTS SIO (Service Informatique aux Organisations) SLAM (Solutions Logicielles et Applications Métiers) en juin 2020.</p>
    <p>J'ai obtenu un Titre professionnel Développeur web et web mobile à L'AFPA en juin 2019.</p>
    <p>J'ai obtenu mon baccalauréat STI2D (sciences & technologies de l'industrie et du développement durable) en juin 2018.</p>
    <p>Pendant mon temps libre je travaille sur des projet personelle , je fait du sport (c’est une passion et une motivation) , j'étudie aussi l’histoire et je joue aussi aux jeux vidéo.</p>
    <p>Je milite activement pour la cause animale.</p>
    <a href="cv/cv_renaud.pdf" download="CV_Renaud.pdf" class="btnCV">voir mon cv</a>
  </div>
</template>

<style src="./About.css" scoped> </style>
