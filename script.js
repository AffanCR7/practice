// // Contact form handler (demo)
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Thanks for reaching out! (Form doesn't actually send yet)");
// });

// Toggle menu functionality
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Typing animation
const typingText = document.querySelector(".typing-text");
const words = ["Front-End Developer", "Tech Enthusiast", "React Learner"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typingText.textContent = currentWord;

    if (!isDeleting && j === words[i].length + 1) { // Changed condition here
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      j = 0; // Reset j to 0 for the next word
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();
