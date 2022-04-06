import data from '../data.json'

export default (state=data.currentUser, action) => {
    switch(action.type) {
        default:
            return state;
    }
}