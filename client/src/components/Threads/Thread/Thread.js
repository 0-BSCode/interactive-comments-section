import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, showDeleteModal, importantIDs}) => {
  
  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        showDeleteModal={showDeleteModal} 
        importantIDs={importantIDs} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        showDeleteModal={showDeleteModal}
        importantIDs={importantIDs} />: ''}
    </section>
  )
}

export default Thread