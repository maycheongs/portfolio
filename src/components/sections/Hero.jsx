import React from 'react';
import CodeSnippet from '../ui/Codesnippet';
import Button from '../ui/Button';

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
                        <Button className='btn-primary' to='#projects'>View My Work</Button>
                        <Button className='btn-secondary' to='#contact'>Get In Touch</Button>
                    </div>
                </header>

               
                <CodeSnippet />
            </article>

            <span className="scroll-indicator" aria-hidden="true">↓</span>
        </section>
    )
}