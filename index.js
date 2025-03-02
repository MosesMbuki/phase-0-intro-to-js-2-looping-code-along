const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const messages = writeCards(names, event);


function writeCards(names, event) {
    const messages = []; // Create an empty array to store the messages
    let i = 0; // Initialize a counter
  
    // Use a while loop to iterate over the names array
    while (i < names.length) {
      // Construct the thank-you message for each name
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message); // Add the message to the array
      i++; // Increment the counter
    }
  
    return messages; // Return the array of messages
  }

// countDown function
startingNumber = 10
function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }

  console.log(messages)