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


<<<<<<< HEAD
function bookInput() {
=======
// Function starts after form is submitted (on-click)
/*function bookInput() {

>>>>>>> 01b79222b45cccb6aa99ff1a037800a18d7511a8
    // Initialize an empty array
    const inputArray = [];

    // Get the input elements
    const inputTitle = document.getElementById("bookTitleInput");
    const inputAuthor = document.getElementById("bookAuthorInput");

    // Get the values of the input elements
    const title = inputTitle.value;
    const author = inputAuthor.value;

    // Add the values to the array
    inputArray.push(title, author);

    // Print the array to the console
    console.log(inputArray);

    // Create a string for title and author
    let reviewContent = inputArray[0] + " av " + inputArray[1];

    // Create paragraph element with the content
    const para = document.createElement("p");
    para.innerHTML = reviewContent;

    // Append to the "myBook" element
    document.getElementById("myBook").appendChild(para);

    // Display alert message
    alert("Boken har lagts till");
}
