import '../styles/skills.css';
import { Monitor, Server, Code2, Database, Wrench, Brain, Users } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Monitor size={24} />,
            skills: "HTML, CSS, JavaScript, ReactJS, Redux"
        },
        {
            title: "Backend",
            icon: <Server size={24} />,
            skills: "Java, Python, Next js, node js"
        },
        {
            title: "Programming",
            icon: <Code2 size={24} />,
            skills: "Java, JavaScript, Python, C, C++"
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            skills: "MySQL, DBMS"
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench size={24} />,
            skills: "Git, GitHub, VS Code, Figma, pycharm"
        },
        {
            title: "Core Concepts",
            icon: <Brain size={24} />,
            skills: "Data Structures & Algorithms, OOPS, Operating Systems, Computer networks"
        },
        {
            title: "Soft Skills",
            icon: <Users size={24} />,
            skills: "Leadership, Teamwork, Adaption, Communication"
        }
    ];

    return (
        <section id="skills">
            <div className="skills-header">
                <h1>Technical Expertise</h1>
                <p>A specialized stack focused on performance and scalability.</p>
            </div>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-icon">
                            {category.icon}
                        </div>
                        <div className="skill-info">
                            <h3>{category.title}</h3>
                            <p>{category.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
