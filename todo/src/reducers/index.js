import { ADD_TODO } from "../actions";

const initalState = {
    todos: [
        {value: 'Walk the dog', completed: false},
        {value: 'Take out the trash', completed: false},
        {value: 'Get lunch', completed: false}
    ]

}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
            ...state,
            todos: [...state.todos, action.payload]
            }
        }
        default:
            return state;
    }
}

export default reducer