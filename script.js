'use strict';

/*
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
*/

//* How passing arguments works: Value vs. Reference
const flight = 'LH234'
const jonas = {
    name: 'Jonas Schmedmann',
    passport: 23748567
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr.' + passenger.name

    if (passenger.passport === 23748567) {
        alert('Check in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas)
// console.log(flight)
// console.log(jonas)

// const flightNum = flight
// const passenger = jonas

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
}

newPassport(jonas)
checkIn(flight, jonas)