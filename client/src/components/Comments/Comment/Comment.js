import React from 'react'
import CommentHeader from '../CommentHeader/CommentHeader'
import CommentBody from '../CommentBody/CommentBody'
import CommentFooter from '../CommentFooter/CommentFooter'
import './Comment.css'

const Comment = () => {
  return (
    <section className="thread">
        <article className="thread__comment">
            <CommentHeader />
            <CommentBody />
            <CommentFooter />
        </article>  
    </section>
  )
}

export default Comment