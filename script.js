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

/*
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
*/

//* Functions Accepting Callback Functions

const oneWord = function(str) { // This function replacing the spaces that in the sentence with ('') nothing basically to set the sentence to one word.
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function(str) { // This function set the first word to upper case in a sentence.
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

// Higher-order function
const transform = function(str, fn) {
    console.log(`Originat string: ${str}`)
    console.log(`Transformed string:${fn(str)}`)
}
transform('JavaScript is the best', upperFirstWord)
transform('JavaScript is the best', oneWord)

// JavaScript uses callback all the time.
const high5 = function() {
    console.log('🖐️')
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

//* Why our callback functions so much used in JavaScrit?

//* 1) The first big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts.

//* 2) There is a second way more important advantage, wich is the fact that callback functions allow us to create abstraction. Basically what abstraction means is that we hide the detail of some code implementation because we dont really care about all that detail. And this allow us to think about problems at a higher more abstract level.And so thats why its calld OBSTRACTION.