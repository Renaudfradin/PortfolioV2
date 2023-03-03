<script>
import NavBar from '@components/NavBar/NavBar.vue'
import { useMeta } from 'vue-meta'

export default {
  components: {
    NavBar,
  },
  setup(){
    useMeta({
      title: 'Portfolio',
      htmlAttrs: { lang: 'en', amp: true },
    })
  }
}
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <NavBar />
  <div class="app">
    <RouterView />
  </div>
</template>

<style>
html{
  background-color: #222222;
  height: 100vh;
  font-family: Secular One,sans-serif;
}
body{
  margin: 0%;
  padding: 0%;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: #1c181f;
}

::-webkit-scrollbar-thumb {
  background: #08e5c4; 
  border-radius: 10px;
}
</style>
