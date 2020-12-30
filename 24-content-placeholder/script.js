const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80" alt="" />';
  title.innerText = 'Lorem ipsum dolor sit amet.';
  excerpt.innerText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, possimus!';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  name.innerText = 'John Doe';
  date.innerText = 'Dec 29, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
};

setTimeout(getData, 2000);
