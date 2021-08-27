export const getInCompleteTodo = (state) => {
    return state.list.filter(item => {
        return item.status === "todo"
    })
}

export const completeTodo = (state) => {
    return state.list.filter(item => {
        return item.status === "complete"
    })
}