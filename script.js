// Function to play sound
function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.volume = 1.0;
    audio.play().catch(error => console.log("Sound play blocked:", error));
}

// Enable sound, remove overlay, and reveal hearts on first interaction
document.addEventListener("click", function enableAudio() {
    let overlay = document.getElementById("overlay");
    let heartsContainer = document.querySelector(".buttons-grid");

    // Hide the overlay
    overlay.classList.add("hidden");

    // Show hearts with animation
    heartsContainer.classList.add("visible");

    // Add hover sound effect to hearts
    let buttons = document.querySelectorAll(".button-item img");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            playSound("sounds/hover.mp3");
        });
    });
    

    // Remove event listener so it runs only once
    document.removeEventListener("click", enableAudio);
    
    console.log("User interacted! Hearts are now visible, and sounds are enabled.");
});

function changeMedia(source) {
    let mediaContainer = document.querySelector(".media-container");
    let mediaElement = document.getElementById("media");

    // Clear existing media
    mediaContainer.innerHTML = "";

    if (source.endsWith(".mp4")) {
        // Create video element
        let video = document.createElement("video");
        video.setAttribute("src", source);
        video.setAttribute("controls", "true");
        video.setAttribute("autoplay", "true");
        video.style.width = "100%";
        video.style.borderRadius = "10px";

        mediaContainer.appendChild(video);
    } else {
        // Create image element
        let img = document.createElement("img");
        img.setAttribute("src", source);
        img.setAttribute("alt", "Step Image");
        img.style.width = "100%";
        img.style.borderRadius = "10px";

        mediaContainer.appendChild(img);
    }
}
// Function to play a sound
function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.volume = 1.0; // Set full volume
    audio.play().catch(error => console.log("Sound play blocked:", error));
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function() {
            playSound("sounds/click.mp3"); // Click sound
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let mediaOverlay = document.getElementById("mediaOverlay");

    // Remove overlay when clicked
    mediaOverlay.addEventListener("click", function() {
        mediaOverlay.classList.add("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let boopButton = document.getElementById("boop-button");
    let boopSound = document.getElementById("boop-sound");

    boopButton.addEventListener("click", function() {
        if (boopSound.paused) {
            boopSound.play();
        } else {
            boopSound.pause();
        }
    });
});