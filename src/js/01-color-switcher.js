const dataStart = document.querySelector('button[data-start]');
const dataStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
dataStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
  dataStart.setAttribute('disabled', true);
});

dataStop.addEventListener('click', () => {
  dataStart.removeAttribute('disabled');
  clearInterval(timerId);
});
