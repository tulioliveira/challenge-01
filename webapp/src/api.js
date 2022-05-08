import axios from 'axios';

export const getTodos = () => {
  return axios.get('http://localhost:3000/todos');
};

export const addTodo = (todo) => {
  return axios.post('http://localhost:3000/todos', {
    todo,
  });
};

export const updateTodo = (id, todo) => {
  return axios.put(`http://localhost:3000/todos/${id}`, {
    todo,
  });
};

export const deleteTodo = (id) => {
  return axios.delete(`http://localhost:3000/todos/${id}`);
};
