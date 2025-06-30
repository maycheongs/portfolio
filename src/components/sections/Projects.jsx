import projects from '../../data/projects.json'
import ProjectCard from '../ui/ProjectCard'
export default function Projects () {
    
    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Projects & Past Work</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>       
    )
}