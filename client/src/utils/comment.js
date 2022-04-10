const createComment = e => {
    e.preventDefault();

    if (replyFor == '') { // Create a comment
      dispatch(addComment({...newComment, content: textInput}));
    } else { // Create a reply to a comment

      // Remove username so it doesn't repeat
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
        replyBtnId.set(0);
        setTextInput(replyFor.user.username);
    } else {
        setTextInput('');
    }

    newCommentId.set(newCommentId.get+1);
    setNewComment({...newComment, id: newCommentId.get+1})
}

/*

VARIABLES:
1. replyFor
2. dispatch
3. addComment
4. newComment
5. textInput
6. comments
7. updateComment
8. replyBtnId
9. setTextInput
10. setNewComment
11. newCommentId
*/