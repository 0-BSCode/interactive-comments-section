import React from 'react'
import './Form.css'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import {addComment, updateComment} from '../../actions/comments'

const Form = ({replyFor, importantIDs}) => {
  const currentUser = useSelector(state => state.currentUser)
  const comments = useSelector(state => state.comments)
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

  const createComment = e => {
      e.preventDefault();
      let commentTextArea = document.querySelector('.form__input');
      let replyTextArea = document.querySelector('.form__inputReply');

      if (replyFor == '') { // Create a comment
        if (textInput.length == 0) {
            commentTextArea.classList.add('form__input--warning');
            return;
        }

        dispatch(addComment({...newComment, content: textInput}))

      } else { // Create a reply to a comment

        // Remove username so it doesn't repeat
        const finalContent = textInput.split(' ').slice(1,).join(' ');
        if (finalContent.length == 0) {
            replyTextArea.classList.add('form__input--warning')
            commentTextArea.classList.remove("form__input--warning")
            return;
        }

        const updatedComment = {...newComment, content: textInput.split(' ').slice(1,).join(' ')};
        
        // Check for comment that starts thread to add it to
        // its 'replies' property
        let parentComment = replyFor;

        comments.forEach(comment => {

            // Check if reply is to a comment
            if (comment.id == replyFor.id) {
                parentComment = comment
            }

            // Check if reply is to a reply
            comment.replies.forEach(reply => {
                if (reply.id == replyFor.id) {
                    parentComment = comment
                }
            })
        })

        dispatch(updateComment(
            {...parentComment, replies: [...parentComment["replies"], updatedComment]}
        ))
      }

      if (replyFor != '') {
          importantIDs.replyBtn.set(0);
          setTextInput(replyFor.user.username);
      } else {
          setTextInput('');
      }

      importantIDs.newComment.set(importantIDs.newComment.get+1);
      setNewComment({...newComment, id: importantIDs.newComment.get+1})
  }

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

  return (
    <form 
        className="form"
        onSubmit={createComment}>
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