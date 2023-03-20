<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <h1 class="skills"><br>Skills & Expérience<br></h1>
                <p class="metier">Mon domaine principal et le développement front-end</p>
                <p class="metier">Les languages que j'utilise le plus souvent sont le HTML,CSS,JS,PHP </p>
                <p class="metier">J'utilise aussi des framework comme Bootstrap, Bulma (html/css), VUE.js et des CMS comme WORDPRESS SHOPIFY</p>
                <p class="metier">Visitez mon profil <a href="https://www.linkedin.com/in/Renaudfradin/">Linkedin</a> pour plus de détails et mon <a href="https://github.com/Renaudfradin">Github</a> pour voir mes créations</p>
            </div>
            <div class="map langstyle"> 
                <div>
                    <div class="lang" v-for="(lang,index) in tableCompetence" v-bind:key="index" >
                        <img :src="lang.imgLang" alt="">
                        <h5>{{lang.Lang}}</h5>
                        <p>{{lang.tempLang}}</p>
                    </div>
                </div>
                <div class="lang2">
                    <div class="lang" v-for="(lang1,index1) in tableCompetence1" v-bind:key="index1" >
                        <img :src="lang1.imgLang" alt="">
                        <h5>{{lang1.Lang}}</h5>
                        <p>{{lang1.tempLang}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Skills',
    data(){
        return{
            tableCompetence:[
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/b0e345f931e122b4c2ec504c2543a00da9c4b697/src/assets/html.svg" ,Lang:"html/css",tempLang:"2 ans"},
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/boot2.png" ,Lang:"bootstrap",tempLang:"1 ans"},
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/b0e345f931e122b4c2ec504c2543a00da9c4b697/src/assets/php.svg" ,Lang:"php",tempLang:"2 ans"},
            ],
            tableCompetence1:[
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/b0e345f931e122b4c2ec504c2543a00da9c4b697/src/assets/js.svg" ,Lang:"javascript",tempLang:"7 mois"},
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/master/src/assets/favicon.png" ,Lang:"vue.js",tempLang:"5 mois"},
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/b0e345f931e122b4c2ec504c2543a00da9c4b697/src/assets/sass.svg" ,Lang:"sass",tempLang:"1 mois"},
                {imgLang:"https://raw.githubusercontent.com/Renaudfradin/PortfolioV2/b0e345f931e122b4c2ec504c2543a00da9c4b697/src/assets/wp.svg" ,Lang:"wordpress",tempLang:"1 ans"},
            ]
        }
    }
}
</script>
<style src="./Skills.css" scoped> </style>