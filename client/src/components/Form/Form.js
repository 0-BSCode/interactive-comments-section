import React from 'react'
import profileImg from '../../images/avatars/image-amyrobson.png'

const Form = () => {
  return (
    <form className="form">
        <input 
            className="form__input"
            type="text" />
        <div className="form__footer">
            <img 
                src={profileImg} 
                className="form__footerImg" />
            <button 
                className="form__footerBtn"
                type="submit">
                Send
            </button>
        </div>
    </form>
  )
}

export default Form