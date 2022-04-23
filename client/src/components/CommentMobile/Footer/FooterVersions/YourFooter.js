import React from 'react'
import deleteImg from '../../../../images/icon-delete.svg'
import editImg from '../../../../images/icon-edit.svg'
import { handleEdit, handleUpdate, showModal } from '../../../../utils/btnActions'

const YourFooter = ({editing, comment, dispatch,
                     showDeleteModal, importantIDs}) => {
  return (
    <>
        {editing.get?
        <button 
        className="footer__update"
        onClick={e => handleUpdate(e, comment, dispatch, editing)}
        dataid={comment._id}>
            Update
        </button>:
        <div className="footer__btnContainer">
            <button 
            className="footer__btn footer__delete"
            dataid={comment._id}
            onClick={e => showModal(e, showDeleteModal, importantIDs, comment)}>
                <img 
                    src={deleteImg} 
                    className="footer__btnImg footer__deleteImg"
                    alt="Delete comment" />
                <p className="footer__btnTxt footer__deleteTxt">Delete</p>
            </button>
            <button 
            className="footer__btn footer__edit"
            dataid={comment._id}
            onClick={e => handleEdit(e, editing)}>
                <img 
                    src={editImg} 
                    className="footer__btnImg footer__editImg"
                    alt="Edit comment" />
                <p className="footer__btnTxt footer__editTxt">Edit</p>
            </button>
        </div>
    }
    </>
  )
}

export default YourFooter