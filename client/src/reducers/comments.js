import data from '../data.json'

export default (state=[], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return state.filter(comment => comment._id != action.payload);
        case 'UPDATE':
            return state.map(comment => comment._id == action.payload._id? action.payload: comment);
        case 'FETCH':
            return action.payload;
        default:
            return state;
    }
}