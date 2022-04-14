import React from 'react'
import './Body.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleUpdate } from '../../../utils/btnActions'

const Body = ({comment, replyingTo, editing}) => {

  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(replyingTo != undefined? `@${replyingTo} ${comment.content}`: comment.content)

  const updateInput = e => {
    setTextInput(e.target.value);
  }

  return (
    <>
      {editing?
       <>
        <textarea 
        dataid={comment.id}
        className="body__input"
        placeholder="Add a comment..." 
        value={textInput}
        onChange={updateInput} />
        <button 
        className="footer__update"
        onClick={e => handleUpdate(e, comment, dispatch, editing)}
        dataid={comment.id}>
            Update
        </button>
       </>:
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