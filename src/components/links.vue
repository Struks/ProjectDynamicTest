<template>
    <div class="fill">
      <h1>Welcome to Your Vue.js App</h1>
      <h2>Essential Links</h2>
      <svgicon v-if="showLogo" name="websitesTab" height="50"></svgicon>
      <button @click="showLogo = !showLogo">
        toggle logo
      </button>
      <app-icon v-if="showMusic" name='logo' size='1' fill></app-icon>
      <button @click="showMusic = !showMusic">toggle music icon</button>
    </div>    
</template>



<script>
 import './icons'
export default {
  data(){
    return{
      showLogo: false,
    }
  },
  watch:{
    showLogo(value){
     if(value) import('./icons/websitesTab')
    }
  }  
}
</script>



<style scoped>

 svg path {
  fill:aquamarine;
}
</style>


