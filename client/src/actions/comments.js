import * as api from '../api'

export const fetchComments = () => async (dispatch) => {

    try {
        const comments = await api.fetchComments()
        dispatch({type: 'FETCH', payload: comments.data})
    } catch (e) {
        console.log(e.message);
    }
}

export const addComment = (comment) => async (dispatch) => {

    try {
        const newComment = await api.addComment({...comment})
        dispatch({type: 'ADD', payload: newComment.data})
    } catch (e) {
        console.log(e.message)
    }

}

export const deleteComment = (commentId) => async (dispatch) => {

    try {
        await api.deleteComment(commentId)
        dispatch({type: 'DELETE', payload: commentId})
    } catch (e) {
        console.log(e.message)
    }
}

export const updateComment = (comment) => async (dispatch) => {

    try {
        const updatedComment = await api.updateComment(comment)
        dispatch({type: 'UPDATE', payload: updatedComment.data})
    } catch (e) {
        console.log(e.message)
    }
}