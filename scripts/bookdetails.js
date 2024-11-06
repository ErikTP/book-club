// JESPERS
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
