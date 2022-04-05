import React from 'react'
import Comment from '../Comment/Comment'
import './Replies.css'

const Replies = ({replies, currentUser}) => {
  return (
    <div className="replies">
        <div className="replies__border" />
        {replies.map(reply => (
            <Comment 
            comment={reply} 
            currentUser={currentUser}
            isReply={true}
            key={reply.id} />
        ))}
    </div>
  )
}

export default Replies