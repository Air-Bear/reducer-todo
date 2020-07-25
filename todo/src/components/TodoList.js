import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(props){
    return(
        <div>
            <h1>Todo List:</h1>
            <ul>
                {props.todos.map((todo, i) => (
                    <Todo key={i} todo={todo} dispatch={props.dispatch} />
                ))}
            </ul>
            <TodoForm clearCompleted={props.clearCompleted} dispatch={props.dispatch} />
        </div>
    );
}

export default TodoList;