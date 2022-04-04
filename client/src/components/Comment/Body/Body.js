import React from 'react'
import './Body.css'

const Body = ({content, replyingTo}) => {
  return (
    <p className="body">
      {replyingTo != ''? 
      <>
        <b className="body__addressee">
          {`@${replyingTo} `}
        </b>
        {content}
      </>:
      content}
    </p>
  )
}

export default Body