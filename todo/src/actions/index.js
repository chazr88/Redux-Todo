export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export function addNewTodo(todo) {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: { value: todo, completed: false }
    };
}

export function completeTodo(idx) {
    console.log(idx);
    return {
        type: COMPLETE_TODO,
        payload: idx
    };
}   