<template>
    <HeaderNavTop></HeaderNavTop>
    <router-view />
</template>

<script>
import HeaderNavTop from './components/HeaderNavTop/HeaderNavTop.vue'
export default {
  name: 'App',
  components: {
    HeaderNavTop,
  }
}
</script>

<style>
html{
  background-color: #222;
  margin: 0%;
  padding: 0%;
}
body{
  margin: 0%;
  padding: 0%;
}
#app{
  display: flex;
  background:#222;
}
@media screen and (max-width:770px){
  #app{
    display: block;
    background:#222;
  }
}
</style>
