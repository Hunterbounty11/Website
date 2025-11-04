const projects = [
  {
    title: "Reddit Clone",
    description: "A miniature forum app with posts, comments, and voting.",
    tech: ["Node.js", "PostgreSQL", "Express"],
  },
  {
    title: "Image Compressor",
    description: "Compresses images in the browser using the Canvas API.",
    tech: ["JavaScript", "HTML5", "Canvas"],
  },
  {
    title: "Portfolio Website",
    description: "This very site! Built to showcase my work.",
    tech: ["HTML", "CSS", "JS"],
  },
];

// Step 2: Select the container in your HTML
const container = document.getElementById("project-grid");

// Step 3: Loop through the projects and add them to the page
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";

  const techList = project.tech.map((t) => `<span class='tag'>${t}</span>`).join(" ");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p>${techList}</p>
  `;

  container.appendChild(card);
});
