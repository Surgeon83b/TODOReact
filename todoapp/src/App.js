import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {NewItem} from './Components/NewItem';
//import {ListOfTodos} from './Components/ListOfTodos';

/*let todoList = document.getElementById("td_items");
let noOfTodos = document.getElementById("noOfTodos");;

const refreshHTML = () => {
    todoList.innerHTML = "";
    let it = JSON.parse(localStorage["list"]);
    let item;
    localStorage.setItem("num_of_todos", it.length);
    if (it)
        for (let i = 0; i < it.length; i++) {
            item = it[i];
            let noftod = Number(localStorage.getItem("num_of_todos"));
            addToHTML(item, i);
    };
    noOfTodos.innerHTML = it.length;
  };

window.addEventListener("load", () => {
    refreshHTML();
});

// adding of HTML objects that display our TODO list
function addToHTML (item, id) {
    let list = document.createElement("li");
    let spanWithValue = document.createElement("span");
    let spanWithBtn = document.createElement("button");
  
    spanWithValue.innerText = item;
    spanWithBtn.innerText = "X";
    spanWithBtn.style.color = "red";

    spanWithBtn.addEventListener("click", () => {
        deleteTodo(id);
    });
    list.appendChild(spanWithValue);
    list.appendChild(spanWithBtn);
    todoList.appendChild(list);
}

// adding todo_item to the HTML-list and to localStorage
function addItem() {
    tdI = document.getElementById("todo_item");
    if (tdI.value) {
        let noftod = Number(localStorage.getItem("num_of_todos"));
        noftod++;
        addToHTML (tdI.value, noftod-1); 
        localStorage.setItem("num_of_todos", String(noftod));

        save(tdI.value);
        tdI.value = '';
        noOfTodos.innerText = noftod;
    }   
    tdI.focus();
}

// listener of delete buttons pushing
const deleteTodo = (index) => {
   // alert(index);
    let it = [];
        it = JSON.parse(localStorage["list"]);
        it.splice(index, 1);
        localStorage.setItem("list", JSON.stringify(it));
        refreshHTML();
  }

function keyPress(event) {
    if (event.which == 13) addItem();
}
*/

function App() {
 // const [count, setCount] = useState(Number(localStorage.getItem("num_of_todos")));
 // useEffect(() => setCount(Number(localStorage.getItem("num_of_todos"))));

 /* return (
    <div className="App">
      <h1>Hello, world! My TODOReact project</h1>
      <NewItem />
      <ListOfTodos count={count}/>
    </div>
  );*/
  
  return (
    <div className="App">
      <h1>Hello, world! My TODOReact project</h1>
      <NewItem />
    </div>
  );
}

export default App;
