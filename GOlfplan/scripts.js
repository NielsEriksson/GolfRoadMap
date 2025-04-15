// Function to toggle the side panel visibility
function toggleSidePanel() {
    const panel = document.getElementById("sidePanel");
    panel.classList.toggle("active");  // Toggle the "active" class to show/hide the panel
}

// Close the side panel if clicked outside
document.addEventListener("click", function(event) {
    const panel = document.getElementById("sidePanel");
    const burgerMenu = document.querySelector(".burger-menu");
    
    // Check if the clicked element is outside the side panel or burger menu
    if (!panel.contains(event.target) && !burgerMenu.contains(event.target)) {
        panel.classList.remove("active");  // Close the panel if clicked outside
    }
});

   // Function to toggle card content visibility
   function toggleCard(header) {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === "block";
    
    // Toggle the display of the content
    content.style.display = isVisible ? "none" : "block";
   }
