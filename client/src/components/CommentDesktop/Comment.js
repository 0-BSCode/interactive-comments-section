import React from 'react'
import './Comment.css'
import { useState } from 'react';
import Header from './Header/Header'
import Body from './Body/Body'
import Form from '../FormDesktop/Form'
import Sidebar from './Sidebar/Sidebar';

const Comment = ({comment, showDeleteModal, importantIDs}) => {
    const [editing, setEditing] = useState(false);

  return (
    <>
    <article
      className="comment comment--desktop"
      id={comment._id}>
        <Sidebar comment={comment} />
        <div className="comment__content">
          <Header
          comment={comment} 
          importantIDs={importantIDs}
          showDeleteModal={showDeleteModal}
          editing={{get: editing, set: setEditing}}
          />
          <Body 
          comment={comment}
          replyingTo={comment.replyingTo}
          editing={{get: editing, set: setEditing}}
          />
        </div>
    </article>
    {
      importantIDs.replyBtn.get == comment._id?
      <Form
        replyFor={comment}
        importantIDs={importantIDs} />: ''
    }
    </>
  )
}

export default Comment