import type { Project } from "../types/project.type";


const ProjectCard = ({ title, description, link }: Project) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </article>
    )
}

export default ProjectCard;