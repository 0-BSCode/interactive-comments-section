import React from 'react'
import profileImg from '../../images/avatars/image-amyrobson.png'
import './Form.css'

const Form = ({reply}) => {
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
                {reply? "Reply": "Send"}
            </button>
        </div>
    </form>
  )
}

Form.defaultProps = {
    reply: false
}

export default Form