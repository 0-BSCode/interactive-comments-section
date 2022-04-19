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

export const deleteComment = (commentId) => {
    return {
        type: 'DELETE',
        payload: commentId
    }
}

export const updateComment = (updatedComment) => {
    return {
        type: 'UPDATE',
        payload: updatedComment
    }
}