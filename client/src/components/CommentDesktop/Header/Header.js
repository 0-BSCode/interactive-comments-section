import React from 'react'
import './Header.css'
import DefaultHeader from './HeaderVersions/DefaultHeader'
import YourHeader from './HeaderVersions/YourHeader'
import { useSelector, useDispatch } from 'react-redux'

const Header = ({comment, importantIDs, showDeleteModal, editing}) => {
  const currentUser = useSelector(state => state.currentUser);
  const isYou = currentUser.username === comment.user.username;
  const dispatch = useDispatch();

  return (
    <header className={isYou? "header header--desktop header--you": "header header--desktop"}>
        <div className="header__container">
          <img
              className="header__img" 
              src={'.' + comment.user.image.png}
              alt={`${comment.user.username} profile picture`} />
          <h3 className="header__name"> 
          {comment.user.username}
          {
            isYou? 
            <span className="header__you">
              You
            </span>:
            ''
          }
          </h3>
          <p className="header__time">
          {comment.createdAt}
          </p>
        </div>
        {
          isYou?
          <YourHeader
          editing={editing}
          comment={comment}
          dispatch={dispatch}
          showDeleteModal={showDeleteModal}
          importantIDs={importantIDs} />:
          <DefaultHeader
          importantIDs={importantIDs}
          dataid={comment.id}  />
        }
    </header>
  )
}

export default Header