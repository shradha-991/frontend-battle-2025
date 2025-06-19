// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
