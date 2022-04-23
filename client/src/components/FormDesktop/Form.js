import React from 'react'
import './Form.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import { createComment } from '../../utils/commentProcessing'
import { updateText, removeReply, unfocusForm } from '../../utils/formActions'

const Form = ({replyFor, importantIDs}) => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState(replyFor != ''? `@${replyFor.user.username} `: '')
  const TextInput = {get: textInput, set: setTextInput};

  return (
    <form 
        className="form"
        onSubmit={e => createComment(e, replyFor, dispatch, TextInput, importantIDs)}>
        <img 
            src={`.${currentUser.image.png}`} 
            className="form__footerImg" />
        <textarea 
            className={replyFor == ''? "form__input": "form__inputReply"}
            placeholder="Add a comment..." 
            value={textInput}
            onChange={e => updateText(e, replyFor, TextInput)}
            onClick={replyFor == ''? removeReply(importantIDs): unfocusForm} />
        <button 
            className="form__footerBtn"
            type="submit">
            {replyFor != ''? "Reply": "Send"}
        </button>
    </form>
  )
}

Form.defaultProps = {
    replyFor: '',
}

export default Form