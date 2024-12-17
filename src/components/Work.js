import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "Leave Management System",
      description: "A comprehensive leave management system built with ASP.NET MVC and SQL Server.",
      tech: ["C#", "ASP.NET MVC", "MSSQL", "JavaScript"],
      image: "/images/project1.jpg"  // 你需要添加实际的项目截图
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with ASP.NET MVC and SQL Server.",
      tech: ["C#", "ASP.NET MVC", "MSSQL", "JavaScript"],
      image: "/images/project2.jpg"
    },
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website built with React.",
      tech: ["React", "CSS3", "JavaScript"],
      image: "/images/project3.jpg"
    }
  ];

  return (
    <section className="work" id="work">
      <div className="work-content">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 