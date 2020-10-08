<template>
    <div class="header">
        <div style="display:block;">
            <router-link class="nav1" to="/About"><img v-bind:src="'../assets/logo.png'" alt=""></router-link>
        </div>
        <div style="display:block;">
            <router-link class="nav" to="/Home"><i class="fas fa-home"></i></router-link>
            <router-link class="nav" to="/About"><i class="far fa-user"></i></router-link>
            <router-link class="nav" to="/Skills"><i class="fas fa-cog"></i></router-link>
            <router-link class="nav" to="/Works"><i class="far fa-eye"></i></router-link>
            <router-link class="nav" to="/Contact"><i class="far fa-envelope"></i></router-link>
        </div>
        <div  style="display:block;">
            <a class="nav" href="https://www.linkedin.com/in/renaud-fradin-9166b3161/"><i class="fab fa-linkedin-in"></i></a>
            <a class="nav2" href="https://github.com/Renaudfradin"><i class="fab fa-github"></i></a>
        </div> 
    </div>

</template>
<script>
export default {
    name:'HeaderNavTop',
    data(){
        return{
            logo1:"./assets/logo.png",
        }
    }
}
</script>
<style src="./HeaderNavTop.css" scoped></style>