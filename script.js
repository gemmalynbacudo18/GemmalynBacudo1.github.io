
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  themeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

const projects = [
  {
    title: "School Event Check-In System",
    description: "A mobile application designed to manage school events, register participants, and monitor attendance through an organized check-in system.",
    tech: "Flutter, Dart",
    role: "Mobile App Developer",
    source: "https://github.com/gemmalynbacudo18/GemmalynBacudo18.github.io",
    app: "https://gemmalynbacudo18.github.io/"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card project-card";

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech}</p>
    <p><strong>Role:</strong> ${project.role}</p>

    <div class="project-buttons">
      <a href="${project.source}" target="_blank"
         rel="noopener noreferrer" class="btn">
        View Source Code
      </a>

      <a href="${project.app}" target="_blank"
         rel="noopener noreferrer" class="btn">
        Run Application
      </a>
    </div>
  `;

  projectList.appendChild(card);
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Portfolio Message from " + name);

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  window.location.href =
    "mailto:gemmalynbacudo457@gmail.com?subject=" +
    subject + "&body=" + body;
});
