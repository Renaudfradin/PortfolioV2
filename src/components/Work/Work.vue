<template>
  <div>
    <div v-for="(projet , index) in jsonData" v-bind:key="index"> 
      <div v-for="(projetss , index2) in projet" v-bind:key="index2">
        <div v-if="projetss.nomProjet == $route.params.name">
            <p style="margin-left: 200px;">nom : {{projetss.nomProjet}}</p>
            <p style="margin-left: 200px;">description : {{projetss.diescriptionProjet}}</p>
            <p style="margin-left: 200px;">quand : {{projetss.realisationProjet}}</p>
            <p style="margin-left: 200px;">img projet : {{projetss.imgProjet}}</p>
            <p style="margin-left: 200px;">code proejet :  {{projetss.urlCodeProjet}}</p>
            <p style="margin-left: 200px;">site proejet : {{projetss.urlSiteProjet}}</p>
            <li v-for="(stack , index3) in projetss.stackProjet" v-bind:key="index3">
              <p style="margin-left: 200px;">{{stack.stack1}}</p>
              <p style="margin-left: 200px;">{{stack.stack2}}</p>
              <p style="margin-left: 200px;">{{stack.stack3}}</p>
              <p style="margin-left: 200px;">{{stack.stack4}}</p>
              <p style="margin-left: 200px;">{{stack.stack5}}</p>
            </li>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import json from '../jsondata/data.json';
export default defineComponent({
  data(){
    return{
      jsonData:json
    }
  }
})
</script>

<style scoped>
</style>

