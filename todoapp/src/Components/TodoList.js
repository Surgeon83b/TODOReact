import TodoItem from './TodoItem';
import './TodoList.css';

export function TodoList({list, deleteItem}) {
  return (
    <ol>
      {list.map((item,index) => <TodoItem key={index} id={index} todo={item} deleteItem={deleteItem}/>)} 
    </ol>
  )
}
