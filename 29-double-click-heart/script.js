const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let likeCount = 0;

// loveMe.addEventListener('dbclick', (e) => {
//   console.log('dbclcik');
// });

// Custom double click function
let clickTime = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 500) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList = 'fas fa-heart';

  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  e.target.appendChild(heart);
  setTimeout(() => heart.remove(), 600);

  likeCount++;
  times.innerText = likeCount;
};
