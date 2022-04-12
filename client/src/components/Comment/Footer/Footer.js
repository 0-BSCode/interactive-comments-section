import React from 'react'
import './Footer.css'
import { useDispatch } from 'react-redux'
import YourFooter from './YourFooter/YourFooter'
import replyImg from '../../../images/icon-reply.svg'
import { handleReply, handleUpdate, 
         handleEdit, incrementScore, 
         decrementScore, showModal } from '../../../utils/btnActions'

const Footer = ({comment, isYou, showDeleteModal, importantIDs, editing}) => {

  const dispatch = useDispatch();

  return (
    <div className="footer">
        <span className="footer__likes">
            <button 
            className="footer__vote footer__voteUp"
            dataid={comment.id}
            onClick={e => incrementScore(e, comment, dispatch)} />
            <p className="footer__likeCount">{comment.score}</p>
            <button className="footer__vote footer__voteDown"
            dataid={comment.id}
            onClick={e => decrementScore(e, comment, dispatch)} />
        </span>
        {isYou?
          <YourFooter
          editing={editing}
          dataid={comment.id} 
          handleUpdate={e => handleUpdate(e, comment, dispatch, editing)} 
          handleEdit={e => handleEdit(e, editing)} 
          showModal={e => showModal(e, showDeleteModal, importantIDs, comment)} />:
          <button 
            className="footer__btn footer__reply"
            onClick={e => handleReply(e, importantIDs)}
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