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

      if (replyingTo == '') { // Create a comment
        dispatch(addComment({...newComment, content: textInput}));
      } else { // Create a reply to a comment
        // Remove username so it doesn't repeat
        const updatedComment = {...newComment, content: textInput.split(' ').slice(1,)};
        
        // Check for comment that starts thread to add it to
        // its 'replies' property
        let parentComment = replyingTo;

        comments.forEach(comment => {

            // Check if reply is to a comment
            if (comment.id == replyingTo.id) {
                parentComment = comment
            }

            // Check if reply is to a reply
            comment.replies.forEach(reply => {
                if (reply.id == replyingTo.id) {
                    parentComment = comment
                }
            })
        })

        console.log(parentComment)
        dispatch(updateComment(
            {...parentComment, replies: [...parentComment["replies"], updatedComment]}
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
        className="form"
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


/*

ISSUES:
1. Newly generated reply repeats username
    - Split input value and exclude the first element (username)
    from being included in generated reply
2. Replying to a reply breaks the code
    - Iterate replyingTo property until it's null
*/