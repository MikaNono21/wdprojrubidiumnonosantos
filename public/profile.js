// When the page loads, check if the username is in sessionStorage
window.onload = function () {
  const storedUsername = sessionStorage.getItem("username");
  if (!storedUsername) {
    const userNameInput = prompt("What is your name, detective?");
    if (userNameInput) {
      sessionStorage.setItem("username", userNameInput); // Store the name
      document.getElementById(
        "username"
      ).innerText = `Hello, Detective ${userNameInput}!`; // Update the greeting
    }
  } else {
    // If username is already stored, use it
    document.getElementById(
      "username"
    ).innerText = `Hello, Detective ${storedUsername}!`;
  }

  // Update the case statuses from localStorage
  updateCaseStatus();
};

document.getElementById("upload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profile-pic").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});


function logout() {
  // Remove username from sessionStorage when logging out
  sessionStorage.removeItem("username");
  alert("Logging out...");
  window.location.href = "index.html"; // Redirect to home page
}
