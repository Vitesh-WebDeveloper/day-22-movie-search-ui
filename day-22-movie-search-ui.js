const loading = document.getElementById("loading");
const error = document.getElementById("error");
const noResults = document.getElementById("noResults");
const container = document.getElementById("moviesContainer");

const movies = [
  {
    title: "Inception",
    year: "2010",
    poster: "https://via.placeholder.com/150"
  },
  {
    title: "Interstellar",
    year: "2014",
    poster: "https://via.placeholder.com/150"
  }
];

function clearStates() {
  error.textContent = "";
  noResults.textContent = "";
  container.innerHTML = "";
}

function renderMovies(movieList) {
  clearStates();

  if (movieList.length === 0) {
    noResults.textContent = "No movies found";
    return;
  }

  movieList.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.poster}" />
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
    `;

    container.appendChild(card);
  });
}

function loadMovies() {
  clearStates();
  loading.textContent = "Loading...";

  setTimeout(() => {
    loading.textContent = "";
    renderMovies(movies);
  }, 1000);
}

loadMovies();