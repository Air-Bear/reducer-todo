import React, { useState, useReducer } from 'react';
import TodoList from "./components/TodoList";
import { intialTodoState, todoReducer } from "./reducers";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, intialTodoState);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (taskItem) => {
    setNewTodo(taskItem);
    console.log(newTodo);
  };

  const toggleCompleted = (todoId) => {
    setNewTodo(newTodo.map(todo => {
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
    setNewTodo(newTodo.filter(todo =>{
      return !todo.completed;
    }));
  };

  return (
    <div>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
