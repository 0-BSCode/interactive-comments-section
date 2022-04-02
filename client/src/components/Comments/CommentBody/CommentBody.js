import React from 'react'
import './CommentBody.css'

const CommentBody = ({content}) => {
  return (
    <p className="body">
      {content}
    </p>
  )
}

export default CommentBody