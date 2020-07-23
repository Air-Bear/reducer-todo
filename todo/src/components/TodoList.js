import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(props){
    return(
        <div>
            <h1>Todo List:</h1>
            <ul>
                {props.todos.map(todo => (
                    <Todo todo={todo} />
                ))}
            </ul>
            <TodoForm />
        </div>
    );
}

export default TodoList;