<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <div class="presentation2">
                    <h1 class="skills"><br>Présentation<br></h1>
                    <p class="metier">Je suis un étudiant de 21 ans</p>
                    <p class="metier">J'ai obtenu un BTS SIO (Service Informatique aux Organisations) SLAM (Solutions Logicielles et Applications Métiers) en juin 2020</p>
                    <p class="metier">J'ai obtenu un Titre professionnel Développeur web et web mobile a L'AFPA en juin 2019</p>
                    <p class="metier">J'ai obtenu mon baccalauréat STI2D (sciences & technologies de l'industrie et du développement durable) en juin 2018</p>
                    <p class="metier">Je suis fan des jeux vidéo et de sport (vélo, natation, musculation)</p>
                    <p class="metier">Je milite aussi pour la cause animale</p>
                    <p class="metier">Je suis intéressé par le développement front-end et back-end</p>
                    <a class="btn-contact" href="https://github.com/Renaudfradin/PortfolioV2/raw/c2ba8ca93abf864b2aa0f230fab6e397121c43a4/src/components/About/cv.pdf" download="cv.pdf">Voir mon cv</a>
                </div>
            </div>
            <div class="map">
               <Cerf></Cerf>
            </div>
        </div>
    </div>
</template>
<script>
import Cerf from '../Cerf/Cerf.vue'
export default {
    name:'About',
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    },
    components: {
    Cerf,
    }
}
</script>
<style src="./About.css" scoped></style>