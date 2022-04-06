import { combineReducers } from "redux"
import commentReducer from './comments'
import currentuserReducer from './currentuser'

export default combineReducers({
    comments: commentReducer,
    currentUser: currentuserReducer
})