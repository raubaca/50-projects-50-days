const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav li');

listItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    item.classList.add('active');
    contents[i].classList.add('show');
  });
});

const hideAllContents = (params) => {
  contents.forEach((content) => content.classList.remove('show'));
};

const hideAllItems = (params) => {
  listItems.forEach((item) => item.classList.remove('active'));
};
