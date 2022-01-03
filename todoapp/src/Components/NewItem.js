import React, { useState, useEffect } from 'react';
import {TodoList} from './TodoList';

export function NewItem () {
    const [item, setItem] = useState("");
    const [listOfTodos, setListOfTodos] = useState(readFromLS());
   // const [listOfTodos, setListOfTodos] = useState(["Вынести мусор","Купить молоко","Заехать на заправку"]);
    
    function readFromLS() {
        return (localStorage["list"]) ? JSON.parse(localStorage["list"]) : [];
    }

    function SetList() {
       let newlist = listOfTodos;
       if (item) {
            newlist.push(item);
            setListOfTodos(newlist);
            localStorage.setItem("list", JSON.stringify(newlist));
            localStorage.setItem("num_of_todos", newlist.length);
            setItem("");
            document.getElementById("todo_item").value = "";
            document.getElementById("todo_item").focus = true;
       }
    }  
    
    return (
        <div>  
            <input placeholder="Введите задачу" id="todo_item"
                onChange={(e) => setItem(e.target.value)}
                onKeyUp={(e) => e.which == 13 ? SetList() : null}>           
            </input>
            <button class="add_button" onClick={SetList}>Добавить</button>
            <TodoList list={listOfTodos}/>
        </div>
    )
}

/*function AddButton(props) {   
          
    return (
     <div>
      <button class="add_button" onClick={setListOfTodos(listOfTodos.push(props.tditem))}>{props.tditem}</button>
      
     </div>
  )
}
/*  function save() {
              let it = [];
              let numoftodos = JSON.parse(localStorage["num_of_todos"]);
              if (localStorage["list"]) {
                  it = JSON.parse(localStorage["list"]);
                  numoftodos = JSON.parse(localStorage["num_of_todos"]);
              }
              it.push(props.tditem);
              localStorage.setItem("list", JSON.stringify(it));
              localStorage.setItem("num_of_todos", ++numoftodos);  
          }
          return (
              <button class="add_button" onClick={props.tditem ? save : null}>{props.tditem}</button>
          )*/


