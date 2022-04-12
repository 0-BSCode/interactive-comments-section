import React from 'react'
import './Form.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import { createComment } from '../../utils/commentProcessing'

const Form = ({replyFor, importantIDs}) => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState(replyFor != ''? `@${replyFor.user.username} `: '')
  const [newComment, setNewComment] = useState(
      replyFor == ''?
      {
        id: importantIDs.newComment.get,
        content: '',
        createdAt: '1 minute ago',
        score: 0,
        user: {
            image: {
                png: currentUser.image.png,
                webp: currentUser.image.webp
            },
            username: currentUser.username
        },
        replies: []
      }:
    {
        id: importantIDs.newComment.get,
        content: '',
        createdAt: '1 minute ago',
        score: 0,
        replyingTo: replyFor.user.username,
        user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp
            },
            username: currentUser.username
        }
      }
    )

  const updateText = e => {
      if (replyFor != '' && e.target.value == `@${replyFor.user.username}`) return;
      setTextInput(e.target.value);
  }

  const removeReply = () => {
      importantIDs.replyBtn.set(0);
  }

  const unfocusForm = () => {
      let commentTextArea = document.querySelector('.form__input');
      commentTextArea.classList.remove("form__input--warning");
  }

  const NewComment = {get: newComment, set: setNewComment};
  const TextInput = {get: textInput, set: setTextInput};

  return (
    <form 
        className="form"
        onSubmit={e => createComment(e, replyFor, dispatch, NewComment, TextInput, importantIDs)}>
        <textarea 
            className={replyFor == ''? "form__input": "form__inputReply"}
            placeholder="Add a comment..." 
            value={textInput}
            onChange={updateText}
            onClick={replyFor == ''? removeReply: unfocusForm} />
        <div className="form__footer">
            <img 
                src={`.${currentUser.image.png}`} 
                className="form__footerImg" />
            <button 
                className="form__footerBtn"
                type="submit">
                {replyFor != ''? "Reply": "Send"}
            </button>
        </div>
    </form>
  )
}

Form.defaultProps = {
    replyFor: '',
}

export default Form