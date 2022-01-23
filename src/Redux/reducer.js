import {DELETE,DONE,ADD } from './action-type'
 const initialState ={
     todos:[
        { text: "finish the checkpoint", id: 1, isDone: false },
        { text: "take a shower ", id: 2, isDone: false },
        { text: "read my book till i fall asleep ", id: 3, isDone: false },
      ]
 }

 export const todosReducer = (state=initialState, action) =>{
    switch (action.type) {
        case DELETE:
            return{
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case ADD:
            console.log(action.payload)
            return{
                ...state,
                todos:action.payload.map(todo=> todo) 
            }
            case DONE:
                return{
                    ...state,
                    todos:action.payload.map(todo=> todo) 
                }
        default: return state
    }

 }