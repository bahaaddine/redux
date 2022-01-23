import {DELETE,DONE,ADD} from './action-type'

export const deleteHandler = (ID) =>{
    return {
        type:DELETE,
        payload:ID
    }
}
export const doneHandler = (list) =>{
    return {
        type:DONE,
        payload:list
    }
}
export const addHandler = (list) =>{
    return{
        type:ADD,
        payload:list
    }
}