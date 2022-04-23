import React from 'react'
import './Header.css'
import moment from 'moment'

const Header = ({comment, isYou}) => {
  return (
    <header className={isYou? "header header--you": "header"}>
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
        {moment(comment.createdAt).fromNow()}
        </p>
    </header>
  )
}

export default Header