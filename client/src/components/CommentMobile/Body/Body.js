import React from 'react'
import './Body.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleUpdate } from '../../../utils/btnActions'

const Body = ({comment, editing}) => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState(comment.replyingTo != undefined? 
                                            `@${comment.replyingTo} ${comment.content}`: 
                                            comment.content)

  const updateInput = e => {
    setTextInput(e.target.value);
  }

  return (
    <>
      {editing.get?
       <textarea 
       dataid={comment._id}
       className="body__input"
       placeholder="Add a comment..." 
       value={textInput}
       onChange={updateInput}
       onKeyPress={e => e.key == 'Enter'? handleUpdate(e, comment, dispatch, editing): ''} />:
       <p className="body">
        {comment.replyingTo != undefined? 
        <>
          <b className="body__addressee">
            {`@${comment.replyingTo} `}
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