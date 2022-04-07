import React from 'react'
import './Form.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useEffect} from 'react'
import {addComment, updateComment} from '../../actions/comments'

const Form = ({replyingTo, setReplyId, commentId, setCommentId}) => {
  const currentUser = useSelector(state => state.currentUser)
  const comments = useSelector(state => state.comments)
  const dispatch = useDispatch()

  const [textInput, setTextInput] = useState(replyingTo != ''? `@${replyingTo.user.username}`: '')
  const [newComment, setNewComment] = useState(
      replyingTo == ''?
      {
        id: commentId,
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
        id: commentId,
        content: '',
        createdAt: '1 minute ago',
        score: 0,
        replyingTo: replyingTo.user.username,
        user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp
            },
            username: currentUser.username
        }
      }
    )

  const createComment = e => {
      e.preventDefault();
    
      if (replyingTo == '') {
        dispatch(addComment({...newComment, content: textInput}));
      } else {
        let threadOwner = replyingTo.replyingTo;
        console.log(threadOwner);
        dispatch(updateComment(
            {...replyingTo, replies: [...replyingTo["replies"], {
                ...newComment, content: textInput
            }]}
        ))
      }

      if (replyingTo != '') {
          setReplyId(0);
          setTextInput(replyingTo.user.username);
      } else {
          setTextInput('');
      }

      setCommentId(commentId+1);
      setNewComment({...newComment, id: commentId+1})
  }

  const updateText = e => {
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