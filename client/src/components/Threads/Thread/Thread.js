import React from 'react'
import CommentMobile from '../../Comment/Comment'
import CommentDesktop from '../../CommentDesktop/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, showDeleteModal, importantIDs}) => {
  
  return (
    <section className="thread">
        <CommentDesktop 
        comment={comment} 
        showDeleteModal={showDeleteModal} 
        importantIDs={importantIDs} />
        {/* <Comment
        comment={comment} 
        showDeleteModal={showDeleteModal} 
  importantIDs={importantIDs} /> */}
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        showDeleteModal={showDeleteModal}
        importantIDs={importantIDs} />: ''}
    </section>
  )
}

export default Thread