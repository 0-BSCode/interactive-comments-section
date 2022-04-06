import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, currentUser, replyId, setReplyId}) => {
  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        currentUser={currentUser}
        replyId={replyId}
        setReplyId={setReplyId} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        currentUser={currentUser}
        replyId={replyId}
        setReplyId={setReplyId} />: ''}
    </section>
  )
}

export default Thread