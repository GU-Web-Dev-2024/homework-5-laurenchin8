// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.
// Later, move this to an external JavaScript file for better organization.

// ART PANEL CLICK EVENT
let viewedCount = 0;

// creating function so can add event listeners to new art-panel divs too
function createArtPanelEventListners(panels) {
    for (let i = 0; i < panels.length; i++) {
        panels[i].addEventListener("click", function() {
            const currentColor = getComputedStyle(panels[i]).backgroundColor;
            // Check if current color is light grey (#eee)
            if (currentColor === "rgb(238, 238, 238)") { // This is the RGB equivalent of #eee
                viewedCount++;
                panels[i].style.backgroundColor = "lightgreen"; // Change to light green
                document.getElementById('counter').innerText = `Artworks Viewed: ${viewedCount}`;
            }
        });
    }
}

// calling function 
const initialPanels = document.querySelectorAll(".art-panel") // Gets all art-panel divs
createArtPanelEventListners(initialPanels);


// RESET BUTTON
// reset button event listener
document.getElementById('reset-button').addEventListener('click', function() {
    panels = document.querySelectorAll(".art-panel") // Gets all art-panel divs
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.setProperty("background-color", "#eee"); // Reset to default background color
    }
    viewedCount = 0;
    document.getElementById('counter').innerText = `Artworks Viewed: ${viewedCount}`;
});

// ARTWORK BUTTON
document.getElementById('add-art-button').addEventListener('click', function() {
    // First randomly select a number to get a newArtwork
    const randomNum = Math.floor(Math.random() * newArtworks.length);
    const newArtwork = newArtworks[randomNum];

    // Now add that random newArtwork art-panel
    const newArtPanel = document.createElement("div");
    newArtPanel.className = "art-panel"; // Use className instead of class
    const newImg = document.createElement("img");
    newImg.src = newArtwork.img; // Use src instead of textContent
    newImg.alt = newArtwork.title; // Set the alt text
    newArtPanel.appendChild(newImg);
    const newP = document.createElement("p");
    newP.textContent = newArtwork.title + " by " + newArtwork.artist;
    newArtPanel.appendChild(newP);
    
    // Append the new art panel to the grid
    const grid = document.querySelector(".art-grid"); // Correctly select the grid
    grid.appendChild(newArtPanel);

    // Adding event listeners for newArtPanel
    createArtPanelEventListners([newArtPanel]);
});