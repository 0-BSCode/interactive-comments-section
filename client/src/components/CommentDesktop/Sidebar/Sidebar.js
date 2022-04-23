import React from 'react'
import { incrementScore, decrementScore } from '../../../utils/btnActions'
import { useDispatch } from 'react-redux'
import './Sidebar.css'

const Sidebar = ({comment}) => {

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
        <button 
        className="sidebar__vote sidebar__voteUp"
        dataid={comment._id}
        onClick={e => incrementScore(e, comment, dispatch)} />
        <p className="sidebar__likeCount">{comment.score}</p>
        <button className="sidebar__vote sidebar__voteDown"
        dataid={comment._id}
        onClick={e => decrementScore(e, comment, dispatch)} />
    </div>
  )
}

export default Sidebar