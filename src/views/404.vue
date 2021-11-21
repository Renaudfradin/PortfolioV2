<template>
  <div class="erreur">
      <Notfound />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Notfound from '../components/Notfound/Notfound.vue';
//import Cerf from '../components/Cerf/Cerf.vue'
export default defineComponent ({
  components:{ Notfound , /*Cerf*/ }
})
</script>
<style scoped>
/* .erreur{
  display: flex;
  width: 100%;
}
.cerf{
width: 50%;
} */
</style>