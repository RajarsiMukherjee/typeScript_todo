import React, { useState } from "react";
import "./styles.css";
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>

}

const InputFeild: React.FC<Props> = ({ todo, setTodo}) => {
   
  return (
    <div>
       <form className="input">
        <input type="input"
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        } placeholder="Enter a task" className="inputBox" />
        <button className="button" type="submit">Go</button>
       </form>
    </div>
  )
}

export default InputFeild
