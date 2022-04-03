import React from 'react'
import CommentHeader from '../CommentHeader/CommentHeader'
import CommentBody from '../CommentBody/CommentBody'
import CommentFooter from '../CommentFooter/CommentFooter'
import './Comment.css'

const Comment = ({comment}) => {

  // console.log(comment.replies);
  comment.replies.forEach(reply => {
    console.log(reply);
  })
  return (
    <section className="thread">
        <article className="thread__comment">
            <CommentHeader 
              username={comment.user.username}
              createdAt={comment.createdAt}
              imgSource={'.' + comment.user.image.png}
            />
            <CommentBody content={comment.content}/>
            <CommentFooter likeCount={comment.score} />
        </article>
        <div className="thread__replies">
          <div className="thread__repliesBorder" />
          {comment.replies.map(reply => (
          <article className="thread__comment">
            <CommentHeader 
              username={reply.user.username}
              createdAt={reply.createdAt}
              imgSource={'.' + reply.user.image.png}
            />
            <CommentBody content={reply.content}/>
            <CommentFooter likeCount={reply.score} />
          </article>        
          ))}
        </div>
    </section>
  )
}

export default Comment