<template>
<div class="presentation">
  <div class="presentation2">
    <h2 class="skills"><br>Présentation<br></h2>
    <p class="metier">Je suis un étudiant de 21 ans.</p>
    <p class="metier">J'ai obtenu un BTS SIO (Service Informatique aux Organisations) SLAM (Solutions Logicielles et Applications Métiers) en juin 2020.</p>
    <p class="metier">J'ai obtenu un Titre professionnel Développeur web et web mobile à L'AFPA en juin 2019.</p>
    <p class="metier">J'ai obtenu mon baccalauréat STI2D (sciences & technologies de l'industrie et du développement durable) en juin 2018.</p>
    <p class="metier">Je suis intéressé par le développement front-end et back-end.</p>
    <p class="metier">Je suis fan des jeux vidéo et de sport (vélo, natation, musculation).</p>
    <p class="metier">Je milite aussi pour la cause animale.</p>
    <a download="cv.pdf" href="cv/nouveaucv.pdf" class="btn-contact">Voir mon cv</a>
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