// -------- 1. DOM Manipulation --------
const header = document.querySelector(".header");
const greeting = document.createElement("p");

const hour = new Date().getHours();
let message;

if (hour < 12) {
  message = "Good Morning! Welcome to my portfolio.";
} else if (hour < 18) {
  message = "Good Afternoon! Glad to have you here.";
} else {
  message = "Good Evening! Thanks for visiting my portfolio.";
}

greeting.textContent = message;
greeting.classList.add("greeting-message"); // style comes from CSS
header.appendChild(greeting);


// -------- 3. Form Validation --------
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      feedback.textContent = "⚠️ Please fill in all fields.";
      feedback.className = "error";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      feedback.textContent = "⚠️ Please enter a valid email address.";
      feedback.className = "error";
      return;
    }

    feedback.textContent = "✅ Message sent successfully!";
    feedback.className = "success";
    form.reset();
  });
}

// -------- 5. Responsive Dynamic Font --------
window.addEventListener("resize", () => {
  if (window.innerWidth < 500) {
    document.body.classList.add("small-font");
  } else {
    document.body.classList.remove("small-font");
  }
});

// ===== Dark and Light Mode Toggle =====
const modeBtn = document.getElementById("modeBtn");

// Check if user has a saved mode preference
const savedMode = localStorage.getItem("theme");
if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
  modeBtn.textContent = "Switch to Light Mode";
}

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeBtn.textContent = "Switch to Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    modeBtn.textContent = "Switch to Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

