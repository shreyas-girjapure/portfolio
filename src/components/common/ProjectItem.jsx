function ProjectItem({ year, title, tech }) {
    return (
        <div className="project-item" style={{ gridTemplateColumns: '80px 1fr' }}>
            <span className="project-year">{year}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <span className="project-title">{title}</span>
                <span className="project-tech" style={{ whiteSpace: 'nowrap' }}>{tech}</span>
            </div>
        </div>
    );
}

export default ProjectItem;
