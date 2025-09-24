import type { Project } from "../types/project.type";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
    projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
    const isEmpty = projects.length === 0;
    
    return (
        <section className="projects-section">
            <h2>Projects</h2>
            {isEmpty ? (<p>No projects to show yet!</p>) : (
                projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))
            )}
        </section>
    )
}

export default Projects;