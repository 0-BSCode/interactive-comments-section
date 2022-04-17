import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import FormMobile from '../FormMobile/Form'
import './Comment.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Comment = ({comment, showDeleteModal, importantIDs}) => {

  const currentUser = useSelector(state => state.currentUser);
  const [editing, setEditing] = useState(false);

  return (
    <>
    <article
      className="comment comment--mobile"
      id={comment.id}>
        <Header 
        username={comment.user.username}
        createdAt={comment.createdAt}
        imgSource={'.' + comment.user.image.png}
        isYou={currentUser.username === comment.user.username}
        />
        <Body 
        comment={comment}
        replyingTo={comment.replyingTo}
        editing={editing} />
        <Footer 
        comment={comment}
        isYou={currentUser.username === comment.user.username}
        importantIDs={importantIDs}
        showDeleteModal={showDeleteModal}
        editing={{get: editing, set: setEditing}}
        />
    </article>
    {
      importantIDs.replyBtn.get == comment.id?
      <FormMobile
        replyFor={comment}
        importantIDs={importantIDs} />: ''
    }
    </>
  )
}

export default Comment