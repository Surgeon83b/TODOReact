import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import MyButton from './MyButton';
import '../App.css';
import { deleteItem, completeItem } from '../utils/listsModify';
import { MySelect } from './MySelect';
import { setLists } from '../utils/listsModify';

export function Todo() {
  const [item, setItem] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [shown, setShown] = useState("active");

  function handleChange(event) {
    setShown(event.target.value);
  }

  const delItem = (id) => {
    deleteItem(id, shown, activeTodos, setActiveTodos, deletedTodos, setDeletedTodos, completedTodos, setCompletedTodos, setListOfTodos)
  }

  const complItem = (id) => {
    completeItem(id, shown, activeTodos, setActiveTodos, deletedTodos, setDeletedTodos, completedTodos, setCompletedTodos, setListOfTodos)
  }

  const setList = () => {
    const newlist = activeTodos.slice();
    newlist.push(item);
    setListOfTodos(newlist);
    setActiveTodos(newlist);
    localStorage.setItem("active", JSON.stringify(newlist));
    setItem("");
  }

  useEffect(() => {
    switch (shown) {
      case "active": setListOfTodos(activeTodos);
        break;
      case "deleted": setListOfTodos(deletedTodos);
        break;
      default: setListOfTodos(completedTodos);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);

  useEffect(() => {
    setLists(setListOfTodos, setActiveTodos, setDeletedTodos, setCompletedTodos);
  }, [])

  return (
    <>
      <section className='main'>
        <input placeholder="Введите задачу" id="todo_item"
          onChange={(e) => setItem(e.target.value)}
          onKeyUp={(e) => (e.which === 13) && item && setList()}
          value={item}
          // eslint-disable-next-line eqeqeq
          disabled={shown == 'completed' || shown == 'deleted'}>
        </input>
        <MyButton set={setList} item={item} />
        <MySelect shown={shown} handleChange={handleChange} />
      </section>
      <TodoList list={listOfTodos} deleteItem={delItem} completeItem={complItem} shown={shown} />
    </>
  )
}
