// ==============================
// 🎨 Light/Dark Mode Toggle
// ==============================
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==============================
// 🔢 Counter Functionality
// ==============================
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// ==============================
// ❓ Collapsible FAQ Section
// ==============================
const question = document.getElementById("faqQuestion");
const answer = document.getElementById("faqAnswer");

question.addEventListener("click", () => {
  const isVisible = answer.style.display === "block";
  answer.style.display = isVisible ? "none" : "block";
  question.textContent = isVisible ? "What is JavaScript? ▼" : "What is JavaScript? ▲";
});

// ==============================
// 🧾 Form Validation
// ==============================
const form = document.getElementById("userForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic validation
  if (name === "" || email === "" || password === "") {
    msg.textContent = "❌ All fields are required.";
    msg.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    msg.textContent = "❌ Please enter a valid email address.";
    msg.style.color = "red";
  } else if (password.length < 6) {
    msg.textContent = "❌ Password must be at least 6 characters long.";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Form submitted successfully!";
    msg.style.color = "green";
    form.reset();
  }
});
