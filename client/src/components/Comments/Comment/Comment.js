import React from 'react'
import profileImg from '../../../images/avatars/image-amyrobson.png';
import addImg from '../../../images/icon-plus.svg';
import subtractImg from '../../../images/icon-minus.svg';
import replyImg from '../../../images/icon-reply.svg';

const Comment = () => {
  return (
    <section className="thread">
        <article className="thread__comment">
            <header className="thread__commentHeader">
                <img
                    className="thread__commentHeaderImg" 
                    src={profileImg} />
                <h3 className="thread__commentHeaderName">
                amyrobson
                </h3>
                <p className="thread__commentHeaderdTime">
                1 month ago
                </p>
            </header>
            <p className="thread__body">
            Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
            </p>
            <div className="thread__footer">
                <span className="thread__footerLikes">
                    <button className="thread__footerUpvote">
                        <img 
                            src={addImg} 
                            className="thread__footerUpvoteImg"/>
                    </button>
                    <p className="thread__footerLikeCount">12</p>
                    <button>
                        <img 
                            src={subtractImg} 
                            className="thread__footerDownvoteImg"/>
                    </button>
                </span>
                <button className="thread__footerReply">
                    <img 
                        src={replyImg} 
                        className="thread__footerReplyImg" />
                    <p className="thread__footerReplyTxt">Reply</p>
                </button>
            </div>
        </article>  
    </section>
  )
}

export default Comment