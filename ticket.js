// let selectedSeats = [];
// let seatNumber = 1;
// let seatsLeft = 8;

// function selectSeat(seatId) {
//     const seatButton = document.getElementById(seatId);
//     if (seatButton.classList.contains('selected')) {
//         seatButton.classList.remove('selected');
//         selectedSeats.splice(selectedSeats.indexOf(seatId));
//         seatsLeft++;
//     } else {
//         if (selectedSeats.length < 4 && seatsLeft > 0) {
//             seatButton.classList.add('bg-green-500');
//             selectedSeats.push(seatId);
//             seatsLeft--;
//         } else {
//             alert('You can only select up to 4 seats and there are no more available seats.');
//         }
//     }
//     updateSelectedSeats();
//     updateSeatsLeft();
// }


// function updateSelectedSeats() {
//     const selectedSeatsElement = document.getElementById('selectedSeats');
//     selectedSeatsElement.textContent = selectedSeats.length;
// }

// function updateSeatsLeft() {
//     const seatsLeftElement = document.getElementById('seatsLeft');
//     seatsLeftElement.textContent = seatsLeft;
// }

// const cards = document.querySelectorAll(".cards");

// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         const text = card.innerText;
//         console.log(text);

//     });
// });
