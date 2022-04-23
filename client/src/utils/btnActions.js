import { updateComment } from '../actions/comments'
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

    let textArea = document.querySelector(`.body__input[dataid="${comment._id}"]`);
    if (textArea == null) textArea = document.querySelector(`.body__input--desktop[dataid="${comment._id}"]`);

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

    updatedComment = getUpdatedComment(comment, {property: 'lastVote', value: 'UP'});
    dispatch(updateComment(updatedComment));

}

export function decrementScore(event, comment, dispatch) {
    event.preventDefault();

    let updatedComment = getUpdatedComment(comment, {property: 'score', value: comment.score - 1});
    dispatch(updateComment(updatedComment));

    updatedComment = getUpdatedComment(comment, {property: 'lastVote', value: 'DOWN'});
    dispatch(updateComment(updatedComment));

}

export function showModal(event, showDeleteModal, importantIDs, comment) {
    event.preventDefault();
    showDeleteModal.set(true);
    importantIDs.deleteBtn.set(comment._id);
}
