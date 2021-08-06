<template>
<div class="home">
  <div class="home2">
    <Contact />
  </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import Contact from '../components/Contact/Contact.vue';
export default defineComponent({
  components: { Contact }
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

@media screen and (max-width:910px) {
.home{
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  margin-left: 0%;
  margin-right: 0%;
}

.home2{
  display: block;
}
}
</style>
