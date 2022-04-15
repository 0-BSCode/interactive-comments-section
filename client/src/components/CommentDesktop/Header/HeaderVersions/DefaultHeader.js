import React from 'react'
import replyImg from '../../../../images/icon-reply.svg'
import { handleReply } from '../../../../utils/btnActions'

const DefaultHeader = ({importantIDs, dataid}) => {
  return (
    <button 
    className="header__btn header__reply"
    onClick={e => handleReply(e, importantIDs)}
    dataid={dataid}>
      <img 
          src={replyImg} 
          className="header__btnImg header__replyImg"
          alt="Reply to comment" />
      <p className="header__btnTxt header__replyTxt">Reply</p>
  </button>
  )
}

export default DefaultHeader