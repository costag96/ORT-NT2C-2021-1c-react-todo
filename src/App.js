import React, { Component } from "react";
import Tarea from "./components/tarea2";
import "./styles.css"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      nombre: "Carlos",
      uncheckedCount:0
    };
  }

  agregarTarea() {
    const tarea = {
      titulo: prompt("Titulo"),
      checked: false
    };

    //this.state.tareas.push(tarea) // MAL
    //this.state.nombre ="Jose" // MAL
    this.setState({ tareas: [...this.state.tareas, tarea] });
  }

  checkTarea(index) {
    console.log("Checked:", index)
    const newTareas = [...this.state.tareas];
    const item = {...newTareas[index]};
    item.checked = !item.checked;
    newTareas[index] = item;
    this.setState({tareas:newTareas});
  }

  test_array_obj() {
    const array1 = [{'a':1},{'a':2},{'a':3}]
    const array2 = [...array1]

    array2[1].a='5'
    console.log(array1)
    console.log(array2)
  }
  

  render() {
    return (
      <div class="container center">
        <h1 class="center title">TODO App</h1>
        <div class="flow-right controls">
          <span>
            Item count: <span id="item-count">{this.state.tareas.length}</span>
          </span>
          <span>
            Unchecked count: <span id="unchecked-count">{this.state.tareas.filter(item=> !item.checked).length}</span>
          </span>
        </div>
        <button class="button center" onClick={() => this.agregarTarea()}>
          Agregar Tarea
        </button>
        <ul id="todo-list" class="todo-list">
          {this.state.tareas.map((tarea, index) => (
            <Tarea key={index} id={index} titulo={tarea.titulo} marcar={ () => this.checkTarea(index)} /> 
          ))}
        </ul>
      </div>
    );
  }
}
