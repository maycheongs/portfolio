
export default function AboutMe() {
    return (
        <section id="about" className="about">
            <h2 className="section-title">About Me</h2>
            <div className="container">
                <div className="about-content">
                    
                    <img src="/images/familypic.jpg" alt="Me and my family" className="about-image" />
                    <div className="about-text">
                        <p>Hi! I’m May, a full-stack web developer passionate about building user-focused experiences that truly solve problems. I believe great tech isn’t just about looks — it’s about making people’s lives easier and more intuitive.</p>

                        <p>Before jumping into web development, I worked in finance, where I discovered my love for coding through VBA and building tools that help teams work smarter. Now, I’m excited to bring that same problem-solving mindset to every project I work on.</p>

                        <p>I live in Dallas, Texas with my family, and when I’m not coding, I enjoy spending time with them and playing video games.</p>
                    </div>

                </div>
                <div className="skills-grid">
                    <SkillCard title="Languages" skills={['JavaScript', 'HTML', 'Ruby', 'SQL', 'CSS']} />
                    <SkillCard title="Frameworks" skills={['React', 'Redux', 'Node.js', 'Express', 'WebSockets', 'Axios', 'GraphQL']} />
                    <SkillCard title="Databases" skills={['MongoDB', 'PostgreSQL']} />
                    <SkillCard title="Tools & Practices" skills={['Git', 'Bash/Shell scripting', 'AWS', 'REST APIs', 'Agile/Scrum']} />
                </div>
            </div>
        </section>
    );
}

const SkillCard = ({ title, skills }) => {
    return (
        <div className="skill-card">
            <h3>{title}</h3>
            <p>{skills.join(', ')}</p>
        </div>
    );
}