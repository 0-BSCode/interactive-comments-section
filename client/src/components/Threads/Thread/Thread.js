import React from 'react'
import Comment from '../../Comment/Comment'
import Replies from '../../Replies/Replies'
import './Thread.css'

const Thread = ({comment, currentUser}) => {

  return (
    <section className="thread">
        <Comment 
        comment={comment} 
        currentUser={currentUser} />
        {comment.replies.length != 0?
        <Replies 
        replies={comment.replies}
        currentUser={currentUser} />: ''}
    </section>
  )
}

export default Thread