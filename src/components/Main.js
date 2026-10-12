import React, { Component } from 'react';

import Form from './Form';
import Tasks from './Tasks';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    const newTask = this.state.newTask.trim();

    if (newTask === '') return;
    if (tasks.indexOf(newTask) !== -1) return;

    if (index === -1) {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
      });
      return;
    }

    const newTasks = [...tasks];
    newTasks[index] = newTask;

    this.setState({
      tasks: newTasks,
      index: -1,
      newTask: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  removeTask = (e, index) => {
    e.stopPropagation();
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((_, i) => i !== index),
    });
  };

  editTask = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />
        <Tasks
          tasks={tasks}
          removeTask={this.removeTask}
          editTask={this.editTask}
        />
      </div>
    );
  }
}
