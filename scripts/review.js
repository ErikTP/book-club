function reviewInput() {
    let reviewForm = document.getElementById("reviewForm");
    const inputArray = []; // Initialize an empty array

    // Get the input elements
    const inputName = document.getElementById("reviewNameInput");
    const inputText = document.getElementById("reviewTextInput");
    const inputRating = document.getElementById("rating");
    const inputComments = document.getElementById("comments");

    // Get the values of the input elements
    const name = inputName.value;
    const text = inputText.value;
    const rating = inputRating.value;
    const comments = inputComments.value;

    // Add the values to the array
    inputArray.push(name, text, rating, comments);

    // Print the array to the console
    console.log(inputArray);

    // Create a string for name and text
    let reviewContent = `Recension av ${inputArray[0]}: "${inputArray[1]}" - Betyg: ${inputArray[2]} - Kommentar: ${inputArray[3]}`;

    // Create paragraph element with the content
    const para = document.createElement("p");
    para.innerHTML = reviewContent;

    // Append to the "myFeed" element
    document.getElementById("reviewResult").appendChild(para);

    // Reset form
    reviewForm.reset();

    // Display alert message
    alert("Recensionen har lagts till!");
}
