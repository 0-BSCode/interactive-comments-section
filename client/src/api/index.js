import axios from 'axios';

const url = 'http://localhost:5000/comments'

export const fetchComments = () => axios.get(url)
export const addComment = (newComment) => axios.post(url, newComment)
export const updateComment = (updatedComment) => axios.patch(`${url}/${updatedComment}`)
export const deleteComment = (commentId) => axios.delete(`${url}/${commentId}`)