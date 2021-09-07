const axios=require("axios")
const baseUrl =`http://localhost:3000`
export const getUserDetails = (({ commit })=>{
    const userDetails = JSON.parse(localStorage.getItem("userDetails"))
    axios.put(`${baseUrl}/userDetails`, userDetails)
    .then(res=>{
        commit("GET_USER_DETAILS",res.data)
    })
})