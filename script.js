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

/*
//* Functions Accepting Callback Functions
const oneWord = function(str) { // This function replacing the spaces that in the sentence with ('') nothing basically to set the sentence to one word in lower case.
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
*/


/*
//* Functions Returning Functions.
const greet = function(greating) {
    return function(name) {
        console.log(greating, name)
    }
}

const greetHey = greet("Hey")
greetHey('Jonas')
greetHey('Tal')

//Challenge
const greetArr = greating => name => console.log(`${greating} ${name}`)
greetArr('Hi')('Jonas')
*/

//* The call and apply methods
const lufthansa = {
    airLines: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airLines} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
}
lufthansa.book(239, 'Jonas Schmedtmann')
lufthansa.book(459, 'John Smith')
lufthansa.book(459, 'Tal Poris')


const eurowings = {
    airLines: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book
    // does NOT work
    // book(23, 'Sarah Williams')

// Call method
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings)

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)

const swiss = {
    airLines: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Jake Choen')
console.log(swiss)

// Apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

book.call(swiss, ...flightData)


//* The Bind Method
// book.call(eurowings, 23, 'Sarah Williams')
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)
bookEW(23, 'Steven Williams')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Jonas Schmidtmann')
bookEW23('Martha Cooper')

// With Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane = function() {
    console.log(this)

    this.planes++
        console.log(this.planes)
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial application
const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100))
console.log(addVAT(23))


//* Challenge
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );
        console.log(answer);

        // Register answer
        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Poll results are 13, 2, 4, 1
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });