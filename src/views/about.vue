<script>
import { defineComponent } from "vue";
import Wolf from '@components/Wolf/Wolf.vue'
import About from '@components/About/About.vue'

export default defineComponent({
  setup() { },
  components:{ Wolf ,About }
})
</script>

<template>
  <div class="presentations">
    <About />
    <Wolf />
  </div>
</template>

<style>
.presentations{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
}

@media screen and (max-width:768px){
  .presentations{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: auto;
    flex-direction: column;
  }
}
</style>
