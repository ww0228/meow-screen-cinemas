document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', function() {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.style.backgroundImage = "url('seat.png')"; 
        } else {
            seat.classList.add('selected');
            seat.style.backgroundImage = "url('booked.png')";
        }
    });
});

document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();

    const selectedSeats = document.querySelectorAll('.seat.selected');
    localStorage.setItem('selectedmovie',document.getElementById('movie-dropdown').value);

    if (selectedSeats.length > 0) {
        document.getElementById('message').textContent = 'Redirecting...';
        document.getElementById('message').style.color = 'green';

        setTimeout(function() {
            window.location.href = 'payment.html';
        }, 2000); 
    } else {
        document.getElementById('message').textContent = 'Choose a seat!';
        document.getElementById('message').style.color = 'red';
    }

document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("movie-dropdown");
    var ticketInfo = document.getElementById("ticket-info");
    ticketInfo.textContent = dropdown.value;

    dropdown.addEventListener("change", function() {
        ticketInfo.textContent = dropdown.value;
    });
});
    
});

