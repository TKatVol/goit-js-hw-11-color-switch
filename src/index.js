const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const DELAY = 1000;

const refs = {
  startBtn: document.querySelector('button[data-action=start]'),
  stopBtn: document.querySelector('button[data-action=stop]'),
}

refs.startBtn.addEventListener('click', startColorsSwitch);

function startColorsSwitch() {
  
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  
  const intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, DELAY);

  refs.stopBtn.addEventListener('click', () => {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    
    clearInterval(intervalId);
  });
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};