export const enableBtn = btn => {
    btn.disabled = false;
    const btnClass = btn.classList.value.split(' ');
    btn.classList.remove(`${btnClass[0]}--disabled`);
    btn.classList.remove(`${btnClass[1]}--disabled`);
  }

export const disableBtn = btn => {
    btn.disabled = true;
    const btnClass = btn.classList.value.split(' ');
    btn.classList.add(`${btnClass[0]}--disabled`);
    btn.classList.add(`${btnClass[1]}--disabled`);
  }