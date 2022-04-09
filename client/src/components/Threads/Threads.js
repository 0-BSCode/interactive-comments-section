import React from 'react'
import Thread from './Thread/Thread'
import {useState} from 'react'
import {useSelector} from 'react-redux'

const Threads = ({newCommentId, showDeleteModal, deleteBtnId}) => {
  const comments = useSelector(state => state.comments)
  const [replyBtnId, setReplyBtnId] = useState(0)

  return (
    <div className="comments">
        {comments.map(comment => (
          <Thread 
          comment={comment}
          replyBtnId={{get: replyBtnId, set: setReplyBtnId}}
          newCommentId={newCommentId}
          showDeleteModal={showDeleteModal}
          deleteBtnId={deleteBtnId}
          key={comment.id}
          />
        ))}
    </div>
  )
}

export default Threads