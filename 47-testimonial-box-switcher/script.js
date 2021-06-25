import testimonials from './testimonials.js';

const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

let idx = 1;

const updateTestimonial = () => {
  const { name, position, photo, text, color } = testimonials[idx];
  testimonialsContainer.style.backgroundColor = color;
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) idx = 0;
};

updateTestimonial();

setInterval(updateTestimonial, 10000);
