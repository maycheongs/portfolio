export default function ProjectCard({ project }) {

    const { title, description, image, github, demo, stack } = project;
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />

            <div className="project-details">
                <div className="project-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="tech-stack">
                    <span>Tech Stack:</span>
                    <span>{stack.map((s,i)=> i == stack.length - 1  ? s : `${s}, `)}</span>
                </div>

                <div className="project-links">
                    {github && <a href={github} target="_blank">GitHub</a>}
                    {demo && <a href={demo} target="_blank">Demo</a>}
                </div>
            </div>
        </div>
    );
}