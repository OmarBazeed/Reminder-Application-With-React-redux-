import { ADD_REMINDER, ClEAR_ALL, REMOVE } from "../actionTypes"


export const add = (text, data) => {
    const action = {
        type: ADD_REMINDER,
        text,
        data,
    }
    return action
}

export const clear = () => {
    const action = {
        type: ClEAR_ALL,
    }
    return action
}

export const remove = (id) => {
    const action = {
        type: REMOVE,
        id,
    }
    return action
}