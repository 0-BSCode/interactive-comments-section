import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, currentUser, 
                commentId, setCommentId,
                replyId, setReplyId}) => {
  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        currentUser={currentUser}
        replyId={replyId}
        setReplyId={setReplyId}
        commentId={commentId}
        setCommentId={setCommentId} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        currentUser={currentUser}
        replyId={replyId}
        setReplyId={setReplyId}
        commentId={commentId}
        setCommentId={setCommentId} />: ''}
    </section>
  )
}

export default Thread