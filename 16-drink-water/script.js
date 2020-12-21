const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Highlight selected number of cups
const highlightCups = (count) => {
  if (
    smallCups[count].classList.contains('full') &&
    !smallCups[count].nextElementSibling?.classList.contains('full')
  ) {
    count--;
  }

  smallCups.forEach((cup, i) => {
    if (i <= count) cup.classList.add('full');
    else cup.classList.remove('full');
  });

  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 300}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

smallCups.forEach((cup, i) =>
  cup.addEventListener('click', () => highlightCups(i))
);
