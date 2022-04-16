import React from 'react'
import CommentDesktop from '../CommentDesktop/Comment'
import CommentMobile from '../Comment/Comment'
import './Replies.css'

const Replies = ({replies, showDeleteModal, importantIDs}) => {

  let width = window.innerWidth;

  return (
    <div className="replies">
        <div className="replies__border" />
        {replies.map(reply => (
            width < 1024?
            <CommentMobile 
            comment={reply} 
            showDeleteModal={showDeleteModal}
            importantIDs={importantIDs}
            key={reply.id} />:
            <CommentDesktop 
            comment={reply} 
            showDeleteModal={showDeleteModal}
            importantIDs={importantIDs}
            key={reply.id} />
        ))}
    </div>
  )
}

export default Replies