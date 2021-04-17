import React from 'react'
import '../styles.css'

export default (props)=> {
    return( 
    <div>
        <li class="todo-container"><span class="todo-text">{props.titulo} {props.id}</span>
            <input type="checkbox" onClick={() => props.marcar(props.id)} class='todo-checkbox'></input>
        </li>
    </div>
    )
}