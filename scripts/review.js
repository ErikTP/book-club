// Function starts after form is submitted (on-click)
function reviewInput() {

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

    // Print array to the document (id: message)
    let titleAndAuthor = inputArray[0] + " av " + inputArray[1];

    // document.getElementById("message").innerHTML = titleAndAuthor;

    // Create element:
    const para = document.createElement("p");
    para.innerHTML = titleAndAuthor;

    // Append to another element:
    document.getElementById("myFeed").appendChild(para);

    // Send a message in alert pop up
    alert("Recensionen har lagts till");

}