<template>
    <div class="home">
      <div class="row">
        <div v-for="(projet,index) in tableproj" v-bind:key="index" class="col" >   
          <div class="style_card">
            <img class="card_img" :src="projet.imgProjet" alt="">
            <div class="cardbody">
              <div class="text_info">
                <h5 class="text_info_name">{{projet.nomProjet}}</h5>
                <p class="text_info_description">{{projet.diescriptionProjet}}</p>
                <p class="text_info_btnprojet">{{projet.realisationProjet}}</p>
              </div>
              <div class="btn_parent">
                <a v-if="projet.urlSiteProjet != 'rien'" :href="projet.urlSiteProjet" class="btn_info" onclick="window.open(this.href); return false;">site</a>
                <a v-if="projet.urlCodeProjet != 'rien'" :href="projet.urlCodeProjet" class="btn_info" onclick="window.open(this.href); return false;">code</a>
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

            {nomProjet:"SAOARS-DB",diescriptionProjet:"Site regrouppent tout les personnage du jeux mobile Sword Art Online Alicization Rising Steel Le site marche avec l'api API-SAOARS",realisationProjet:"AVRIL 2021 - en cour ",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capturesao.PNG",urlCodeProjet:"https://github.com/Renaudfradin/SAOARS-DBV1",urlSiteProjet:"https://saoars-db.netlify.app"},
            {nomProjet:"API-SAOARS",diescriptionProjet:"API qui regroupe les personnages du jeux mobile Sword Art Online Alicization Rising Steel réalisées en NODE.JS/EXPRESS",realisationProjet:"JANVIER 2021 - en cour ",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/sao_ars_discord.jpg",urlCodeProjet:"https://github.com/Renaudfradin/API-SAOARS",urlSiteProjet:"https://api-saoars.herokuapp.com/"},
            {nomProjet:"NUMBER 10",diescriptionProjet:"Projet de cour réalisées en WORDPRESS",realisationProjet:"Mars 2021 - Mars 2021",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capturen10.PNG",urlCodeProjet:"rien",urlSiteProjet:"rien"},
            {nomProjet:"EIGA",diescriptionProjet:"Projet de cour utilisent l'api imdb réalisées en REACT",realisationProjet:"Novembre 2020 - Novembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureport.png",urlCodeProjet:"https://github.com/anthony-roux/Movie-Search-Engine_tp",urlSiteProjet:"https://eiga.netlify.app/"},
            {nomProjet:"PROTFOLIO V2",diescriptionProjet:"Portfolio qui regroupe mes compétences réalisées en VUE.JS",realisationProjet:"Octobre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureportv21.PNG",urlCodeProjet:"https://github.com/Renaudfradin/PortfolioV2",urlSiteProjet:"https://portfolio-renaud-fradin.netlify.app"},
            {nomProjet:"PROTFOLIO V1",diescriptionProjet:"Portfolio qui regroupe mes compétences réalisées en BULMA/JS",realisationProjet:"Décembre 2019 - Septembre 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Captureport.png",urlCodeProjet:"https://github.com/Renaudfradin/Portfolio",urlSiteProjet:"https://portfolio-renaud-fradinv1.netlify.app"},
            {nomProjet:"The Skateshop",diescriptionProjet:"Site vitrine de vente de skate réalisé en HTML/CSS/JS",realisationProjet:"Avril 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/TheSkateshop.png",urlCodeProjet:"https://github.com/Renaudfradin/The-Skateshop",urlSiteProjet:"https://renaudfradin.github.io/The-Skateshop/"},
            {nomProjet:"BOT DISCORD(MaXiMe)",diescriptionProjet:"BOT réalisé pour le logiciel Discord",realisationProjet:"Mai 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Capture.png",urlCodeProjet:"https://github.com/Renaudfradin/BOT-MAXIME-DISCORD",urlSiteProjet:"rien"},
            {nomProjet:"GSB-PHP",diescriptionProjet:"Application de gestion de frais réalisée en BULMA/PHP/SQL",realisationProjet:"Mars 2020 - Juin 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/Screenshot_2020-04-21IntranetduLaboratoireGalaxy-SwissBourdin.png",urlCodeProjet:"https://github.com/Renaudfradin/GSB-PHP",urlSiteProjet:"rien"},
            {nomProjet:"GSB-JAVA",diescriptionProjet:"Application de gestion de compte-rendu de visite réalisée en JAVA",realisationProjet:"Février 2020 - Mai 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/GSB-JAVA.png",urlCodeProjet:"https://github.com/Renaudfradin/GSB-JAVA",urlSiteProjet:"rien"},
            {nomProjet:"EDITCALC",diescriptionProjet:"Calculette pour enfant réalisée en JAVA/SQL",realisationProjet:"Novembre 2019 - Avril 2020",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/EDITCALC.jpg",urlCodeProjet:"https://github.com/Renaudfradin/EDITCAL-JAVA",urlSiteProjet:"rien"},
            {nomProjet:"Location-Cars-V1",diescriptionProjet:"Site de locations de voitures (ﬁctif) réalisé en HTML/CSS/JS/PHP/SQL",realisationProjet:"Avril 2019 - Juin 2019",imgProjet:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/locationscarsv12.png",urlCodeProjet:"https://github.com/Renaudfradin/location-car-v1/tree/master/location-cars",urlSiteProjet:"rien"},          
            
            ]
        }
    }
}
</script>
<style src="./Works.css" scoped></style>