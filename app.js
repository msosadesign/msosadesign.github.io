async function getJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

let hiddenProjects = [];

getJSON("projects.json").then((json) => {
  json.forEach((project) => {
    const projectCard = document.createElement("article");
    projectCard.innerHTML = `
          <img
            src="${project.cover}"
            alt="${project.name} cover"
          />
          <div>
            <h3>${project.name}</h3>
            <p class="caption">
              ${project.description}
            </p>
          </div>
    `;
    projectCard.classList.add("project", "card-style", "hidden");
    hiddenProjects.push(projectCard);
    document.getElementById("project-grid").appendChild(projectCard);

    showHiddenElements();
  });
});

function showHiddenElements() {
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

  hiddenProjects.forEach((el) => {
    observer.observe(el);
  });
}

const modal = document.getElementById("myModal");

getJSON("projects.json").then((projects) => {
  for (let i = 0; i < hiddenProjects.length; i++) {
    const el = hiddenProjects[i];

    // Event Listener
    el.addEventListener("click", () => {
      modal.classList.add("show-modal");
      document.getElementById('article-header').style.backgroundImage=`linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73)), url(${projects[i].cover})`;
      document.getElementById("article-title").textContent = `${projects[i].name}`;
      document.getElementsByClassName(
        "popup-article"
      )[0].innerHTML = `${projects[i].article}`;
      modal.scrollTop = 0;
    });
  }
});

document.getElementById("close-modal").addEventListener("click",()=> {
  modal.classList.remove("show-modal");
});

window.onclick = function(event) {
  if (event.target == modal) {
  document.getElementById('article-title').classList.remove("show");
  modal.classList.remove("show-modal");
  }
};