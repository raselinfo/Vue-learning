<template>
  <div>
      <h1>Todos</h1>
      <h2>Total Book : {{totalBook}} </h2>
      <input v-model="bookName" type="text"> <button @click="addBook(bookName)">Add</button>
    <ul>
        <li v-for="(book,index) in bookList" :key="index">{{book}} <button @click="removeBook(index)">Delete</button></li>
    </ul>

    <button @click="alertMe">Hi</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"

export default {
    data(){
        return{
            bookName:""
        }
    },
    computed:{
        ...mapState({
            bookList:"bookList",            
        }),
        ...mapGetters({
            totalBook:"totalBook"
        })
    },
    methods:{
        ...mapActions({
            removeBook:"removeBook",
           addBook:"addBook",
           alertMe:"alertMe"
        })
        
    }
    
}
</script>

<style>

</style>