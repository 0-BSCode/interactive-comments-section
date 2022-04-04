import React from 'react'
import replyImg from '../../../images/icon-reply.svg'
import deleteImg from '../../../images/icon-delete.svg'
import editImg from '../../../images/icon-edit.svg'
import './Footer.css'

const Footer = ({likeCount, isYou}) => {
  return (
    <div className="footer">
        <span className="footer__likes">
            <button className="footer__vote footer__voteUp" />
            <p className="footer__likeCount">{likeCount}</p>
            <button className="footer__vote footer__voteDown"/>
        </span>
        {isYou?
          <div className="footer__btnContainer">
            <button className="footer__btn footer__delete">
              <img 
                  src={deleteImg} 
                  className="footer__btnImg footer__deleteImg" />
              <p className="footer__btnTxt footer__deleteTxt">Delete</p>
            </button>
            <button className="footer__btn footer__edit">
              <img 
                  src={editImg} 
                  className="footer__btnImg footer__editImg" />
              <p className="footer__btnTxt footer__editTxt">Edit</p>
            </button>
          </div>:
          <button className="footer__btn footer__reply">
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