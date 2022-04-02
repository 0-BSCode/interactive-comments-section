import React from 'react'
import './CommentHeader.css'

const CommentHeader = ({username, createdAt, imgSource}) => {
  return (
    <header className="header">
        <img
            className="header__img" 
            src={imgSource}
            alt={`${username} profile picture`} />
        <h3 className="header__name">
        {username}
        </h3>
        <p className="header__time">
        {createdAt}
        </p>
    </header>
  )
}

export default CommentHeader