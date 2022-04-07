import React from 'react'
import Thread from './Thread/Thread'
import {useState} from 'react'
import {useSelector} from 'react-redux'

const Threads = ({commentId, setCommentId}) => {
  const comments = useSelector(state => state.comments)
  const currentUser = useSelector(state => state.currentUser)
  const [replyId, setReplyId] = useState(0)

  return (
    <div className="comments">
        {comments.map(comment => (
          <Thread 
          comment={comment}
          currentUser={currentUser}
          replyId={replyId}
          setReplyId={setReplyId}
          commentId={commentId} 
          setCommentId={setCommentId}
          key={comment.id}
          />
        ))}
    </div>
  )
}

export default Threads