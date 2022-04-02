import React from 'react'
import replyImg from '../../../images/icon-reply.svg';
import './CommentFooter.css'

const CommentFooter = ({likeCount}) => {
  return (
    <div className="footer">
        <span className="footer__likes">
            <button className="footer__vote footer__voteUp" />
            <p className="footer__likeCount">{likeCount}</p>
            <button className="footer__vote footer__voteDown"/>
        </span>
        <button className="footer__reply">
            <img 
                src={replyImg} 
                className="footer__replyImg" />
            <p className="footer__replyTxt">Reply</p>
        </button>
    </div>
  )
}

export default CommentFooter