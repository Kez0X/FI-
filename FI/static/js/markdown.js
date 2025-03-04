document.addEventListener("DOMContentLoaded", () => {
    const url = window.location.pathname;
    const parts = url.split("/");
    const langage = parts[2];

    fetch(`/md/${langage}/intro`) // Remplace par une route API plus propre
        .then(response => response.text())
        .then(md => {
            document.getElementById("content").innerHTML = marked.parse(md);
        });

    // Simulons un sommaire
    const cours = {
        "python": ["intro", "variables", "fonctions"],
        "c": ["intro", "pointeurs"],
        "cpp": ["intro", "oop", "templates"]
    };

    // Création du sommaire
    const toc = document.createElement("ul");
    toc.classList.add("toc");

    cours[langage].forEach(c => {
        const li = document.createElement("li");
        li.classList.add("toc-item");
        li.innerHTML = `<a href="/cours/${langage}/${c}" class="toc-link">${c.replace("-", " ")}</a>`;
        toc.appendChild(li);
    });

    document.body.prepend(toc);
});
