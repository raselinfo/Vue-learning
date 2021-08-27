import axios from "axios"
export const addTodo = ({ commit }, data) => {    
    axios.post(`http://localhost:3000/todoList`, data)
    .then(res=>{
        commit("ADD_TODO_LIST", res.data)
    })
}

export const getTodoList = ({ commit }) => {
    axios.get(`http://localhost:3000/todoList`)
        .then(res => {
            commit("GET_TODO_LIST", res.data)
        })
}

export const changeStatus = ({ commit }, data) => {
    console.log({ commit })
    axios.put(`http://localhost:3000/todoList/${data.id}`, data)
        .then(res => {
            commit("CHANGE_STATUS", res.data)
        })
}


export const updateTodo = async ({commit},payload)=>{
    const result = await axios.put(`http://localhost:3000/todoList/${payload.id}`, payload)
    commit("UPDATE_TODO", result.data)
}

export const deleteTodo=async ({commit},payload)=>{   
  await axios.delete(`http://localhost:3000/todoList/${payload.id}`)
    commit("DELETE_TODO", payload)
}