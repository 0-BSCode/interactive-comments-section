import React from 'react'
import './Footer.css'
import { useDispatch } from 'react-redux'
import YourFooter from './FooterVersions/YourFooter'
import DefaultFooter from './FooterVersions/DefaultFooter'
import { incrementScore, decrementScore } from '../../../utils/btnActions'

const Footer = ({comment, isYou, showDeleteModal, importantIDs, editing}) => {

  const dispatch = useDispatch();

  return (
    <div className="footer">
        <span className="footer__likes">
            <button 
            className="footer__vote footer__voteUp"
            dataid={comment.id}
            onClick={e => incrementScore(e, comment, dispatch)} />
            <p className="footer__likeCount">{comment.score}</p>
            <button className="footer__vote footer__voteDown"
            dataid={comment.id}
            onClick={e => decrementScore(e, comment, dispatch)} />
        </span>
        {isYou?
          <YourFooter
          editing={editing}
          comment={comment}
          dispatch={dispatch}
          showDeleteModal={showDeleteModal}
          importantIDs={importantIDs} />:
          <DefaultFooter 
          importantIDs={importantIDs}
          dataid={comment.id} />
        }
    </div>
  )
}

export default Footer