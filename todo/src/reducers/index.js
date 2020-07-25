export const intialTodoState = [{
    task: "Learn Reducers",
    id: Date.now(),
    completed: false
}];

export const todoReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                {
                    task: action.payload,
                    id: Date.now(),
                    completed: false
                }
            ];
        case "TOGGLE_COMPLETE":
            return(
                state.map(todo => {
                    if(todo.id === action.payload){
                        return{
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            );
        case "CLEAR_COMPLETE":
            return(
                state.filter(todo => {
                    return !todo.completed;
                })
            );
        default:
            return state;
    }
};