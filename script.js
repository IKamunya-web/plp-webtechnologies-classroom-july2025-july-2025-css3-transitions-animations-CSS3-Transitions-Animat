// === Part 2: Functions ===

// Global scope variable
let globalMessage = "Result: ";

// Function with parameter & return value
function calculateSquare(num) {
  let result = num * num;  // local scope variable
  document.getElementById("result").textContent = globalMessage + result;
  return result; // reusability
}

// Another reusable function
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

// === Part 3: Combine JS + CSS ===

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", function() {
  toggleClass("box", "active");
});
