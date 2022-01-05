import './TodoList.css';
const TodoItem = ({todo, id, delet}) => {
   return (
        <li>{todo}<button id={id} data-tooltip="Удалить?" onClick={() => delet(id)} >X</button></li>
    )
}

export default TodoItem;
