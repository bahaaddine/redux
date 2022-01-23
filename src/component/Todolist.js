import React from 'react'
import {deleteHandler,doneHandler} from '../Redux/action'
import {useDispatch,useSelector} from 'react-redux'
function Todolist() {
    
    
    const dispatch = useDispatch()
    const data =useSelector((state)=>state.todos)
    const removeHandler = (id) =>{
        dispatch(deleteHandler(id));
    }
    const done = (id) =>{
        data.map((todo=> {
            if(todo.id == id){
                todo.isDone = !todo.isDone
            }
        }))
        
        dispatch(doneHandler(data));
    }
    return ( 
        <div className="todolist">
            {data?.map((element, i) => 
            <div  key={i}>
                {element.isDone? <span className="done">{element.text}</span> : <span >{element.text}</span> }
                
            <button onClick={()=> done(element.id) }>ADD</button>
            <br></br>
            <button onClick={()=> removeHandler(element.id)}>DELETE</button>
            </div> 
            )}
        </div>
    )
}

export default Todolist
