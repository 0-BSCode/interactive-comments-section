import React from 'react'
import './Header.css'

const Header = ({username, createdAt, imgSource, isYou}) => {

  return (
    <header className={isYou? "header header--you": "header"}>
        <img
            className="header__img" 
            src={imgSource}
            alt={`${username} profile picture`} />
        <h3 className="header__name"> 
        {username}
        {
          isYou? 
          <span className="header__you">
            You
          </span>:
          ''
        }
        </h3>
        <p className="header__time">
        {createdAt}
        </p>
    </header>
  )
}

export default Header