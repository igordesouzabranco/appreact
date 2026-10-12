import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Adicionar nova tarefa"
        aria-label="Adicionar nova tarefa"
      />
      <button type="submit" aria-label="Adicionar tarefa">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
