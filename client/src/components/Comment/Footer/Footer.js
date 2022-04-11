import React from 'react'
import replyImg from '../../../images/icon-reply.svg'
import deleteImg from '../../../images/icon-delete.svg'
import editImg from '../../../images/icon-edit.svg'
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateComment } from '../../../actions/comments'
import getUpdatedComment from '../../../utils/updateComment'
import {enableBtn, disableBtn} from '../../../utils/toggleBtn'
import YourFooter from './YourFooter/YourFooter'

const Footer = ({comment, isYou, showDeleteModal, importantIDs, editing}) => {

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const handleReply = e => {
    e.preventDefault();
    const elem = e.target;
    let elemId = elem.getAttribute('dataid');
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

    disableBtn(e.target);

    const minusBtn = document.querySelector(`.footer__voteDown[dataid="${comment.id}"]`);
    enableBtn(minusBtn);
  }

  const decrementScore = e => {
    e.preventDefault();
    let updatedComment = getUpdatedComment(comments, comment, {property: 'score', value: comment.score - 1});
    dispatch(updateComment(updatedComment));

    disableBtn(e.target);

    const plusBtn = document.querySelector(`.footer__voteUp[dataid="${comment.id}"]`);
    enableBtn(plusBtn);

  }

  const showModal = e => {
    e.preventDefault();
    showDeleteModal.set(true);
    importantIDs.deleteBtn.set(comment.id);
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
          <YourFooter
          editing={editing}
          dataid={comment.id} 
          handleUpdate={handleUpdate} 
          handleEdit={handleEdit} 
          showModal={showModal} />:
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