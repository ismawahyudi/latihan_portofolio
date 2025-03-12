function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const button = document.querySelector(".dark-mode-toggle");
  button.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
