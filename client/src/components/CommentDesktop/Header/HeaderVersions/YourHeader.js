import React from 'react'
import deleteImg from '../../../../images/icon-delete.svg'
import editImg from '../../../../images/icon-edit.svg'
import { handleEdit, showModal } from '../../../../utils/btnActions'

const YourHeader = ({editing, comment,
                     showDeleteModal, importantIDs}) => {
  return (
    <div className="header__btnContainer">
        <button 
        className="header__btn header__delete"
        dataid={comment._id}
        onClick={e => showModal(e, showDeleteModal, importantIDs, comment)}>
            <img 
                src={deleteImg} 
                className="header__btnImg header__deleteImg"
                alt="Delete comment" />
            <p className="header__btnTxt header__deleteTxt">Delete</p>
        </button>
        <button 
        className="header__btn header__edit"
        dataid={comment._id}
        onClick={e => handleEdit(e, editing)}>
            <img 
                src={editImg} 
                className="header__btnImg header__editImg"
                alt="Edit comment" />
            <p className="header__btnTxt header__editTxt">Edit</p>
        </button>
    </div>
  )
}

export default YourHeader