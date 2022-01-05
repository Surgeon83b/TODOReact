import React, { useState } from 'react';
import {TodoList} from './TodoList';
import MyButton from './MyButton';

export function NewItem () {
    const [item, setItem] = useState("");
    const [listOfTodos, setListOfTodos] = useState([]);

    const setList = () => {
      const newlist = listOfTodos.slice();
      newlist.push(item);
      setListOfTodos(newlist);
      localStorage.setItem("list", JSON.stringify(newlist));
      setItem("");
    }

		const delItem = (id) => {
      const newlist = listOfTodos.slice();
      newlist.splice(id,1);
			setListOfTodos(newlist);
			localStorage.setItem("list", JSON.stringify(newlist));
		}
	
    return (
      <>  
        <input placeholder="Введите задачу" id="todo_item"
               onChange={(e) => setItem(e.target.value)}
               onKeyUp={(e) => (e.which == 13) && item && setList()}
               value = {item} >           
        </input>
        <MyButton set={setList} item={item} />
        <TodoList list={listOfTodos} delet={delItem} />
      </>
    )
}
