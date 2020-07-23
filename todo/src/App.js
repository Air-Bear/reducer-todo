import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setTodos] = useState([{
    task: "learn reducers",
    id: Date.now(),
    completed: false
  }]);

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
