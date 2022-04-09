import React from 'react'
import './Body.css'

const Body = ({content, replyingTo, editing}) => {
  return (
    <>
      {editing?
       <textarea 
       className="body__input"
       placeholder="Add a comment..." 
       value={replyingTo != ''? `@${replyingTo} ${content}`: content} />:
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
      }
    </>
  )
}

export default Body