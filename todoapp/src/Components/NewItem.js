import React, { useState, useEffect } from 'react';
import {TodoItem} from './TodoItem' 

export function NewItem () {
    const [item, setItem] = useState("");
    const [listOfTodos, setListOfTodos] = useState(["Вынести мусор","Купить молоко","Заехать на заправку"]);
    
    function SetList() {
       let newlist = listOfTodos;
       newlist.push(item);
       setListOfTodos(newlist);
    }  
    
    let TList = listOfTodos.map((item,index) => <TodoItem index={index} todo={item} />);
    return (
        <div>
            <input placeholder="Введите задачу" id="todo_item"
                onChange={(e) => setItem(e.target.value)}
                onKeyUp={(e) => e.which==13 ? SetList() : null}>           
            </input>

            <button class="add_button" onClick={SetList}>{item}</button>
            
            <ol>{TList}</ol>
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



