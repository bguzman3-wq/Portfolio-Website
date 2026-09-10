import {Project} from '../types';

const projects: Project[] = [
    {
        id: "1",
        title: "Portfolio Website",
        description: "A personal portfolio website built using React and TypeScript to showcase my projects and skills.",
        link: "https://github.com/bguzman3-wq/portfolio-website",

    },
];

export default function Projects(){
    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project) => (
                <div key = {project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && <a href={project.link}>View Project</a>}
                </div>
            ))}
        </section>
    );
}