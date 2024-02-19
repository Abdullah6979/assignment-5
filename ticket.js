
var selectedSeats = [];
var seatNumber = 1;

function selectSeat(seatId) {
    var seatButton = document.getElementById(seatId);
    if (seatButton.classList.contains('selected')) {
        seatButton.classList.remove('selected');
        selectedSeats.splice(selectedSeats.indexOf(seatId));
        
    } else {
        if (selectedSeats.length < 4) {
            seatButton.classList.add('bg-green-500');
            selectedSeats.push(seatId);
            
        } else {
            alert('You can only select up to 4 seats.');
        }
    }
    
    updateSelectedSeats();
}



function updateSelectedSeats() {
    var selectedSeatsElement = document.getElementById('selectedSeats');
    selectedSeatsElement.textContent = selectedSeats.length;
}

function updateSeatNumber(seatButton) {
    seatButton.textContent += " (Seat " + seatNumber + ")";
    seatNumber++;
}

