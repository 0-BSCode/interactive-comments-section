import React from 'react'
import './Header.css'

const Header = ({username, createdAt, imgSource, isYou}) => {

  return (
    <header className="header">
        <img
            className="header__img" 
            src={imgSource}
            alt={`${username} profile picture`} />
        <h3 className="header__name"> 
        {username}
        </h3>
        {
          isYou? 
          <span className="header__you">
            You
          </span>:
          ''
        }
        <p className="header__time">
        {createdAt}
        </p>
    </header>
  )
}

export default Header