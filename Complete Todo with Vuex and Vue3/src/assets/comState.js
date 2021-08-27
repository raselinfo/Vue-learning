import { reactive, toRefs, computed } from "vue"
import store from "../store"
export const comState = () => {
    const data = reactive({
        toDoName: "",
        list : computed(() => {
            return store.state.list;
        }),
        IncompleteTodo : computed(() => {
            return store.getters.getInCompleteTodo;
        }),
        completeTodo : computed(() => {
            return store.getters.completeTodo;
        }),
        isUpdate:false,
        currentUpdateItem:null
    })     

    return toRefs(data)
}

