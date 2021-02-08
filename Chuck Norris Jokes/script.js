const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();
async function generateJoke() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();

  jokeEl.innerHTML = data.value;
}
