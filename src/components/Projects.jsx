export default function Projects(){
    const projects = [
        { title: "Project 1", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 2", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 3", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 4", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 5", imageUrl: "https://via.placeholder.com/150" },
        { title: "Project 6", imageUrl: "https://via.placeholder.com/150" },
    ];

    return (
        <div>
            <h1>Projects Page</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                        />
                        <h2>{project.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}