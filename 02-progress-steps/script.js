const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

// Manage current step
let currentStep = 1;

// Update progress
const update = () => {
  circles.forEach((circle, i) => {
    if (i < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  /* const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; */

  progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + '%';

  /* if (currentStep === 1) {
    prev.disabled = true;
  } else if (currentStep === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  } */

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;
};

// Next step
next.addEventListener('click', () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  update();
});

// Prev step
prev.addEventListener('click', () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});
