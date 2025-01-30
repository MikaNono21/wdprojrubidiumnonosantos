function change_tab(id) {
  // Hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Reset all tab buttons to not selected
  const buttons = document.querySelectorAll("ul li");
  buttons.forEach((button) => button.classList.remove("selected"));
  buttons.forEach((button) => button.classList.add("notselected"));

  // Show the clicked tab's content
  document.getElementById(id + "_content").classList.add("active");

  // Highlight the clicked tab button
  document.getElementById(id).classList.add("selected");
  document.getElementById(id).classList.remove("notselected");
}

//Makes a function to reveal and display the image as block
function revealImage() {
  const imageContainer = document.getElementById("image-container");
  imageContainer.style.display = "block";
}

//makes a function for the submitted answer 
function submitSuspect() {
  const input = document
    .getElementById("suspect-input") //gets the value 
    .value.trim() //trims the value 
    .toUpperCase(); //makes the value uppercase whenever 
  const resultElement = document.getElementById("result");

  if (input === "A") {
    //makes an if statement -- input A is correct-->
    alert("Correct! You’ve solved the case and earned $100,000!"); //pops an alert message of if player wins
  } else if (["B", "C", "D"].includes(input)) {
    // makes an else if statement -- input B and C are incorrect
    // Incorrect answers
    alert("Wrong suspect! Try again and Review the Evidences."); //pops an alert message of if player loses
  } else {
    alert("Invalid input. Please enter A, B, C, or D."); // pops an alert message of if player inputted wrong value
  }
}
