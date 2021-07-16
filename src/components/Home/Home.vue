<template>
    <div class="home">
        <div class="home2">
            <div class="presentation">
                <h1 class="skills"><br>Bonjour<br>Je suis Renaud<br>Développeur Web<span class="poin">.</span></h1>
                <p class="metier">Développeur front et back</p>
                <router-link to="/Contact" class="btn-contact">Contactez - moi !</router-link>
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
    name:'Home',
    data(){
        return{

        }
    },
    components:{
        Cerf,
    }
}
</script>
<style src="./Home.css" scoped></style>