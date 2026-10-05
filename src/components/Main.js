import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa'

import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Comprar leite',
      'Comprar arroz',
      'Comprar batata',
      'Comprar tomate',
      'Comprar alface',
      'Comprar onion',
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>

        <form action='#' className='form'>
          <input
            onChange={this.handleChange} type='text'
            placeholder='Adicionar nova tarefa' value={newTask}
          />
          <button type='submit'>
            <FaPlus />
          </button>
        </form>

        <ul className='tasks'>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <div>
                <button className='remove-btn'><FaWindowClose /></button>
                <button className='edit-btn'><FaEdit /></button>
              </div>
              </li>
          ))}
        </ul>
      </div>
    );
  }
}
