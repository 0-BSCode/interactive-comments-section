export function updateText(event, replyFor, textInput) {
    if (replyFor != '' && event.target.value == `@${replyFor.user.username}`) return;
    textInput.set(event.target.value);
}

// Buggy
export function removeReply(importantIDs) {
    importantIDs.replyBtn.set(0);
}

export function unfocusForm() {
    let commentTextArea = document.querySelector('.form__input');
    commentTextArea.classList.remove("form__input--warning");
}