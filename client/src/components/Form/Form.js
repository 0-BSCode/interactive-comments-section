import React from 'react'
import './Form.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {addComment} from '../../actions/comments'

const Form = ({replyingTo, setReplyId}) => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState(replyingTo != ''? `@${replyingTo}`: '')
  const [newComment, setNewComment] = useState({
      id: 5,
      content: '',
      createdAt: '1 minute ago',
      score: 0,
      replyingTo: replyingTo,
      user: {
          image: {
            png: currentUser.image.png,
            webp: currentUser.image.webp
          },
          username: currentUser.username
      },
      replies: []
  })

  const createComment = e => {
      e.preventDefault();
      setNewComment({...newComment, content: textInput});
      dispatch(addComment({...newComment, content: textInput}));
      console.log(newComment);
      if (replyingTo != '') setReplyId(0);
      setTextInput(replyingTo);
  }

  const updateText = e => {
      console.log(e.target.value);
      setTextInput(e.target.value);
  }

  return (
    <form 
        className={replyingTo != '' ? "form form--reply": "form"}
        onSubmit={createComment}>
        <textarea 
            className="form__input"
            placeholder="Add a comment..." 
            value={textInput}
            onChange={updateText} />
        <div className="form__footer">
            <img 
                src={`.${currentUser.image.png}`} 
                className="form__footerImg" />
            <button 
                className="form__footerBtn"
                type="submit">
                {replyingTo != ''? "Reply": "Send"}
            </button>
        </div>
    </form>
  )
}

Form.defaultProps = {
    replyingTo: '',
}

export default Form