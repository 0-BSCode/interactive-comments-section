import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <dialog className="modal">
        <h3 className="modal__header">
            Delete comment
        </h3>
        <p className="modal__description">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
        </p>
        <div className="modal__btnContainer">
            <button className="modal__btn modal__cancelBtn">
                No, cancel
            </button>
            <button className="modal__btn modal__approveBtn">
                Yes, delete
            </button>
        </div>
    </dialog>
  )
}

export default Modal