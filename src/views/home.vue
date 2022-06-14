<script>
import { defineComponent } from "vue";
import HomeComponents from '../components/Home/Home.vue';
import Wolf from '../components/Wolf/Wolf.vue';

export default defineComponent({
  components: { HomeComponents,Wolf },
  setup() { },
})
</script>

<template>
  <div class="parentHome">
    <HomeComponents />
    <Wolf />
  </div>
</template>

<style>
.parentHome{
  display: flex;
  justify-content: center;
}
</style>
