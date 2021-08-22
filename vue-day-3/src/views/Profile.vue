<template>
  Profile{{$route.params}}
</template>

<script>
import {useRoute} from "vue-router"
export default {
  created(){
    console.log(useRoute().params)
  }
}
</script>

<style>

</style>