import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import './Comment.css'

const Comment = ({comment, currentUser, isReply}) => {
  console.log(comment);
  return (
    <article className="comment">
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
        currentUser={currentUser}
        isYou={currentUser.username == comment.user.username? true: false}
        />
    </article>
  )
}

Comment.defaultProps = {
    isReply: false
}

export default Comment