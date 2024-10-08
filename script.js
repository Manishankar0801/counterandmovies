//variables
let count = 4;
let movies = ["Pushpa", "Game Changer", "Devara", "RRR"];
let newMovie = "";

let countEl = document.getElementById("count");
let addBtnEl = document.getElementById("add__btn");
let subBtnEL = document.getElementById("sub__btn");
let moviesEl = document.getElementById("movies");
let inputEl = document.querySelector(".movie__input");

const incrementCount = () => {
  count++;
  countEl.innerHTML = count;
  console.log(count);
};
function decrementCount() {
  count--;
  countEl.innerHTML = count;
}

const displayMovies = () => {
  moviesEl.innerHTML = "";
  movies.map((movie) => {
    let movieEl = document.createElement("li");
    movieEl.innerHTML = movie;
    moviesEl.appendChild(movieEl);
  });
};

const addMovie = () => {
  let newMovie = inputEl.value.trim();
  movies.push(newMovie);
  newMovie = "";
  displayMovies();
  inputEl.value = "";
};

const handleInput = (e) => {
  if (e.key === "Enter") {
    addMovie();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  countEl.innerHTML = count;
  displayMovies();
});

addBtnEl.addEventListener("click", incrementCount);
subBtnEL.addEventListener("click", decrementCount);
inputEl.addEventListener("keyup", handleInput);
//addmoviebtn.addEventListener("", handleInput);
