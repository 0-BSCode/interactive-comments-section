import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, replyBtnId, 
                newCommentId, showDeleteModal,
                deleteBtnId}) => {
  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        replyBtnId={replyBtnId}
        newCommentId={newCommentId}
        showDeleteModal={showDeleteModal}
        deleteBtnId={deleteBtnId} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        replyBtnId={replyBtnId}
        newCommentId={newCommentId}
        showDeleteModal={showDeleteModal}
        deleteBtnId={deleteBtnId} />: ''}
    </section>
  )
}

export default Thread