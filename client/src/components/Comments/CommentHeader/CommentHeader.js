import React from 'react'
import profileImg from '../../../images/avatars/image-amyrobson.png';
import './CommentHeader.css'

const CommentHeader = () => {
  return (
    <header className="header">
        <img
            className="header__img" 
            src={profileImg} />
        <h3 className="header__name">
        amyrobson
        </h3>
        <p className="header__time">
        1 month ago
        </p>
    </header>
  )
}

export default CommentHeader