    // //Funktion som ska starta när man trycker på "Submit"

    // function bookInput() {
    //     //Vi skapar en tom array
    //     let inputArray = [];

    //     //Ta input elementen
    //     let inputTitle = document.getElementById("titleInput");
    //     let authorInput = document.getElementById("authorInput");

    //     //Hämta values
    //     let title = inputTitle.value;
    //     let author = inputAuthor.value;

    //     console.log(inputArray);    
    // }

    // bookInput(); 


// Function starts after form is submitted (on-click)
function bookInput() {
    // Initialize an empty array
    const inputArray = [];

    // Get the input elements
    const inputTitle = document.getElementById("titleInput");
    const inputAuthor = document.getElementById("authorInput");

    // Get the values of the input elements
    const title = inputTitle.value;
    const author = inputAuthor.value;

    // Add the values to the array
    inputArray.push(title, author);

    // Print the array to the console
    console.log(inputArray);

    // Combine title and author for display
    let titleAndAuthor = inputArray[0] + " av " + inputArray[1];

    // Create a new list item element
    const listItem = document.createElement("li");
    listItem.innerHTML = titleAndAuthor;

    // Add click event to show more information
    listItem.addEventListener("click", function() {
        showBookDetails(title, author);
    });

    // Append the new item to the book list
    document.getElementById("myBook").appendChild(listItem);

    // Clear the input fields
    inputItem.value = "";
    inputAuthor.value = "";

    // Send a message in alert pop up
    alert("Boken har lagts till");
}

// Function to show more details about a book
function showBookDetails(title, author) {
    // Create a div or section for displaying the information
    const detailsDiv = document.getElementById("bookDetails");

    // Clear previous content
    detailsDiv.innerHTML = "";

    // Add new information
    const titlePara = document.createElement("p");
    titlePara.textContent = "Titel: " + title;

    const authorPara = document.createElement("p");
    authorPara.textContent = "Författare: " + author;

    const descriptionPara = document.createElement("p");
    descriptionPara.textContent = "Beskrivning: Detta är en kort beskrivning av boken.";

    // Append the details to the details div
    detailsDiv.appendChild(titlePara);
    detailsDiv.appendChild(authorPara);
    detailsDiv.appendChild(descriptionPara);

    // Optionally, scroll to the details section or highlight it
    detailsDiv.scrollIntoView({ behavior: "smooth" });
}
