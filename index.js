/* @format */

// Select the dropdown button and sidebar close button
const dropdownButton = document.getElementById("dropdown-btn");
const closeSidebarButton = document.querySelector(".dropdown-close");
const sidebar = document.querySelector(".side-bar");

// Event listener to show the sidebar when the dropdown button is clicked
dropdownButton.addEventListener("click", function () {
  sidebar.style.right = "0";
});

// Event listener to hide the sidebar when the close button is clicked
closeSidebarButton.addEventListener("click", function () {
  sidebar.style.right = "-250px";
});
