import React from 'react'
import profileImg from '../../images/avatars/image-amyrobson.png'
import './Form.css'

const Form = () => {
  return (
    <form className="form">
        <textarea 
            className="form__input"
            placeholder="Add a comment..." />
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