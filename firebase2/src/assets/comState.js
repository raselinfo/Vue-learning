import { reactive, toRefs, computed } from "vue";
export const comState=()=>{
    const state=reactive({
        email:"",
        password:"",
        confirmPassword:"",
        error:{},
        isDisabled:computed(()=>{
            let result=true
            for (let key in state.error){
                if(state.error[key]==null){
                   result=false 
                }else{                    
                   result= true
                }
            }
            return result
        })
    })
    
 

    return toRefs(state)
}