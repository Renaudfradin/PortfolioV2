<template>
    <div class="header">
        <div>
            <router-link class="nav1" to="/"><img class="nav3" style="width:100%" src="../../assets/logo.png" alt=""></router-link>
        </div>
        <div>
            <router-link class="nav" to="/"><i class="fas fa-home"></i></router-link>
            <router-link class="nav" to="/About"><i class="far fa-user"></i></router-link>
            <router-link class="nav" to="/Skills"><i class="fas fa-cog"></i></router-link>
            <router-link class="nav" to="/Works"><i class="far fa-eye"></i></router-link>
            <router-link class="nav" to="/Contact"><i class="far fa-envelope"></i></router-link>
        </div>
        <div>
            <a class="nav" :href="urlLink" onclick="window.open(this.href); return false;"><i class="fab fa-linkedin-in"></i></a>
            <a class="nav" :href="urlGit" onclick="window.open(this.href); return false;"><i class="fab fa-github"></i></a>
        </div> 
    </div>

</template>
<script>
export default {
    name:'HeaderNavTop',
    data(){
        return{
            logo1:"./assets/logo.png",
            urlLink:"https://www.linkedin.com/in/Renaudfradin/",
            urlGit:"https://github.com/Renaudfradin"
        }
    }
}
</script>
<style src="./HeaderNavTop.css" scoped></style>