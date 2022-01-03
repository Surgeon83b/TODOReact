import './SingleItem.css';

export function SingleItem(props) {
    return (
        <div>
            <li id={props.id}>{props.text}</li><button class="SI" id={props.id}>X</button>
        </div>
    )
}