const axios = require("axios")
export const getUserInfo = (({ commit }, payload) => {
    if (payload === null) {
        localStorage.removeItem("userInfo")
    } else {
        localStorage.setItem("userInfo", JSON.stringify(payload))
    }
    axios.post(`http://localhost:3000/userInfo`, payload)
        .then((res) => {
            commit("GET_USER_INFO", res.data)
        })
        .catch((error) => {
            console.log(error.message)
        })

})

export const updateUserInfo = (({ commit }, payload) => {
    axios.post(`http://localhost:3000/userInfo`, payload)
        .then((res) => {
            commit("GET_USER_INFO", res.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
})
