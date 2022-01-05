import TodoItem from './TodoItem';
import './TodoList.css';

export function TodoList({list, delet}) {
  return (
    <ol>
      {list.map((item,index) => <TodoItem id={index} todo={item} delet={delet}/>)} 
    </ol>
  )
}
