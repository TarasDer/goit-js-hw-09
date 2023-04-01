import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');
const startBtn = document.querySelector('button[data-start]');
const myInput = document.querySelector('#datetime-picker');

let timerIsStarted = false;
startBtn.disabled = true;

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateDiff = selectedDates[0].getTime() - new Date().getTime();
    if (dateDiff > 0 && !timerIsStarted) {
      startBtn.disabled = false;

      startBtn.addEventListener('click', () => {
        startTimer(dateDiff);
        timerIsStarted = true;
        startBtn.disabled = true;
      });
    } else {
      startBtn.disabled = true;
      if (timerIsStarted) {
        Notiflix.Notify.failure('Timer is started');
      } else {
        Notiflix.Notify.failure('Please choose the future time');
      }
    }
  },
});

function startTimer(milliseconds) {
  let timerId = setInterval(() => {
    if (milliseconds > 0) {
      printTime(convertMs(milliseconds));
      milliseconds -= 1000;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function printTime(t) {
  daysEl.textContent = addLeadingZero(t.days);
  hoursEl.textContent = addLeadingZero(t.hours);
  minutesEl.textContent = addLeadingZero(t.minutes);
  secondsEl.textContent = addLeadingZero(t.seconds);
}
