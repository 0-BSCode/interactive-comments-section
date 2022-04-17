import store from './createStore'
import { addComment, updateComment } from '../actions/comments';

export function getUpdatedComment(comment, payload) {
    const comments = store.getState().comments;
    let updatedComment = comment;
    let isReply = true;

    comments.forEach(comm => {
      if (comm.id == comment.id) {  // If comment
        updatedComment[payload.property] = payload.value;
        isReply = false;
      } 
    })

    // Execute only if comment to update is a reply
    if (isReply) {
      // If reply
      let breakLoop = false;
      for (let comm of comments) {
        let updatedReplies = [];

        comm.replies.forEach(reply => {
          if (reply.id == comment.id) {
            reply[payload.property] = payload.value;
            breakLoop = true;
          }
          updatedReplies.push(reply);
        })

        // Stop going through comments once reply that needs update is found
        if (breakLoop) {
          updatedComment = {...comm, replies: [...updatedReplies]};
          break
        }
      }
    }

    return updatedComment;
  }

export function createComment(event, replyFor, dispatch, newComment, textInput, importantIDs) {
  event.preventDefault();

  const comments = store.getState().comments;
  let commentTextArea = document.querySelector('.form__input');
  let replyTextArea = document.querySelector('.form__inputReply');
  if (replyFor == '') { // Create a comment
    if (textInput.get.length == 0) {
        commentTextArea.classList.add('form__input--warning');
        return;
    }
    
    commentTextArea.classList.remove('form__input--warning')
    dispatch(addComment({...newComment.get, content: textInput.get}))
  } else { // Create a reply to a comment
    // Remove username so it doesn't repeat
    const finalContent = textInput.get.split(' ').slice(1,).join(' ');
    if (finalContent.length == 0) {
        replyTextArea.classList.add('form__input--warning')
        commentTextArea.classList.remove("form__input--warning")
        return;
    }

    commentTextArea.classList.remove('form__input--warning')
    replyTextArea.classList.remove('form__input--warning')

    const updatedComment = {...newComment.get, content: textInput.get.split(' ').slice(1,).join(' ')};
    
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
      textInput.set(replyFor.user.username);
  } else {
      textInput.set('');
  }
  importantIDs.newComment.set(importantIDs.newComment.get+1);
  newComment.set({...newComment.get, id: importantIDs.newComment.get+1})
}