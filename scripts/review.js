function reviewInput() {
// Initialize an empty array
const inputArray = [];

// Get the input elements
const inputName = document.getElementById("reviewNameInput");
const inputText = document.getElementById("reviewTextInput");

// Get the values of the input elements
const name = inputName.value;
const text = inputText.value;

// Add the values to the array
inputArray.push(name, text);

// Print the array to the console
console.log(inputArray);

// Create a string for name and text
let reviewContent = inputArray[0] + ": " + inputArray[1];

// Create paragraph element with the content
const para = document.createElement("p");
para.innerHTML = reviewContent;

// Append to the "myFeed" element
document.getElementById("myFeed").appendChild(para);

// Display alert message
alert("Recensionen har lagts till");
}
