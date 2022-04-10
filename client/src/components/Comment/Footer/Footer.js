import React from 'react'
import replyImg from '../../../images/icon-reply.svg'
import deleteImg from '../../../images/icon-delete.svg'
import editImg from '../../../images/icon-edit.svg'
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateComment } from '../../../actions/comments'
import getUpdatedComment from '../../../utils/updateComment'

const Footer = ({comment, isYou, showDeleteModal, importantIDs, editing}) => {

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const handleReply = e => {
    e.preventDefault();
    const elem = e.target;
    const elemId = elem.getAttribute('dataid');
    if (elemId == null) elemId = elem.parentElement.getAttribute('dataid');
    
    elemId == importantIDs.replyBtn.get? importantIDs.replyBtn.set(0): importantIDs.replyBtn.set(elemId);
  }

  const handleUpdate = e => {
    e.preventDefault();
    
    const textArea = document.querySelector(`.body__input[dataid="${comment.id}"]`);
    let finalContent = comment.replyingTo != undefined? textArea.value.split(' ').slice(1).join(' '): textArea.value;
    let updatedComment = getUpdatedComment(comments, comment, {property: 'content', value: finalContent});
    dispatch(updateComment(updatedComment));
    editing.set(!editing.get);
  }

  const handleEdit = e => {
    e.preventDefault();
    editing.set(!editing.get)
  }

  const incrementScore = e => {
    e.preventDefault();
    let updatedComment = getUpdatedComment(comments, comment, {property: 'score', value: comment.score + 1});
    dispatch(updateComment(updatedComment));

    e.target.disabled = true;
    e.target.classList.add('footer__vote--disabled');
    e.target.classList.add('footer__voteUp--disabled');

    const minusBtn = document.querySelector(`.footer__voteDown[dataid="${comment.id}"]`);
    minusBtn.disabled = false;
    minusBtn.classList.remove('footer__vote--disabled');
    minusBtn.classList.remove('footer__voteDown--disabled');
  }

  const decrementScore = e => {
    e.preventDefault();
    let updatedComment = getUpdatedComment(comments, comment, {property: 'score', value: comment.score - 1});
    dispatch(updateComment(updatedComment));

    e.target.disabled = true;
    e.target.classList.add('footer__vote--disabled');
    e.target.classList.add('footer__voteDown--disabled');

    const plusBtn = document.querySelector(`.footer__voteUp[dataid="${comment.id}"]`);
    plusBtn.disabled = false;
    plusBtn.classList.remove('footer__vote--disabled');
    plusBtn.classList.remove('footer__voteUp--disabled');
  }

  const showModal = e => {
    e.preventDefault();
    showDeleteModal.set(true);
    importantIDs.deleteBtn.set(comment.id);
  }
  
  let isYouBtns;

  if (editing.get) {
    isYouBtns = 
    <button 
      className="footer__update"
      onClick={handleUpdate}
      dataid={comment.id}>
        Update
    </button>
  } else {
    isYouBtns = 
    <div className="footer__btnContainer">
      <button 
      className="footer__btn footer__delete"
      dataid={comment.id}
      onClick={showModal}>
        <img 
            src={deleteImg} 
            className="footer__btnImg footer__deleteImg"
            alt="Delete comment" />
        <p className="footer__btnTxt footer__deleteTxt">Delete</p>
      </button>
      <button 
      className="footer__btn footer__edit"
      dataid={comment.id}
      onClick={handleEdit}>
        <img 
            src={editImg} 
            className="footer__btnImg footer__editImg"
            alt="Edit comment" />
        <p className="footer__btnTxt footer__editTxt">Edit</p>
      </button>
    </div>
  }


  return (
    <div className="footer">
        <span className="footer__likes">
            <button 
            className="footer__vote footer__voteUp"
            dataid={comment.id}
            onClick={incrementScore} />
            <p className="footer__likeCount">{comment.score}</p>
            <button className="footer__vote footer__voteDown"
            dataid={comment.id}
            onClick={decrementScore} />
        </span>
        {isYou?
          isYouBtns:
          <button 
            className="footer__btn footer__reply"
            onClick={handleReply}
            dataid={comment.id}>
              <img 
                  src={replyImg} 
                  className="footer__btnImg footer__replyImg"
                  alt="Reply to comment" />
              <p className="footer__btnTxt footer__replyTxt">Reply</p>
          </button>
        }
    </div>
  )
}

export default Footer