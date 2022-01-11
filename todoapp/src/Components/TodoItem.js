import './TodoList.css';
const TodoItem = ({id, todo, deleteItem}) => {
  return (
    <li>{todo}<button id={id} data-tooltip="Удалить?" onClick={() => deleteItem(id)} >X</button></li>
  )
}

export default TodoItem;
