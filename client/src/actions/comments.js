import * as api from '../api'

export const fetchComments = () => async (dispatch) => {

    try {
        const comments = await api.fetchComments();
        dispatch({type: 'FETCH', payload: comments})
    } catch (e) {
        console.log(e.message);
    }
}

export const addComment = (comment) => {
    return {
        type: 'ADD',
        payload: comment
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