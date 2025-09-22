// -------------------------
// MODAL HANDLING
// -------------------------
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

// -------------------------
// PROJECTS – MODAL CONTENT
// -------------------------
const projectDetails = {
  sentiment: `
    <h2>Bitcoin Tweet Sentiment Analysis</h2>
    <p>Comparative sentiment analysis of 2,000 Bitcoin tweets using four approaches:</p>
    <ul>
      <li><strong>VADER</strong> (dictionary-based): fast, rule-based sentiment scoring.</li>
      <li><strong>RNN</strong>: sequence modeling, prone to overfitting.</li>
      <li><strong>Pre-trained DistilBERT</strong>: strong baseline.</li>
      <li><strong>Fine-tuned DistilBERT</strong>: best accuracy & efficiency.</li>
    </ul>
  
    <a href="https://github.com/Floriplaku/sentiment-analysis-bitcoin" 
       target="_blank" class="btn inside-code">
       <!-- GitHub SVG icon -->
       <svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.3-1.5-1.7-1.5-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18 6.7 19 7 19 7c.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/></svg>
       Inside the Code
    </a>
  `,
  codecademy: `
    <h2>Codecademy BI & Python Mini-Projects</h2>
    <p>Collection of mini-projects covering BI, Python, and data analysis:</p>
    <ul>
      <li><strong>Insurance Costs:</strong> OOP + Pandas approaches</li>
      <li><strong>Hurricane Analysis:</strong> data cleaning, regional impact</li>
      <li><strong>Coded Correspondence:</strong> Caesar & Vigenère ciphers</li>
      <li><strong>Page Visits Funnel:</strong> conversion metrics & abandonment</li>
    </ul>

    <a href="https://github.com/Floriplaku/codecademy-bi-exercises" 
       target="_blank" class="btn inside-code">
       <svg viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.3-1.5-1.7-1.5-1.7-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C18 6.7 19 7 19 7c.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/></svg>
       Inside the Code
    </a>
  `
};

// -------------------------
// EVENT LISTENERS
// -------------------------

// Open modal on Dive In click
document.querySelectorAll(".dive-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const project = btn.closest(".project-circle").getAttribute("data-project");
    modalBody.innerHTML = projectDetails[project];
    modal.style.display = "block";
    e.stopPropagation();
  });
});

// Close modal (X, outside click, Escape)
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
window.addEventListener("keydown", e => {
  if (e.key === "Escape") modal.style.display = "none";
});

// -------------------------
// NAV HIGHLIGHT ON SCROLL
// -------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// -------------------------
// THEME TOGGLE
// -------------------------
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
