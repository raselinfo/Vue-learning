<template>
  <form @submit.prevent="add">
    <input type="text" v-model="text.text">
   <button>Add</button>
  </form>
</template>

<script>
import firebase from "firebase"
import toster from "toster"
export default {
  data(){
    return{
      text:{
        text:""
      }
    }
  },
  methods:{
    add(){

    }
  }
}
</script>

<style>

</style>