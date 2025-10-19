const movieSelect = document.getElementById('movie-select');
const dateSelect = document.getElementById('date-select');
const showtimeSelect = document.getElementById('showtime-select');
const searchInput = document.getElementById('search-bar');
const movieList = document.getElementById('movie-list');
const ticketingSection = document.querySelector('.ticketing');
const cashoutSection = document.querySelector('.cashout');

movieSelect.addEventListener('change', updateCheckoutPage);
dateSelect.addEventListener('change', updateCheckoutPage);
showtimeSelect.addEventListener('change', updateCheckoutPage);
searchInput.addEventListener('input', filterMovies);

function updateCheckoutPage() {
  const selectedMovie = movieSelect.value;
  const selectedDate = dateSelect.value;
  const selectedShowtime = showtimeSelect.value;

  document.getElementById('selected-movie').textContent = selectedMovie;
  document.getElementById('selected-date').textContent = selectedDate;
  document.getElementById('selected-showtime').textContent = selectedShowtime;

  document.getElementById('receipt-movie').textContent = selectedMovie;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  alert('Thank you for your purchase!');
});

const leftBtn = document.querySelector('.carousel-btn.left-btn');
const rightBtn = document.querySelector('.carousel-btn.right-btn');

leftBtn.addEventListener('click', () => {
  movieList.scrollBy({ left: -150, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  movieList.scrollBy({ left: 150, behavior: 'smooth' });
});

const bookButtons = document.querySelectorAll('.book-ticket');
bookButtons.forEach(button => {
  button.addEventListener('click', (event) => {
      const movieItem = event.target.closest('li');
      const movieTitle = movieItem.querySelector('h3').textContent.replace('Movie 1: ', '').replace('Movie 2: ', '').replace('Movie 3: ', '');
      window.location.href = 'checkout.html'; 
      movieSelect.value = movieTitle;
      updateCheckoutPage();

      ticketingSection.style.display = 'block';
      cashoutSection.style.display = 'block';
  });
});

function filterMovies() {
  const query = searchInput.value.toLowerCase();
  const movieItems = movieList.querySelectorAll('li');

  movieItems.forEach(item => {
      const title = item.dataset.title.toLowerCase();
      if (title.includes(query)) {
          item.style.display = '';
      } else {
          item.style.display = 'none';
      }
  });
}

