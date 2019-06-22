import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initalState = {
    todos: [
        {value: 'Walk the dog', completed: true},
        {value: 'Take out the trash', completed: false},
        {value: 'Get lunch', completed: false}
    ]

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO: 
        console.log(action.type)
            return {
            ...state,
            todos: [...state.todos, action.payload]
            };
        case COMPLETE_TODO: 
        console.log(action.type)
            return {
                ...state, 
                todos: state.todos.map((todo, index) =>
                action.payload === index
                ? { ...todo, completed: !todo.completed }
                : todo
                )
            };
        default:
            return state;
    }
}

export default reducer