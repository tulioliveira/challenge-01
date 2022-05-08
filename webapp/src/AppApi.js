import { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos, updateTodo } from './api';

const Todo = ({ children, onEdit, onDelete }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    setEditValue(children);
  }, [children]);

  const onEditValueChange = (event) => {
    setEditValue(event.target.value);
  };

  const toggleIcons = (state) => () => {
    setShowIcon(state);
  };

  const toggleEdit = () => {
    setIsEditing((curr) => !curr);
  };

  const onEditConfirm = (event) => {
    event.preventDefault();
    setIsEditing(false);
    onEdit(editValue);
  };

  return isEditing ? (
    <div className="w-96 px-4 py-2 my-2 border-gray-300 rounded-md shadow-md fit-content flex flex-row items-center justify-between">
      <form className="flex flex-grow" onSubmit={onEditConfirm}>
        <input
          className="flex flex-grow border rounded border-gray-300 text-gray-900 focus:border-blue-600 focus:shadow-lg shadow-blue-600 outline-none p-2 mr-1"
          type="text"
          value={editValue}
          onChange={onEditValueChange}
        />
        <button type="submit" disabled={!editValue} hidden />
      </form>
      <div>
        <button onClick={onEditConfirm} disabled={!editValue}>
          ✅
        </button>
        <button onClick={toggleEdit}>❌</button>
      </div>
    </div>
  ) : (
    <div
      className="w-96 px-4 py-2 my-2 border-gray-300 rounded-md shadow-md fit-content flex flex-row items-center justify-between"
      onMouseEnter={toggleIcons(true)}
      onMouseLeave={toggleIcons(false)}
    >
      <div className="overflow-hidden break-words whitespace-pre-wrap">
        {children}
      </div>
      {showIcon && (
        <div className="flex flex-row items-center">
          <button onClick={toggleEdit}>✏️</button>
          <button onClick={onDelete}>❌</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const refreshTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  const onEdit = (id) => async (value) => {
    await updateTodo(id, value);
    await refreshTodos();
  };

  const onDelete = (id) => async () => {
    await deleteTodo(id);
    await refreshTodos();
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (input) {
      await addTodo(input);
      setInput('');
      await refreshTodos();
    }
  };

  return (
    <div className="w-100 flex flex-col items-center p-4">
      <h1 className="text-xl">Todos App!</h1>

      <form onSubmit={onSubmit}>
        <input
          className="w-lg border rounded my-2 border-gray-300 text-gray-900 focus:border-blue-600 focus:shadow-lg shadow-blue-600 outline-none p-2"
          type="text"
          value={input}
          onChange={onInputChange}
        />
        <button type="submit" hidden />
      </form>
      {todos.map(({ todo, id }) => (
        <Todo key={id} onDelete={onDelete(id)} onEdit={onEdit(id)}>
          {todo}
        </Todo>
      ))}
    </div>
  );
};

export default App;
