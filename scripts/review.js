function reviewInput() {
    let reviewForm = document.getElementById("reviewForm");
    const inputArray = []; // Initialize an empty array

    // Get the input elements
    const inputName = document.getElementById("reviewNameInput");
    const inputBookTitle = document.getElementById("reviewBookInput");
    const inputWriter = document.getElementById("reviewWriterInput");
    const inputRating = document.getElementById("rating");
    const inputComments = document.getElementById("comments");

    // Get the values of the input elements
    const name = inputName.value;
    const bookTitle = inputBookTitle.value;
    const writer = inputWriter.value;
    const rating = inputRating.value;
    const comments = inputComments.value;

    // Add the values to the array
    inputArray.push(name, bookTitle, writer, rating, comments);

    // Print the array to the console
    console.log(inputArray);

    // Check if inputs are true (are filled)
    if(name && bookTitle && writer && rating && comments !== "") {
      // Create a string for name and text
      let reviewContent = `Recension av ${inputArray[0]}: "${inputArray[1]}" av ${inputArray[2]} - Betyg: ${inputArray[3]} - Kommentar: ${inputArray[4]}`;

      // Create paragraph element with the content
      const para = document.createElement("p");
      para.innerHTML = reviewContent;
  
      // Append to the "myFeed" element
      document.getElementById("reviewResult").appendChild(para);
  
      // Reset form
      reviewForm.reset();
  
      // Display alert message
      alert("Recensionen har lagts till!");
    } else {
        alert("Du måste fylla i alla uppgifter i recensionen.");
    }
};
