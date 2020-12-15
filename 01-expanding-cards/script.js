const panels = document.querySelectorAll('.panel');

// Remove active class from panels
const removeActiveClasses = () => {
  panels.forEach((panel) => panel.classList.remove('active'));
};

// Add active class on panel click
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
