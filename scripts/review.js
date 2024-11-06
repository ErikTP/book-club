function reviewInput() {
    let reviewForm = document.getElementById("reviewForm");
    let reviewResult = document.getElementById("reviewResult");
    const inputArray = []; // Initialize an empty array

    // Get the input elements
    const inputName = document.getElementById("reviewNameInput");
    const inputBookTitle = document.getElementById("reviewBookInput");
    const inputWriter = document.getElementById("reviewWriterInput");
    const inputRating = document.getElementById("rating");
    const inputComments = document.getElementById("comments");

    // Get the values of the input elements
    const reviewer = inputName.value;
    const bookTitle = inputBookTitle.value;
    const writer = inputWriter.value;
    const rating = inputRating.value;
    const comments = inputComments.value;

    // Add the values to the array
    inputArray.push(reviewer, bookTitle, writer, rating, comments);

    // Print the array to the console
    console.log(inputArray);

    // Check if inputs are true (are filled)
    if(reviewer && bookTitle && writer && rating && comments !== "") {
      
      // New review in li element
      const newReviewItem = document.createElement("li"); 

      // Creates and adds HTML-element for each input result
      const reviewerElement = document.createElement("p");
      reviewerElement.textContent = `Namn: ${reviewer}`;
      newReviewItem.appendChild(reviewerElement);

      const bookTitleElement = document.createElement("p");
      bookTitleElement.textContent = `Bokens titel: ${bookTitle}`;
      newReviewItem.appendChild(bookTitleElement);

      const authorElement = document.createElement("p");
      authorElement.textContent = `Bokens författare: ${writer}`;
      newReviewItem.appendChild(authorElement);

      const ratingElement = document.createElement("p");
      ratingElement.textContent = `Betyg: ${rating}`;
      newReviewItem.appendChild(ratingElement);

      const commentsElement = document.createElement("p");
      commentsElement.textContent = `Kommentar: ${comments}`;
      newReviewItem.appendChild(commentsElement);

      // Adds new review in to the result list 
      reviewResult.appendChild(newReviewItem); 

      // Reset form
      reviewForm.reset();
  
      // Display alert message
      alert("Recensionen har lagts till!");
    } else {
        alert("Du måste fylla i alla uppgifter i recensionen.");
    }
};
