const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Fetch joke
const getJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const { joke } = await fetch(
    'https://icanhazdadjoke.com',
    config
  ).then((res) => res.json());
  jokeEl.innerHTML = joke;
};

getJoke();
jokeBtn.addEventListener('click', getJoke);
