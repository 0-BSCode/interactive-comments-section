import React from 'react'
import Thread from './Thread/Thread'
import data from '../../data.json'
import {useState} from 'react'

const Threads = () => {
  const [replyId, setReplyId] = useState(0);

  return (
    <div className="comments">
        {data.comments.map(comment => (
          <Thread 
          comment={comment}
          currentUser={data.currentUser}
          replyId={replyId}
          setReplyId={setReplyId} 
          key={comment.id}
          />
        ))}
    </div>
  )
}

export default Threads