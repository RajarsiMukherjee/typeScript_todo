import React from "react";
import "./styles.css";
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>

}

const InputFeild = ({ todo, setTodo}: Props) => {
  return (
    <div>
       <form className="input">
        <input type="input" placeholder="Enter a task" className="inputBox" />
        <button className="button" type="submit">Go</button>
       </form>
    </div>
  )
}

export default InputFeild
