<template>
<div class="presentation">
  <div class="presentation2">
    <h2 class="skills">Présentation</h2>
    <p class="metier">Je suis un étudiant de 22 ans.</p>
    <p class="metier">Je suis actuellement dans un Bachelor développeur web en 3eme année à Hetic.</p>
    <p class="metier">J'ai obtenu un BTS SIO (Service Informatique aux Organisations) SLAM (Solutions Logicielles et Applications Métiers) en juin 2020.</p>
    <p class="metier">J'ai obtenu un Titre professionnel Développeur web et web mobile à L'AFPA en juin 2019.</p>
    <p class="metier">J'ai obtenu mon baccalauréat STI2D (sciences & technologies de l'industrie et du développement durable) en juin 2018.</p>
    <p class="metier">Pendant mon temps libre je travail sur des projet perso, je fait du sport (c’est une passion et une motivation) , j'étudie aussi l’histoire et je joue aussi aux jeux vidéo (fps , rpg).</p>
    <!-- <p class="metier">Je suis fan des jeux vidéo et de sport (vélo, natation, musculation).</p> -->
    <p class="metier">Je milite aussi pour la cause animale.</p>
    <a download="cv.pdf" href="cv/cv.pdf" class="btn-contact">Voir mon cv</a>
  </div>
</div>
</template>
<script>
export default {
    name:'About',
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    },
}
</script>
<style src="./About.css" scoped></style>