async function loadHTML(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return;
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("Could not load " + filePath);
    target.innerHTML = await response.text();
  } catch (error) {
    target.innerHTML = '<p style="color:#ff9b9b">Unable to load ' + filePath + '. Please run this site using a local server (such as VS Code Live Server).</p>';
    console.error(error);
  }
}

async function loadPortfolioParts() {
  await Promise.all([
    loadHTML("header", "header.html"),
    loadHTML("footer", "footer.html"),
    loadHTML("about-section", "sections/about.html"),
    loadHTML("skills-section", "sections/skills.html"),
    loadHTML("education-section", "sections/education.html"),
    loadHTML("projects-section", "sections/projects.html"),
    loadHTML("contact-section", "sections/contact.html")
  ]);
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
loadPortfolioParts();
