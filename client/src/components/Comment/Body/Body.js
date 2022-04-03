import React from 'react'
import './Body.css'

const Body = ({content}) => {
  return (
    <p className="body">
      {content}
    </p>
  )
}

export default Body