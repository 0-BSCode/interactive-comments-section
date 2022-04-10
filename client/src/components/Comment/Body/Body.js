import React from 'react'
import './Body.css'
import { useState } from 'react'

const Body = ({content, commentId, replyingTo, editing}) => {

  const [textInput, setTextInput] = useState(replyingTo != ''? `@${replyingTo} ${content}`: content)

  const updateInput = e => {
    setTextInput(e.target.value);
  }

  return (
    <>
      {editing?
       <textarea 
       dataid={commentId}
       className="body__input"
       placeholder="Add a comment..." 
       value={textInput}
       onChange={updateInput} />:
       <p className="body">
        {replyingTo != ''? 
        <>
          <b className="body__addressee">
            {`@${replyingTo} `}
          </b>
          {content}
        </>:
        content}
      </p>
      }
    </>
  )
}

export default Body