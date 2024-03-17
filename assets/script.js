document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById('container');

    // Remplacez les URL des projets GitHub par les vôtres
    const projects = [
        { name: 'Projet 2 OpenClassrooms', url: 'https://github.com/projets-openclassrooms/projet_P2', description: "Webscraping" },
        { name: 'Projet 4 OpenClassrooms', url: 'https://github.com/projets-openclassrooms/projet_4_chess_tournaments', description: "Gestion tournoi d'échecs" },
        { name: 'Projet 6 OpenClassrooms', url: 'https://github.com/projets-openclassrooms/Projet_6_JustStreamIt', description: "Gestion site Netflix-like"},
        { name: 'Projet 7 OpenClassrooms', url: 'https://github.com/projets-openclassrooms/Projet_7_algorithmes', description: "gestion d'actions via les algorithmes"},
        { name: 'Projet 9 OpenClassrooms', url: 'https://github.com/projets-openclassrooms/Projet9_Web_Django', description: "Gestion site front-end back-end"},
        { name: 'Répertoires fainéants', url: 'https://github.com/bk7191/creer_repertoires_projets_OC', description: "Création de repertoires de projets" },

    ];

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        const projectName = document.createElement('h2');
        projectName.textContent = project.name;

        const projectLink = document.createElement('a');
        projectLink.href = project.url;
        projectLink.textContent = 'Voir sur GitHub';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = 'Description du projet';
        projectDescription.textContent = project.description;

        projectElement.appendChild(projectName);
        projectElement.appendChild(projectLink);
        projectElement.appendChild(projectDescription);

        projectsContainer.appendChild(projectElement);
    });
});
