import React from 'react'
import Comment from './Comment/Comment'
import data from '../../data.json'

const Comments = () => {

  return (
    <div className="comments">
        {data.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  )
}

export default Comments