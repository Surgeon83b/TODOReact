import {TodoItem} from './TodoItem';
import './TodoList.css';

export function TodoList({list}) {
    return (
        <ol>
           {list.map((item,index) => <TodoItem index={index} todo={item} />)} 
        </ol>
    )
}