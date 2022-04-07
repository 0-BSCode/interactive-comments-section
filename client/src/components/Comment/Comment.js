import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import Form from '../Form/Form'
import {useState, useEffect} from 'react'
import './Comment.css'

const Comment = ({comment, currentUser, 
                  replyId, setReplyId, isReply,
                  commentId, setCommentId}) => {
  
  return (
    <>
    <article
      className="comment"
      id={comment.id}>
        <Header 
        username={comment.user.username}
        createdAt={comment.createdAt}
        imgSource={'.' + comment.user.image.png}
        isYou={currentUser.username === comment.user.username}
        />
        <Body 
        content={comment.content}
        replyingTo={isReply? comment.replyingTo: ''} />
        <Footer 
        commentId={comment.id}
        likeCount={comment.score} 
        isYou={currentUser.username === comment.user.username}
        btnId={comment.id}
        replyId={replyId}
        setReplyId={setReplyId}
        />
    </article>
    {
      replyId == comment.id?
      <Form 
        replyingTo={comment}
        setReplyId={setReplyId}
        commentId={commentId}
        setCommentId={setCommentId} />: ''
    }
    </>
  )
}

Comment.defaultProps = {
    isReply: false
}

export default Comment