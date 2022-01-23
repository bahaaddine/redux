import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {useState} from "react"
import {addHandler} from "../Redux/action"

function Addtodolist() {

    const dispatch = useDispatch()
    const data =useSelector((state)=>state.todos)
    const[text,setText]=useState("")
    const textHnadler=(ele)=>{
        setText(ele.target.value)
    }
    const addedTextHandler=()=>{
        data.push({text,isDone:false,id:data.length+1})
        dispatch(addHandler(data))
    }
    

    return (
        <div>
            <input type="text" onChange={textHnadler} placeholder="what to do,what to do?" />
            <button onClick={addedTextHandler}>+</button>
        </div>
    )
}

export default Addtodolist

