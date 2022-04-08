import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import Form from '../Form/Form'
import './Comment.css'
import { useSelector } from 'react-redux'

const Comment = ({comment, replyBtnId, isReply, newCommentId, showDeleteModal}) => {

  const currentUser = useSelector(state => state.currentUser);
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
        comment={comment}
        isYou={currentUser.username === comment.user.username}
        replyBtnId={replyBtnId}
        showDeleteModal={showDeleteModal}
        />
    </article>
    {
      replyBtnId.get == comment.id?
      <Form 
        replyFor={comment}
        replyBtnId={replyBtnId}
        newCommentId={newCommentId} />: ''
    }
    </>
  )
}

Comment.defaultProps = {
    isReply: false
}

export default Comment