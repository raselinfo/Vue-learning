import { reactive, toRefs} from "vue"

const stateData=()=>{
    const state = reactive({
        email: "",
        password: "",
        userInfo: null
    })
    
    return toRefs(state)
}

export default stateData