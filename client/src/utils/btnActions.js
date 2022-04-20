import { updateComment } from '../actions/comments'
import { enableBtn, disableBtn } from './toggleBtn';
import {getUpdatedComment} from './commentProcessing'


export function handleReply(event, importantIDs) {
    event.preventDefault();
    const elem = event.target;
    let elemId = elem.getAttribute('dataid');
    if (elemId == null) elemId = elem.parentElement.getAttribute('dataid');

    elemId == importantIDs.replyBtn.get? importantIDs.replyBtn.set(0): importantIDs.replyBtn.set(elemId);
}

export function handleUpdate(event, comment, dispatch, editing) {
    event.preventDefault();

    let textArea = document.querySelector(`.body__input[dataid="${comment.id}"]`);
    if (textArea == null) textArea = document.querySelector(`.body__input--desktop[dataid="${comment.id}"]`);

    let finalContent = comment.replyingTo != undefined? textArea.value.split(' ').slice(1).join(' '): textArea.value;

    let updatedComment = getUpdatedComment(comment, {property: 'content', value: finalContent});
    dispatch(updateComment(updatedComment));
    editing.set(!editing.get);
}

export function handleEdit(event, editing) {
    event.preventDefault();
    editing.set(!editing.get);
}

export function incrementScore(event, comment, dispatch) {
    event.preventDefault();

    let updatedComment = getUpdatedComment(comment, {property: 'score', value: comment.score + 1});
    dispatch(updateComment(updatedComment));

    disableBtn(event.target);

    let minusBtn = document.querySelector(`.footer__voteDown[dataid="${comment.id}"]`);

    if (minusBtn == null) minusBtn = document.querySelector(`.sidebar__voteDown[dataid="${comment.id}"]`);
    enableBtn(minusBtn);
}

export function decrementScore(event, comment, dispatch) {
    event.preventDefault();

    let updatedComment = getUpdatedComment(comment, {property: 'score', value: comment.score - 1});
    dispatch(updateComment(updatedComment));

    disableBtn(event.target);

    let plusBtn = document.querySelector(`.footer__voteUp[dataid="${comment.id}"]`);
    if (plusBtn == null) plusBtn = document.querySelector(`.sidebar__voteUp[dataid="${comment.id}"]`);

    enableBtn(plusBtn);
}

export function showModal(event, showDeleteModal, importantIDs, comment) {
    event.preventDefault();
    showDeleteModal.set(true);
    importantIDs.deleteBtn.set(comment._id);
}
