import React from 'react'
import Comment from '../Comment/Comment'
import './Replies.css'

const Replies = ({replies, replyBtnId, 
                newCommentId, showDeleteModal,
                deleteBtnId}) => {

  return (
    <div className="replies">
        <div className="replies__border" />
        {replies.map(reply => (
            <Comment 
            comment={reply} 
            isReply={true}
            replyBtnId={replyBtnId}
            newCommentId={newCommentId}
            showDeleteModal={showDeleteModal}
            deleteBtnId={deleteBtnId}
            key={reply.id} />
        ))}
    </div>
  )
}

export default Replies