import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tasks.css';

export default function Tasks({ tasks, removeTask, editTask }) {
  if (tasks.length === 0) {
    return <p className="tasks-empty">Nenhuma tarefa por aqui. Adicione a primeira!</p>;
  }

  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          <span>{task}</span>
          <div>
            <button
              type="button"
              onClick={(e) => removeTask(e, index)}
              className="remove-btn"
              aria-label={`Remover tarefa "${task}"`}
            >
              <FaWindowClose />
            </button>
            <button
              type="button"
              onClick={(e) => editTask(e, index)}
              className="edit-btn"
              aria-label={`Editar tarefa "${task}"`}
            >
              <FaEdit />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
