import React from 'react';
import classes from "./MyButton.module.css";

export default function MyButton({set, item}) {
  return (
    <button className={classes.myButton} onClick={set} disabled={!item}>Добавить</button>
	)
}
