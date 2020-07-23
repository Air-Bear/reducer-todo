import React, { useState } from "react";

function TodoForm(props){
    const [todoItem, setTodoItem] = useState("");

    const changeHandler = (event) => {
        setTodoItem(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.addTodo(todoItem);
        setTodoItem("");
    };
    return(
        <>
            <form onSubmit={submitHandler}>
                <input name="todoItem" value={todoItem} onChange={changeHandler} />
                <button>Add</button>
            </form>
            <button onClick={props.clearCompleted}>Clear</button>
        </>
    );
}

export default TodoForm;