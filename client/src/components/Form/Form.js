import React from 'react'
import './Form.css'

const Form = ({reply}) => {
  return (
    <form className="form">
        <textarea 
            className="form__input"
            placeholder="Add a comment..." />
        <div className="form__footer">
            <img 
                src={'../images/avatars/image-amyrobson.png'} 
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