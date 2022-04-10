import React from 'react'
import replyImg from '../../../images/icon-reply.svg'
import deleteImg from '../../../images/icon-delete.svg'
import editImg from '../../../images/icon-edit.svg'
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateComment } from '../../../actions/comments'

const Footer = ({comment, isYou, showDeleteModal, importantIDs, editing}) => {

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
      let breakLoop = false;
      for (let comm of comments) {
        let updatedReplies = [];

        comm.replies.forEach(reply => {
          if (reply.id == comment.id) {
            updatedReplies.push({...reply, score: reply.score + increment});
            breakLoop = true;
          } else {
            updatedReplies.push(reply);
          }
        })

        // Stop going through comments once reply that needs update is found
        if (breakLoop) {
          updatedComment = {...comm, replies: [...updatedReplies]};
          break
        }
      }
    }

    return updatedComment;
  }

  const getUpdatedContent = content => {
    let updatedComment;

    // Parse content based on if it's a comment or a reply
    let finalContent = comment.replyingTo != undefined? content.split(' ').slice(1).join(' '): content;

    comments.forEach(comm => {
      if (comm.id == comment.id) {  // If comment
        updatedComment = {...comment, content: finalContent};
      } 
    })

    // Execute only if comment to update is a reply
    if (updatedComment == undefined) {
      // If reply
      let breakLoop = false;
      for (let comm of comments) {
        let updatedReplies = [];

        comm.replies.forEach(reply => {
          if (reply.id == comment.id) {
            updatedReplies.push({...reply, content: finalContent});
            breakLoop = true;
          } else {
            updatedReplies.push(reply);
          }
        })

        // Stop going through comments once reply that needs update is found
        if (breakLoop) {
          updatedComment = {...comm, replies: [...updatedReplies]};
          break
        }
      }
    }

    return updatedComment;
  }

  const handleReply = e => {
    e.preventDefault();
    const elem = e.target;
    const elemId = getBtnId(elem);
    
    elemId == importantIDs.replyBtn.get? importantIDs.replyBtn.set(0): importantIDs.replyBtn.set(elemId);
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
    importantIDs.deleteBtn.set(comment.id);
  }

  const editComment = e => {
    e.preventDefault();
    editing.set(!editing.get)
  }

  const handleUpdate = e => {
    e.preventDefault();
    
    const textArea = document.querySelector(`.body__input[dataid="${comment.id}"]`);
    let updatedComment = getUpdatedContent(textArea.value);
    dispatch(updateComment(updatedComment));
    editing.set(!editing.get);
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
      onClick={editComment}>
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