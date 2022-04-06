import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import Form from '../Form/Form'
import {useState, useEffect} from 'react'
import './Comment.css'

const Comment = ({comment, currentUser, replyId, setReplyId, isReply}) => {
  const [toggleReply, setToggleReply] = useState(false);

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
        likeCount={comment.score} 
        isYou={currentUser.username === comment.user.username}
        btnId={comment.id}
        toggleReply={toggleReply}
        setToggleReply={setToggleReply}
        setReplyId={setReplyId}
        />
    </article>
    {
      toggleReply && replyId == comment.id?
      <Form isReply={true}/>: ''
    }
    </>
  )
}

Comment.defaultProps = {
    isReply: false
}

export default Comment