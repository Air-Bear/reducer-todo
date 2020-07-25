import React, { useState } from "react";

function TodoForm(props){
    const [todoItem, setTodoItem] = useState("");

    const changeHandler = (event) => {
        setTodoItem(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.dispatch({
            type: "ADD_TODO",
            payload: todoItem
        })
        setTodoItem("");
    };
    return(
        <>
            <form onSubmit={submitHandler}>
                <input name="todoItem" value={todoItem} onChange={changeHandler} />
                <button>Add</button>
            </form>
            <button onClick={() => props.dispatch({type:"CLEAR_COMPLETE"})}>Clear</button>
        </>
    );
}

export default TodoForm;