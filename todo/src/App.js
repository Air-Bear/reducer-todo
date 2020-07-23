import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setTodos] = useState([{
    task: "learn reducers",
    id: Date.now(),
    completed: false
  }]);

  const addTodo = (taskItem) => {
    setTodos([
      ...todos,
      {
        task: taskItem,
        id: Date.now(),
        completed: false
      }
    ]);
    console.log(todos);
  };

  const toggleCompleted = (todoId) => {
    setTodos(todos.map(todo => {
      if(todo.id === todoId){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo =>{
      return !todo.completed;
    }));
  };

  return (
    <div>
      <TodoList todos={todos} addTodo={addTodo} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
