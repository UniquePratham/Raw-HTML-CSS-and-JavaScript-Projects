// Pratham.js - small interactive touches for the HTML tutorial page
document.addEventListener("DOMContentLoaded", () => {
  // Smooth-scroll any in-page anchor links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Highlight the heading you are currently reading.
  const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
  if (!headings.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.style.transition = "color 150ms ease";
        entry.target.style.color = entry.isIntersecting ? "#2563eb" : "";
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  headings.forEach((h) => observer.observe(h));
});