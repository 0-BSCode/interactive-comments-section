import React from 'react'
import Comment from '../Comment/Comment'
import './Replies.css'

const Replies = ({replies, showDeleteModal, importantIDs}) => {

  return (
    <div className="replies">
        <div className="replies__border" />
        {replies.map(reply => (
            <Comment 
            comment={reply} 
            showDeleteModal={showDeleteModal}
            importantIDs={importantIDs}
            key={reply.id} />
        ))}
    </div>
  )
}

export default Replies