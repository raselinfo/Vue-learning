<template>
App
   
        <lottie :options="defaultOptions" :height="400" :width="400"/>      
  
</template>

<script>
  import Lottie from 'vue-lottie';
  // import * as animationData from './blood.json';

  export default {
    name: 'app',
    components: {
      'lottie': Lottie
    },
    data() {
      return {
        defaultOptions: {animationData: `https://assets6.lottiefiles.com/packages/lf20_hjnzpe2w.json`},
        animationSpeed: 1
      }
    },

  }
</script>

