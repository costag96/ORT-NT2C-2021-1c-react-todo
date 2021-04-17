import React, {Component} from 'react'
import '../styles.css'

export default class Tarea extends Component {
    render() {
      return (
        <div>
            <li class="todo-container"><span class="todo-text">{this.props.titulo}</span>
                <input  type="checkbox" onClick={this.props.marcar} class='todo-checkbox'></input>
            </li>
        </div>
      );
    }
  }

