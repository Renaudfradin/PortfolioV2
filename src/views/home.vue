<template>
  <div class="home">
    <div class="home2">
      <Home />
      <div class="cerf">
        <Cerf />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue' ;
import Home from '../components/Home/Home.vue';
import Cerf from '../components/Cerf/Cerf.vue';
export default defineComponent ({
  components: { Home, Cerf }
})
</script>
<style scoped> 
.home{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-left: 10%;
  margin-right: 0%;
  margin-top: 0%;
  margin-bottom: 0px;
}

.home2{
  display: flex;
  flex-direction: row;
}

.cerf{
  display: block;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
}

@media screen and (max-width:770px) {
.home{
  height: calc(100vh - 60px);
  justify-content: flex-start;
  color: white;
  margin-left: 0%;
  margin-right: 0%;
}

.home2{
  display: block;
}

.cerf{
  display: block;
  width: 100%;
  margin-top: 23px;
}

}
</style>