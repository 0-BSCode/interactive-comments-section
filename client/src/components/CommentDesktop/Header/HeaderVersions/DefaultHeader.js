import React from 'react'
import replyImg from '../../../../images/icon-reply.svg'
import { handleReply } from '../../../../utils/btnActions'

const DefaultHeader = ({importantIDs, dataid}) => {
  return (
    <button 
    className="footer__btn footer__reply"
    onClick={e => handleReply(e, importantIDs)}
    dataid={dataid}>
      <img 
          src={replyImg} 
          className="footer__btnImg footer__replyImg"
          alt="Reply to comment" />
      <p className="footer__btnTxt footer__replyTxt">Reply</p>
  </button>
  )
}

export default DefaultHeader