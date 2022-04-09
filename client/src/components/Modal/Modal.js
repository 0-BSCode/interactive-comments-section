import React from 'react'
import './Modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateComment, deleteComment } from '../../actions/comments'

const Modal = ({showDeleteModal, deleteBtnId}) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments);

  const closeModal = e => {
      e.preventDefault();
      showDeleteModal.set(false);
      deleteBtnId.set(0);
  }

  const handleDelete = e => {
      e.preventDefault();

      let isComment = false;
      let parentComment;

      comments.forEach(comment => {
          if (comment.id == deleteBtnId.get) {
              isComment = true;
          }

          comment.replies.forEach(reply => {
              if (reply.id == deleteBtnId.get) {
                  parentComment = comment;
                  isComment = false;
              }
          })
      })

      if (isComment) { // Delete comment
          dispatch(deleteComment(deleteBtnId.get));
      } else { // Delete reply of comment
          const updatedReplies = parentComment.replies.filter(reply => reply.id != deleteBtnId.get);
          const updatedComment = {...parentComment, replies: [...updatedReplies]};
          dispatch(updateComment(updatedComment));
      }
      showDeleteModal.set(false);
  }

  return (
    <dialog className="modal">
        <h3 className="modal__header">
            Delete comment
        </h3>
        <p className="modal__description">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
        </p>
        <div className="modal__btnContainer">
            <button 
            className="modal__btn modal__cancelBtn"
            onClick={closeModal}>
                No, cancel
            </button>
            <button 
            className="modal__btn modal__approveBtn"
            onClick={handleDelete}>
                Yes, delete
            </button>
        </div>
    </dialog>
  )
}

export default Modal