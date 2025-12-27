import '../styles/about.css';

const About = () => {
    return (
        <section id="about">
            <div className="about-content">
                <img
                    src="/images/profile2.jpeg"
                    alt="profile"
                    className="profile-photo"
                />
                <section className="about-text">
                    <h1>Evolution.</h1>
                    <p>
                        I am a <strong>Full Stack Developer</strong> specializing in <strong>Java</strong>, currently pursuing a B.Tech in IT at Knowledge Institute of Technology. I design and develop robust systems where efficiency meets precision.
                    </p>
                    <br />
                    <p>
                        Passionate about tackling complex technical challenges, I have participated in the <strong>Smart India Hackathon 2025</strong> and delivered my technical presentations. My expertise bridges backend logic with intuitive frontend experiences, ensuring seamless user interactions.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <h3>Hackathon Participant</h3>
                            <p>Engaged in innovative problem-solving at Smart India Hackathon 2025.</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Full Stack Mindset</h3>
                            <p>Connecting data, logic, and design seamlessly.</p>
                        </div>
                        <div className="highlight-item">
                            <h3>Collaborative & Innovative</h3>
                            <p>Skilled at working in teams to create practical and impactful solutions.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
