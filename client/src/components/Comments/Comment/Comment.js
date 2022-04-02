import React from 'react'
import CommentHeader from '../CommentHeader/CommentHeader'
import CommentBody from '../CommentBody/CommentBody'
import CommentFooter from '../CommentFooter/CommentFooter'
import './Comment.css'

const Comment = ({comment}) => {

  console.log(comment);
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
    </section>
  )
}

export default Comment