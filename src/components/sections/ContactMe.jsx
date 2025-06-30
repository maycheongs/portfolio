import '../../styles/global.css';

const github = import.meta.env.PUBLIC_GITHUB_URL;
const linkedin = import.meta.env.PUBLIC_LINKEDIN_URL;

export default function ContactMe() {
    return (
        <section id="contact" className="contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Drop A Message!</h3>
                    <p>I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you!</p>
                    <p>📧 maycheongs@email.com</p>
                    <p>📱 (608) 770 5802</p>
                    <p>📍 Dallas, TX</p>
                    <div className="contact-links">
                        <a href={linkedin} target="_blank">LinkedIn</a>
                        <a href={github} target="_blank">GitHub</a>
                    </div>
                </div>
                <form className="contact-form" name="contact" method="POST" data-netlify="true">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="your.email@example.com" required/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>        
    )
}