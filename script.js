
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

const projects = [
  {
    title: "School Event Check-In System",
    description: "A mobile application designed to manage school events, register participants, and monitor attendance through an organized check-in system.",
    tech: "Flutter, Dart",
    role: "Mobile App Developer",
    link: "https://github.com/gemmalynbacudo18"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card project-card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tech = document.createElement("p");
  const techLabel = document.createElement("strong");
  techLabel.textContent = "Tech: ";
  tech.append(techLabel, document.createTextNode(project.tech));

  const role = document.createElement("p");
  const roleLabel = document.createElement("strong");
  roleLabel.textContent = "Role: ";
  role.append(roleLabel, document.createTextNode(project.role));

  const link = document.createElement("a");
  link.href = project.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "btn";
  link.textContent = "View Code";

  card.append(title, description, tech, role, link);
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
