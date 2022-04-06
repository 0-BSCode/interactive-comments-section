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