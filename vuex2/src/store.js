import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        bookList:["Book 1","Book 2","Book 3"]      
    },
    getters:{
        totalBook(state){
          return  state.bookList.length
        }
    },
    mutations:{
        ADD_BOOK(state,data){
            state.bookList.push(data)
        },
        REMOVE_BOOK(state,index){
            state.bookList.splice(index,1)
        }
    },
    actions:{
        addBook({commit},data){
            commit("ADD_BOOK",data)
        },
        removeBook({commit},index){
            commit("REMOVE_BOOK",index)
        },
        alertMe(){
            alert("Hi I Am From Action")
        }
    }
})




export default store

