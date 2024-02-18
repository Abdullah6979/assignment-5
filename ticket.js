var selectedSeats = [];

function selectSeat(seatId) {
    var seatButton = document.getElementById(seatId);
    if (seatButton.classList.contains('selected')) {
        seatButton.classList.remove('selected');
        selectedSeats.splice(selectedSeats.indexOf(seatId), 1);
    } else {
        if (selectedSeats.length < 4) {
            seatButton.classList.add('bg-green-500');
            selectedSeats.push(seatId);
        } else {
            alert('You can only select up to 4 seats.');
        }
    }
}