<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <h1 class="skills"><br>Skills & Expérience<br></h1>
                <p class="metier">Mon domaine principal est le développement front-end.</p>
                <p class="metier">Les langages que j'utilise le plus souvent sont le HTML,CSS,JS,PHP.</p>
                <p class="metier">J'utilise aussi des framework comme VUE.js et des CMS comme WORDPRESS.</p>
                <p class="metier">Visitez mon profil <a href="https://www.linkedin.com/in/Renaudfradin/">Linkedin</a> pour plus de détails et mon <a href="https://github.com/Renaudfradin">Github</a> pour voir mes créations.</p>
            </div>
            <div class="map langstyle">
                <div class="lang" v-for="(lang,index) in tableCompetence" v-bind:key="index" >
                    <img :src="lang.imgLang" alt="">
                    <h5>{{lang.Lang}}</h5>
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
                {imgLang:"imgskills/html.svg" ,Lang:"html/css"},
                {imgLang:"imgskills/php.svg" ,Lang:"php"},
                {imgLang:"imgskills/js.svg" ,Lang:"javascript"},
                {imgLang:"imgskills/vuejs.svg" ,Lang:"vue.js"},
                {imgLang:"imgskills/wp.svg" ,Lang:"wordpress"},
                {imgLang:"imgskills/sass.svg" ,Lang:"sass"},
                
            ]
        }
    }
}
</script>
<style src="./Skills.css" scoped></style>
