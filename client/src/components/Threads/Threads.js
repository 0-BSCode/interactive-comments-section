import React from 'react'
import Thread from './Thread/Thread'
import {useState} from 'react'
import {useSelector} from 'react-redux'

const Threads = ({showDeleteModal, importantIDs}) => {
  const comments = useSelector(state => state.comments)
  const [replyBtnId, setReplyBtnId] = useState(0)
  importantIDs["replyBtn"] = {get: replyBtnId, set: setReplyBtnId}

  return (
    <div className="comments">
        {comments.map(comment => (
          <Thread 
          comment={comment}
          showDeleteModal={showDeleteModal}
          importantIDs={importantIDs}
          key={comment.id}
          />
        ))}
    </div>
  )
}

export default Threads