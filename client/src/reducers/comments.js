import data from '../data.json'

export default (state=[...data.comments], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return state.filter(comment => comment.id != action.payload);
        case 'UPDATE':
            return state;
        default:
            return state;
    }
}