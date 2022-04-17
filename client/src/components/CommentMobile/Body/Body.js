import React from 'react'
import './Body.css'
import { useState } from 'react'

const Body = ({comment, replyingTo, editing}) => {

  const [textInput, setTextInput] = useState(replyingTo != undefined? `@${replyingTo} ${comment.content}`: comment.content)

  const updateInput = e => {
    setTextInput(e.target.value);
  }

  return (
    <>
      {editing?
       <textarea 
       dataid={comment.id}
       className="body__input"
       placeholder="Add a comment..." 
       value={textInput}
       onChange={updateInput} />:
       <p className="body">
        {replyingTo != undefined? 
        <>
          <b className="body__addressee">
            {`@${replyingTo} `}
          </b>
          {comment.content}
        </>:
        comment.content}
      </p>
      }
    </>
  )
}

export default Body