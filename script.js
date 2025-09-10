// Part 2: Functions with scope, parameters, return values

// Global variable
let isBoxAnimated = false;

// Function with parameter & return value
function toggleClass(elementId, className) {
  let element = document.getElementById(elementId);
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return false;
  } else {
    element.classList.add(className);
    return true;
  }
}

// Demonstrating scope
function triggerBoxAnimation() {
  // Local variable
  let result = toggleClass("animateBox", "bounce");
  isBoxAnimated = result; // update global variable
  console.log("Is box bouncing? ", isBoxAnimated);
}

// Modal toggle function
function toggleModal() {
  let modal = document.getElementById("modal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
