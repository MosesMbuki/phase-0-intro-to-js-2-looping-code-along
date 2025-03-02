// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const messages = writeCards(names, event);

function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

const startingNumber = 10 

function countDown(startingNumber){
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}


console.log(messages);