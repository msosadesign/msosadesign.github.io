async function getJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

getJSON("projects.json").then((json) => {
  json.forEach((project) => {
    const projectCard = document.createElement("article");
    projectCard.innerHTML = `
          <img
            src="https://images.unsplash.com/photo-1676924535494-d76f838f4369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <div>
            <h3>${project.name}</h3>
            <p class="caption">
              ${project.description}
            </p>
          </div>
    `;
    projectCard.classList.add("project", "card-style", "hidden");
    document.getElementById("project-grid").appendChild(projectCard);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => {
  observer.observe(el);
});