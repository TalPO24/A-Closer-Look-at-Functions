'use strict';

//* Default Parameters
const bookings = []

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) { // We declared default values to the function.
    // ES5
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 2)
createBooking('LH123', 5)
createBooking('LH123', undefined, 1000) // We use undefined to set the 'numPassengers' to the default value.