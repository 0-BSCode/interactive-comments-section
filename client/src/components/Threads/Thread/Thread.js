import React from 'react'
import CommentMobile from '../../Comment/Comment'
import CommentDesktop from '../../CommentDesktop/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, showDeleteModal, importantIDs}) => {
  let width = window.innerWidth;

  return (
    <section className="thread">
      {
        width < 1024?
        <CommentMobile
        comment={comment} 
        showDeleteModal={showDeleteModal} 
        importantIDs={importantIDs} />:
        <CommentDesktop 
        comment={comment} 
        showDeleteModal={showDeleteModal} 
        importantIDs={importantIDs} /> 
      }
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        showDeleteModal={showDeleteModal}
        importantIDs={importantIDs} />: ''}
    </section>
  )
}

export default Thread