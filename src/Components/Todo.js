import React from 'react'
import styles from './Todo.module.css';
export default function Todo(props) {
    return (
        <React.Fragment>
        <div className={styles.card} style={{textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete}>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div >
           {props.todo.text} 
        </div>
        <button className={styles.cancel} onClick={props.onDelete}>X</button>
        </div>
        </div>
        </React.Fragment>
    )
}

