import React, {useState} from 'react';
import './todo.css';
import { TextField,Button } from '@mui/material';



 function Todo () {

    let [todoInput,settodoInput]=useState("");

    let [todolist,setTodolist]=useState([
        "take medicenes properly"
    ]);

    
    function addNewTodo(){
        if(todoInput===""){
            alert("add messages")
        }
        else{
           let newTodo=[
                ...todolist ,todoInput
            ]
            setTodolist(newTodo);
            settodoInput("")
        }
    }

    function deleteTodo(indexValue){
       let updatedTodos= todolist.filter((todo,index)=>{
            return index!==indexValue
        })
        setTodolist(updatedTodos)
    }

    return (
    <div className='todo'>
      <div className='container'>
        
      <ul className='list-group mt-3'>
        
       {
        todolist.map((u,index)=>{
          return(
            <li className='list-group-item' key={index}>
          <p>{u}</p>
          <button onClick={()=>{deleteTodo(index)}}>❌</button>
          </li>
          )
        })
       }
      </ul>
      <div className='input-group'>
        <TextField id="standard-basic" label="Add messages" variant="standard" value={todoInput} onChange={(e)=>{
            let task=e.target.value;
            settodoInput(task)
        }} />
        <Button onClick={()=>{addNewTodo()}}>ADD</Button>
      </div>
    </div>
    </div>  
      )
 }

export default Todo
