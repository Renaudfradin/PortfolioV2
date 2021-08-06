<template>
<div class="home">
  <div class="home2">
    <Skills />
    <ImgSkills />
  </div>
</div>
</template>
<script>
import { defineComponent } from 'vue'
import Skills from '../components/Skills/Skills.vue';
import ImgSkills from '../components/Imgskills/ImgSkills.vue';
export default defineComponent({
  components:{ Skills, ImgSkills}
})
</script>

<style scoped>
.home{
  width: 100%;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-left: 10%;
  margin-right: 0%;
}

.home2{
  display: flex;
}

@media screen and (max-width:770px) {
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
