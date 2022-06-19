import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
 


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todo, setTodo] = useState(initialState)
  console.log(todo)
  return (
    <div className="App">
        <span className='heading'>Todo App</span>
       <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
