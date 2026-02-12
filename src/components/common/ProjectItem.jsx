function ProjectItem({ year, title, tech }) {
    return (
        <div className="project-item">
            <span className="project-year">{year}</span>
            <span className="project-title">{title}</span>
            <span className="project-tech">{tech}</span>
        </div>
    );
}

export default ProjectItem;
