import { reactive, toRefs  } from "vue";

export const comState = () => {
    const state = reactive({
        email: "",
        password: "",
        confirmPass: "",
        errors: {},
        isError:true
    })


    return toRefs(state)
}

