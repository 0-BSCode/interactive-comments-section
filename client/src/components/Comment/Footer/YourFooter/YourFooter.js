import React from 'react'
import deleteImg from '../../../../images/icon-delete.svg'
import editImg from '../../../../images/icon-edit.svg'

const YourFooter = ({editing, dataid,
                    handleUpdate, handleEdit,
                    showModal}) => {
  return (
    <>
        {editing.get?
        <button 
        className="footer__update"
        onClick={handleUpdate}
        dataid={dataid}>
            Update
        </button>:
        <div className="footer__btnContainer">
            <button 
            className="footer__btn footer__delete"
            dataid={dataid}
            onClick={showModal}>
                <img 
                    src={deleteImg} 
                    className="footer__btnImg footer__deleteImg"
                    alt="Delete comment" />
                <p className="footer__btnTxt footer__deleteTxt">Delete</p>
            </button>
            <button 
            className="footer__btn footer__edit"
            dataid={dataid}
            onClick={handleEdit}>
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