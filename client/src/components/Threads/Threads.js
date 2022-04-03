import React from 'react'
import Thread from './Thread/Thread'
import data from '../../data.json'

const Threads = () => {

  return (
    <div className="comments">
        {data.comments.map(comment => (
          <Thread 
          comment={comment}
          currentUser={data.currentUser}
          key={comment.id} 
          />
        ))}
    </div>
  )
}

export default Threads