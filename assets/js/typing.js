

// script.js
document.addEventListener("DOMContentLoaded", function() {
    let button= document.getElementsByClassName("button-container");
    
    const textElement = document.getElementById("typing-text");
    const cursorElement = document.getElementById("cursor");
    let typingTimeout;

    function typeText(text, index) {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            typingTimeout = setTimeout(() => typeText(text, index), 10); // Adjust typing speed by changing the timeout value
        } else {
            cursorElement.style.display = "none"; // Hide cursor after typing is complete
        }
    }

    window.startTyping = function(text) {
        clearTimeout(typingTimeout); // Clear any existing typing effect
        textElement.innerHTML = ""; // Clear the current text
        cursorElement.style.display = "inline"; // Show the cursor
        typeText(text, 0);
    }
});
