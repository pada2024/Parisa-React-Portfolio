export default function Projects() {
    const projects = [
        { title: "Project 1", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project1", repoLink: "https://github.com/user/project1" },
        { title: "Project 2", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project2", repoLink: "https://github.com/user/project2" },
        { title: "Project 3", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project3", repoLink: "https://github.com/user/project3" },
        { title: "Project 4", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project4", repoLink: "https://github.com/user/project4" },
        { title: "Project 5", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project5", repoLink: "https://github.com/user/project5" },
        { title: "Project 6", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project6", repoLink: "https://github.com/user/project6" },
    ];

    return (
        <div>
            <h1>Projects Page</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                            />
                            <h2>{project.title}</h2>
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}