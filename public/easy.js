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

  // Get the detective's name from sessionStorage
  const detectiveName = sessionStorage.getItem("username");

  if (suspectInput === "B") { // Correct suspect is 'B' (Lady-in-Waiting)
    result.textContent = "Correct! The Lady-in-Waiting is the thief!";
    
    // Update the case as solved in localStorage, using the detective's name
    localStorage.setItem(`${detectiveName}_easy_case_solved`, "true");
    
    // update the profile to reflect the solved case
    updateProfile();
  } else {
    result.textContent = "Incorrect! Try again.";
  }
}


// Function to update the profile page with solved case
function updateProfile() {
  // Get the solved case status from localStorage
  var solvedCase = localStorage.getItem("easy_case_solved");

  // If the case is marked as solved, update the profile
  if (solvedCase === "true") {
    // Update the status of the easy case in the profile
    document.getElementById("easy-case-status").textContent = "Easy Case: Solved!";
    
    // update the total cases solved 
    let totalSolved = parseInt(document.getElementById("cases-solved").textContent) || 0;
    document.getElementById("cases-solved").textContent = totalSolved + 1;
  }
}
