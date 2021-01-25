const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('prev');
const rightBtn = document.getElementById('next');

const img = document.querySelectorAll('img');

let idx = 0;

const run = () => {
  idx++;
  changeImage();
};

const changeImage = () => {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
};

let interval = setInterval(run, 2000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
