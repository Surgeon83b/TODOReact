import './ListOfTodos.css'
import React, { useState, useEffect } from 'react';

export function ListOfTodos(props) {

   // const [count, setCount] = useState(Number(localStorage.getItem("num_of_todos")));

    function readFromLocal() {
        let it = JSON.parse(localStorage["list"]);
        if (it) 
            return  (
                it.map((num) => 
                    <div>
                        <li>{num}</li><button class="delBut">X</button>
                    </div>
                )
            );
    }
    
    return (
        <div>
            <p>Number of todos: <span id="noOfTodos">{props.count}</span></p>
            <ol id="td_items">{readFromLocal()}</ol>
        </div>
    );
}