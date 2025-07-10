// Future JS functionality will go here
console.log("Site loaded successfully");
// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

toggleBtn?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const nextTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});
