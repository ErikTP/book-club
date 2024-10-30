// Trash icon for delete button
const trashIcon = '<i class="fa-solid fa-trash" id="itemDelete"></i>';

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

    // Combine title and author for display
    const titleAndAuthor = inputArray[0] + " av " + inputArray[1];

    // Create a new list item element
    const listItem = document.createElement("li");
    listItem.innerHTML = titleAndAuthor;

    // Add click event to show or hide more information
    listItem.addEventListener("click", function() {
        toggleBookDetails(listItem, title, author);
    });

    // Create a delete button and attach the delete functionality
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = trashIcon;
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent triggering book details display on delete
        listItem.remove(); // Remove the list item
    });
    listItem.appendChild(deleteButton);

    // Append the new item to the book list
    document.getElementById("myBook").appendChild(listItem);

    // Clear the input fields
    inputTitle.value = "";
    inputAuthor.value = "";

    // Send a message in alert pop up
    alert("Boken har lagts till");
}

// Function to toggle the visibility of book details
function toggleBookDetails(listItem, title, author) {
    // Check if a details section already exists below the clicked item
    const existingDetails = listItem.nextElementSibling;
    
    if (existingDetails && existingDetails.classList.contains("details")) {
        // If it exists, remove it to hide details
        existingDetails.remove();
    } else {
        // If it doesn't exist, create a new details div
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("details");
        detailsDiv.style.marginTop = "10px"; // Optional: Add some space for styling

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

        // Insert the details div directly after the clicked list item
        listItem.insertAdjacentElement("afterend", detailsDiv);
    }
}

//använde skript från jespers todolista-projekt och med tre promptar till chatgpt kunde vi lägga till papperskorgen
//funktion för papperskorgen, samt att texten visas under istället för över och även går att dölja med ytterligare klick
//hade inte jättemycket tid så jag tog den lata vägen denna gången bara för att få det gjort
