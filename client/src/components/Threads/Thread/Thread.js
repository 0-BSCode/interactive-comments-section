import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, newCommentId, replyBtnId}) => {
  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        replyBtnId={replyBtnId}
        newCommentId={newCommentId} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        replyBtnId={replyBtnId}
        newCommentId={newCommentId} />: ''}
    </section>
  )
}

export default Thread