export const ADD_TODO_LIST = (state, data) => {

    state.list.push(data)
}

export const GET_TODO_LIST = (state, data) => {
    state.list = data
}

export const CHANGE_STATUS = (state, data) => {
    const currentIndex = state.list.findIndex(item => {
        return item.id === data.id
    })

    state.list[currentIndex] = data
}

export const UPDATE_TODO = (state, payload) => {
    state.list[
        state.list.findIndex(item => {
            return item.id === payload.id
        })
    ] = payload
}

export const DELETE_TODO = (state, payload) => {
    state.list = state.list.filter(item => {
        return item.id !== payload.id
    })
}