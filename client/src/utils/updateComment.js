const getUpdatedComment = (comments, comment, payload) => {
    let updatedComment = comment;
    let isReply = true;
    console.log(payload.value);

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
            console.log(reply.id)
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

export default getUpdatedComment

/*

VARIABLES:
1. comments
2. comment
*/