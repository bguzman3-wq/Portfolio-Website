import {Project} from '../types';

const projects: Project[] = [
    {
        id: "1",
        title: "Portfolio Website",
        description: "A personal portfolio website built using React and TypeScript to showcase my projects and skills.",
        link: "https://github.com/bguzman3-wq/portfolio-website"
    },
    {
        id: "2",
        title: "Social Media Sentiment Analysis",
        description: "Analyzed a social media dataset from Kaggle to determine the sentiment of posts and comments using Python, pandas, and scikit-learn. Cleaned data and built TF-IDF based Logistic regression and Random Forest models to classify the sentiments.",
        link: "https://github.com/bguzman3-wq/Summer-Research"
    },
    {
        id: "3",
        title: "AI Hallucination Research Project (In Progress)",
        description: "Investigate how reliably Large Language Models (LLMs) answer programming questions and identify the types of programming questions that are more likely to produce incorrect, partially correct, or hallucinated responses.",
        link: "https://github.com/bguzman3-wq/AI-Hallucination"
    }
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