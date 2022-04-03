import React from 'react'
import './Form.css'
import data from '../../data.json'

const Form = ({isReply}) => {
  console.log(data.currentUser);
  return (
    <form className="form">
        <textarea 
            className="form__input"
            placeholder="Add a comment..." />
        <div className="form__footer">
            <img 
                src={`.${data.currentUser.image.png}`} 
                className="form__footerImg" />
            <button 
                className="form__footerBtn"
                type="submit">
                {isReply? "Reply": "Send"}
            </button>
        </div>
    </form>
  )
}

Form.defaultProps = {
    isReply: false
}

export default Form