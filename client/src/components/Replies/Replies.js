import React from 'react'
import Comment from '../Comment/Comment'
import './Replies.css'

const Replies = ({replies, currentUser, replyId, setReplyId}) => {
  return (
    <div className="replies">
        <div className="replies__border" />
        {replies.map(reply => (
            <Comment 
            comment={reply} 
            currentUser={currentUser}
            isReply={true}
            replyId={replyId}
            setReplyId={setReplyId}
            key={reply.id} />
        ))}
    </div>
  )
}

export default Replies