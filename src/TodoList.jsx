// src/TodoList.js
import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const adicionarTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleCompleto = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removerTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {/* Checkbox para marcar/desmarcar a tarefa */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleto(todo.id)}
            />
            {/* Texto da tarefa */}
            <span>{todo.text}</span>
            {/* Botão para remover a tarefa */}
            <button onClick={() => removerTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>
        {/* Campo de entrada para a nova tarefa */}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nova tarefa"
        />
        {/* Botão para adicionar a nova tarefa */}
        <button onClick={adicionarTodo}>Adicionar</button>
      </div>
    </div>
  );
};

export default TodoList;
