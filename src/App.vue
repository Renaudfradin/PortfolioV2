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
:root{
  --primary-color: #08fdd8;
  --secondary-color: #fff;
  --margin-default: 0%;
  --padding-default: 0%;
  --hover-color-btn: #00fdd72e;
}

html{
  background-color: #222222;
  /* background-color: rgb(10, 25, 48); */
  height: 100vh;
  font-family: Secular One,sans-serif;
}

body{
  margin: var(--margin-default);
  padding: var(--padding-default);
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: #1c181f;
}

::-webkit-scrollbar-thumb {
  background: #08e5c4; 
  border-radius: 10px;
}
</style>
