import React from 'react'
import addImg from '../../../images/icon-plus.svg';
import subtractImg from '../../../images/icon-minus.svg';
import replyImg from '../../../images/icon-reply.svg';

const CommentFooter = () => {
  return (
    <div className="footer">
        <span className="footer__likes">
            <button className="footer__upvote">
                <img 
                    src={addImg} 
                    className="footer__upvoteImg"/>
            </button>
            <p className="footer__likeCount">12</p>
            <button>
                <img 
                    src={subtractImg} 
                    className="footer__downvoteImg"/>
            </button>
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