import React from 'react';
import CodeSnippet from '../ui/Codesnippet';

export default function Hero() {
    return (
        <section id="home" className="hero">
            <article className="hero-content">
                <header className="hero-text fade-in">
                    <h1>Full-Stack Developer</h1>
                    <p className="subtitle">Building Thoughtful Experiences</p>
                    <p>
                        From API design to responsive interfaces, I create web applications that solve real problems.
                        I'm passionate about writing maintainable code and delivering reliable software.
                    </p>
                    <div className="cta-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </header>

                {/* <pre className="hero-visual fade-in code-preview" aria-label="Sample developer code block">
                    {
                        `// Welcome to my portfolio
const developer = {
  name: "May C",
  skills: ["React", "Node.js", "Express", ... andMore],
  passion: "Creating amazing web experiences"
};

console.log("Let's build something great!");`}
                </pre> */}
                <CodeSnippet />
            </article>

            <span className="scroll-indicator" aria-hidden="true">↓</span>
        </section>
    )
}