import { reactive, toRefs } from "vue"

export default ()=>{
    const state = reactive({
        name: "",
        email: "",
        password: "",
        password2: ""
    })


    return toRefs(state)
}