// Get all nav buttons and tab contents
const navBtns = document.querySelectorAll(".nav-btn")
const tabContents = document.querySelectorAll(".tab-content")

// Add click event listeners to nav buttons
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabName = btn.getAttribute("data-tab")

    // Remove active class from all buttons
    navBtns.forEach((b) => b.classList.remove("active"))

    // Remove active class from all tab contents
    tabContents.forEach((tab) => tab.classList.remove("active"))

    // Add active class to clicked button
    btn.classList.add("active")

    // Add active class to corresponding tab
    const activeTab = document.getElementById(tabName)
    if (activeTab) {
      activeTab.classList.add("active")
    }
  })
})

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#") {
      e.preventDefault()
    }
  })
})

// Add smooth scrolling on page load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize - first tab is already active
  console.log("Portfolio loaded successfully")
})
