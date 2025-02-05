// Function to reveal the case image when the button is clicked
function revealImage() {
  var imageContainer = document.getElementById("image-container");
  imageContainer.style.display = "block";
}

// Changes the selected tab in the case
function change_tab(tab_id) {
  var tabs = document.querySelectorAll("ul li");
  var contents = document.querySelectorAll(".tab-content");
  
  // Remove the 'selected' class from all tabs
  tabs.forEach(function (tab) {
    tab.classList.remove("selected");
    tab.classList.add("notselected");
  });
  
  // Hide all tab content
  contents.forEach(function (content) {
    content.classList.remove("active");
  });
  
  // Add 'selected' class to the clicked tab
  document.getElementById(tab_id).classList.add("selected");
  
  // Show the content related to the clicked tab
  document.getElementById(tab_id + "_content").classList.add("active");
}

// Function to handle the suspect input and update solved cases
function submitSuspect() {
  var suspectInput = document.getElementById("suspect-input").value.toUpperCase().trim();
  var result = document.getElementById("result");

  if (suspectInput === "B") {
    result.textContent = "Correct! The Lady-in-Waiting is the thief!";
    // Updating the solved case on the profile page
    localStorage.setItem("easy_case_solved", "true");
    updateProfile(); // Function to update profile
  } else {
    result.textContent = "Incorrect! Try again.";
  }
}

// Function to update the profile page with solved case
function updateProfile() {
  var solvedCase = localStorage.getItem("easy_case_solved");
  if (solvedCase === "true") {
    // Assume we have an element on the profile page to show solved cases
    document.getElementById("easy-case-status").textContent = "Easy Case: Solved!";
  }
}
