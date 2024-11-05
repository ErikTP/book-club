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

    if(title && author !== "") {
        // Create a new list item element
        const listItem = document.createElement("li");
        listItem.innerHTML = titleAndAuthor;
        console.log('hej');

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
        alert("Boken har lagts till!");
    
    } else {
        alert("Du måste fylla i både bok och författare.");
    }
}
