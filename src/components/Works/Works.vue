<template>
    <div class="home">
      <div class="row">
        <div v-for="(projet,index) in tableproj" v-bind:key="index" class="col" >
          <div class="style-card1">
            <div class="style-card">
              <img class="card-img-top img-projet" :src="projet.imgProjet" alt="">
              <div class="cardbody">
                <div class="text-info">
                  <h5 class="card-title">{{projet.nomProjet}}</h5>
                  <p class="card-text">{{projet.diescriptionProjet}}</p>
                  <p class="card-text">{{projet.realisationProjet}}</p>
                </div>
                <div class="btn-parent">
                  <a :href="projet.urlSiteProjet" class="btn btn-primary btn-info">site</a>
                  <a :href="projet.urlCodeProjet" class="btn btn-primary btn-info">code</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
</template>
<script>
export default {
    name:'Works',
    data(){
        return{
          tableproj:[
            {nomProjet:"PROTFOLIO V1",diescriptionProjet:"Portfolio qui regroupe mes compétences réalisées en BULMA/JS",realisationProjet:"Décembre 2019 - Septembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureport.png",urlCodeProjet:"https://github.com/Renaudfradin/Portfolio",urlSiteProjet:"https://portfolio-renaud-fradin.yj.fr/index.html"},
            {nomProjet:"PROTFOLIO V2",diescriptionProjet:"Portfolio qui regroupe mes compétences réalisées en HTML/CSS BOOTSTRAP et VUE.JS",realisationProjet:"Octobre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureportv2.png",urlCodeProjet:"https://github.com/Renaudfradin/PortfolioV2",urlSiteProjet:"https://github.com/Renaudfradin/PortfolioV2"},
            {nomProjet:"Applications-Météo",diescriptionProjet:"Applications-météo réalisées avec BOOTSTRAP et VUE.js et l'API OpenWeather",realisationProjet:"Septembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureappvue.png",urlCodeProjet:"https://github.com/Renaudfradin/app-meteo",urlSiteProjet:"https://github.com/Renaudfradin/app-meteo"},
            {nomProjet:"Applications-Météo",diescriptionProjet:"Applications-météo réalisées avec HTML/CSS/JS et l'API prevision-meteo.ch",realisationProjet:"Septembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capturemeteo.png",urlCodeProjet:"https://github.com/Renaudfradin/aplie-meteo",urlSiteProjet:"https://renaudfradin.github.io/aplie-meteo/"},
            {nomProjet:"TODO-LIST",diescriptionProjet:"TODO-LIST réalisée en HTML/CSS/JS",realisationProjet:"Septembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capturetodo.png",urlCodeProjet:"https://github.com/Renaudfradin/TODO-LIST",urlSiteProjet:"https://renaudfradin.github.io/TODO-LIST/"},
            {nomProjet:"The Skateshop",diescriptionProjet:"Site vitrine de vente de skate réalisé en HTML/CSS/JS",realisationProjet:"Avril 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/TheSkateshop.png",urlCodeProjet:"https://github.com/Renaudfradin/The-Skateshop",urlSiteProjet:"hhttps://renaudfradin.github.io/The-Skateshop/"},
            {nomProjet:"BOT DISCORD(MaXiMe)",diescriptionProjet:"BOT réalisé pour le logiciel Discord",realisationProjet:"Mai 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capture.png",urlCodeProjet:"https://github.com/Renaudfradin/BOT-MAXIME-DISCORD",urlSiteProjet:"https://github.com/Renaudfradin/BOT-MAXIME-DISCORD"},
            {nomProjet:"GSB-PHP",diescriptionProjet:"Application de gestion de frais réalisée en BULMA/PHP/SQL",realisationProjet:"Mars 2020 - Juin 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Screenshot_2020-04-21IntranetduLaboratoireGalaxy-SwissBourdin.png",urlCodeProjet:"https://github.com/Renaudfradin/GSB-PHP",urlSiteProjet:"https://github.com/Renaudfradin/GSB-PHP"},
            {nomProjet:"GSB-JAVA",diescriptionProjet:"Application de gestion de compte-rendu de visite réalisée en JAVA",realisationProjet:"Février 2020 - Mai 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/GSB-JAVA.png",urlCodeProjet:"https://github.com/Renaudfradin/GSB-JAVA",urlSiteProjet:"https://github.com/Renaudfradin/GSB-JAVA"},
            {nomProjet:"EDITCALC",diescriptionProjet:"Calculette pour enfant réalisée en JAVA/SQL",realisationProjet:"Novembre 2019 - Avril 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/EDITCALC.jpg",urlCodeProjet:"https://github.com/Renaudfradin/EDITCAL-JAVA",urlSiteProjet:"https://github.com/Renaudfradin/EDITCAL-JAVA"},
            {nomProjet:"Location-Cars-V1",diescriptionProjet:"Site de locations de voitures (ﬁctif) réalisé en HTML/CSS/JS/PHP/SQL",realisationProjet:"Avril 2019 - Juin 2019",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/locationscarsv12.png",urlCodeProjet:"https://github.com/Renaudfradin/location-car-v1/tree/master/location-cars",urlSiteProjet:"https://github.com/Renaudfradin/location-car-v1/tree/master/location-cars"},
            {nomProjet:"Location-Cars-V2",diescriptionProjet:"Front du nouveau Site de locations de voitures (ﬁctif) réalisé en BULMA/JS",realisationProjet:"Février 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/locationscarsv12.png",urlCodeProjet:"https://github.com/Renaudfradin/location-cars-V2",urlSiteProjet:"https://renaudfradin.github.io/location-cars-V2/"},
          ]
        }
    }
}
</script>
<style src="./Works.css" scoped></style>