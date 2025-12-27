import '../styles/project.css';
import { ExternalLink, Github, Cpu, Code2, Layers, Terminal, ShoppingBag, Globe, Briefcase } from 'lucide-react';

const Projects = () => {
    const projectData = [
        {
            id: "PROJ-001",
            title: "Infinity Finds",
            category: "Full Stack / E-Commerce",
            icon: <ShoppingBag size={18} />,
            image: "/images/infinity_finds.png",
            description: "React-based e-commerce platform for my own handmade jewelry and polaroids. Features secure Firebase authentication, product categorization, and a smooth component-based shopping experience.",
            tags: ["React", "Firebase", "Authentication", "UI/UX"],
            links: [
                { url: "https://lnkd.in/grUcN9fX", label: "Source Code", icon: <Github size={16} /> },
                { url: "https://lnkd.in/gte-Vj_K", label: "Live Demo", icon: <Globe size={16} /> }
            ]
        },
        {
            id: "PROJ-002",
            title: "Jobify",
            category: "Web App / Recruitment",
            icon: <Briefcase size={18} />,
            image: "/images/jobify.png",
            description: "Modern and responsive job portal built using React and Redux Toolkit. Implements core concepts of state management, client-side routing, and interactive job/company filtering.",
            tags: ["React", "Redux", "Vite", "Axios"],
            links: [
                { url: "https://github.com/MANJUSRI06/JobPortal", label: "Source Code", icon: <Github size={16} /> },
                { url: "https://job-portal-nbzj.vercel.app/", label: "Live Demo", icon: <Globe size={16} /> }
            ]
        },
        {
            id: "PROJ-003",
            title: "Rain Alert Notification",
            category: "Hardware / IoT",
            icon: <Cpu size={18} />,
            image: "/images/project1.jpg",
            description: "Developed an IoT system using raindrop sensors to detect rainfall and send instant automated email alerts via Wi-Fi.",
            tags: ["NodeMCU", "IoT", "Sensors", "Automation"],
            links: []
        },
        {
            id: "PROJ-004",
            title: "Smart Dustbin",
            category: "IoT Solution",
            icon: <Layers size={18} />,
            image: null,
            description: "An intelligent waste monitoring system that tracks fill levels using ultrasonic sensors and provides real-time alerts to optimize collection.",
            tags: ["Arduino", "IoT", "Ultrasonic", "Cloud"],
            links: []
        },
        {
            id: "PROJ-005",
            title: "Face Recognition Attendance",
            category: "Software / AI",
            icon: <Code2 size={18} />,
            image: null,
            description: "A contactless AI-powered attendance system using computer vision to recognize faces and automate records through a Streamlit interface.",
            tags: ["Python", "OpenCV", "Streamlit", "ML"],
            links: [
                { url: "https://github.com/MANJUSRI06/Face_Attendance", label: "Source Code", icon: <Github size={16} /> }
            ]
        }
    ];

    return (
        <section id="project">
            <div className="project-header">
                <h1><Terminal size={24} className="h-icon" />My Projects</h1>
                <p>Repository of engineered solutions and technical prototypes.</p>
            </div>
            
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div className="project-entry" key={index}>
                        <div className="entry-sidebar">
                            <span className="entry-id">{project.id}</span>
                            <div className="entry-icon-box">
                                {project.icon}
                            </div>
                        </div>

                        <div className="entry-main">
                            <div className="entry-header">
                                <div className="entry-meta">
                                    <span className="entry-category">{project.category}</span>
                                </div>
                                <h2>{project.title}</h2>
                            </div>

                            <div className="entry-body">
                                {project.image && (
                                    <div className="entry-image-preview">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                )}
                                <div className="entry-text">
                                    <p>{project.description}</p>
                                    <div className="entry-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tech-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {project.links.length > 0 && (
                                <div className="entry-footer">
                                    {project.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noreferrer" className="terminal-btn">
                                            {link.icon} <span>{link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
