import React from 'react'
import Thread from './Thread/Thread'
import data from '../../data.json'
import {useState} from 'react'
import {useSelector} from 'react-redux'

const Threads = () => {
  const comments = useSelector(state => state.comments)
  const [replyId, setReplyId] = useState(0);

  console.log(comments)

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