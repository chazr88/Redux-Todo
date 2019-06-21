export const ADD_TODO = "ADD_TODO";

export function addNewTodo(todo) {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: { value: todo, completed: false }
    };
}