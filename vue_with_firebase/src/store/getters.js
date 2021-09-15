export const getFullName=((state)=>{
    return state.userInfo.name
})
export const getAdminEmail=((state)=>{
    return state.userInfo.email==="rasel@gmail.com"
})
export const userEmail=((state)=>{
    return state.userInfo.email
})

export const getPhoto=((state)=>{
    return state.userInfo.photo
})