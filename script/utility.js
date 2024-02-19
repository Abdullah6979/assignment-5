function selectSeat(seatId) {
    const seatButton = document.getElementById(seatId);

    if (!seatButton.classList.contains('bg-green-500')) {
        seatButton.classList.add('bg-green-500');

        const seatName = seatButton.innerText;

        const price = 550;

        const finalTotalElement = document.getElementById('final-number');
        const currentTotal = parseInt(finalTotalElement.innerText.split(' ')[1]);
        const newTotal = isNaN(currentTotal) ? price : currentTotal + price;
        finalTotalElement.innerText = `BDT ${newTotal}`;

        const grandTotalElement = document.getElementById('grand-final');
        const currentTotals = parseInt(grandTotalElement.innerText.split(' ')[1]);
        const newTotals = isNaN(currentTotals) ? price : currentTotals + price;
        grandTotalElement.innerText = `BDT ${newTotals}`;

        const seatsLeftElement = document.getElementById('seatsLeft');
        seatsLeftElement.innerText = parseInt(seatsLeftElement.innerText) - 1;

        const selectedSeatsElement = document.getElementById('selectedSeats');
        const currentSelectedSeats = parseInt(selectedSeatsElement.innerText);
        if (currentSelectedSeats < 4) {
            selectedSeatsElement.innerText = currentSelectedSeats + 1;
        } else {
            alert('Maximum 4 seats can be selected.');
            seatButton.classList.remove('bg-green-500');
            finalTotalElement.innerText = `BDT ${currentTotal}`;
            grandTotalElement.innerText = `BDT ${currentTotals}`;
            seatsLeftElement.innerText = parseInt(seatsLeftElement.innerText) + 1;
            return;
        }

        const seatClassElement = document.querySelector('.seat-class');
        const seatClassDiv = document.createElement('div');
        seatClassDiv.innerHTML = `<p class="text-xs font-normal text-[#03071299]">Economy</p>`;
        seatClassElement.appendChild(seatClassDiv);

        const priceClassElement = document.querySelector('.seat-prize');
        const priceClassDiv = document.createElement('div');
        priceClassDiv.innerHTML = `<p class="text-xs font-normal text-[#03071299]">550</p>`;
        priceClassElement.appendChild(priceClassDiv);

        const seatNameElement = document.querySelector('.seat-name');
        const seatNameDiv = document.createElement('div');
        seatNameDiv.innerHTML = `<p class="text-xs font-normal text-[#03071299]">${seatName}</p>`;
        seatNameElement.appendChild(seatNameDiv);
    }
    else {
        seatButton.classList.remove('bg-green-500');

        const finalTotalElement = document.getElementById('final-number');
        const currentTotal = parseInt(finalTotalElement.innerText.split(' ')[1]);
        finalTotalElement.innerText = `BDT ${currentTotal - 550}`;

        const selectedSeatsElement = document.getElementById('selectedSeats');
        selectedSeatsElement.innerText = parseInt(selectedSeatsElement.innerText) - 1;

        const seatClassElement = document.querySelector('.seat-class');
        seatClassElement.removeChild(seatClassElement.lastChild);

        const seatNameElement = document.querySelector('.seat-name');
        seatNameElement.removeChild(seatNameElement.lastChild);

        const priceNameElement = document.querySelector('.seat-prize');
        priceNameElement.removeChild(priceNameElement.lastChild);
    }

}


