import React from 'react'
import replyImg from '../../../images/icon-reply.svg'
import deleteImg from '../../../images/icon-delete.svg'
import editImg from '../../../images/icon-edit.svg'
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateComment } from '../../../actions/comments'

const Footer = ({comment, isYou, 
                replyBtnId, showDeleteModal,
                deleteBtnId, editing}) => {

  const comments = useSelector(state => state.comments);
  const dispatch = useDispatch();

  const getBtnId = elem => {
    let id = elem.getAttribute('dataid');

    if (id == null) {
      id = elem.parentElement.getAttribute('dataid');
    }

    return id;
  }

  const getUpdatedCount = increment => {
    let updatedComment;
    comments.forEach(comm => {
      if (comm.id == comment.id) {  // If comment
        updatedComment = {...comment, score: comment.score + increment};
      } 
    })

    // Execute only if comment to update is a reply
    if (updatedComment == undefined) {
      // If reply
      comments.forEach(comm => {
        let updatedReplies = [];
        comm.replies.forEach(reply => {
          if (reply.id == comment.id) {
            updatedReplies.push({...comment, score: comment.score + increment});
          } else {
            updatedReplies.push(reply);
          }
        })
        updatedComment = {...comm, replies: [...updatedReplies]};
      })
    }

    return updatedComment;
  }

  const handleReply = e => {
    e.preventDefault();
    const elem = e.target;
    const elemId = getBtnId(elem);
    
    elemId == replyBtnId.get? replyBtnId.set(0): replyBtnId.set(elemId);
  }

  const incrementScore = e => {
    e.preventDefault();
    let updatedComment = getUpdatedCount(1);
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
    let updatedComment = getUpdatedCount(-1);
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
    deleteBtnId.set(comment.id);
  }

  const editComment = e => {
    e.preventDefault();
    editing.set(!editing.get)
  }
  
  let isYouBtns;

  if (editing.get) {
    isYouBtns = 
    <button 
      className="footer__update"
      onClick={handleReply}
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
            className="footer__btnImg footer__deleteImg" />
        <p className="footer__btnTxt footer__deleteTxt">Delete</p>
      </button>
      <button 
      className="footer__btn footer__edit"
      dataid={comment.id}
      onClick={editComment}>
        <img 
            src={editImg} 
            className="footer__btnImg footer__editImg" />
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
                  className="footer__btnImg footer__replyImg" />
              <p className="footer__btnTxt footer__replyTxt">Reply</p>
          </button>
        }
    </div>
  )
}

export default Footer