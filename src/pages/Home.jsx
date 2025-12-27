import '../styles/style.css';

const Home = () => {
    return (
        <section className="home">
            <div className="home-container">
                <div className="profile-photo-container">
                    <img
                        src="/images/profile.jpeg"
                        alt="Profile Photo"
                        className="profile-photo-rect"
                    />
                </div>
                <div className="home-details">
                    <h1>Hello!</h1>
                    <h1>I'm Manjusri Shanmugakumar</h1>
                    <h3>Full Stack Architect engineer, the synergy between complex data logic and high-end digital experiences.</h3>
                    <div className="links">
                        <div className="links-row">
                            <a
                                href="https://www.linkedin.com/in/manjusrishanmugakumar/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="/images/link logo.png" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/MANJUSRI06" target="_blank" rel="noreferrer">
                                <img src="/images/github icon.png" alt="GitHub" />
                            </a>
                        </div>
                        <a
                            href="/images/MANJUSRI_SHANMUGAKUAMR-RESUME.pdf"
                            download="Manjusri_Shanmugakumar_Resume.pdf"
                            className="hire-me-btn"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
