const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const leadForm = document.querySelector(".lead-form");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open", !expanded);
  });
}

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = leadForm.querySelector("button[type='submit']");

    if (button) {
      const originalText = button.textContent;
      button.textContent = "Conceptaanvraag ontvangen";
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2200);
    }
  });
}
