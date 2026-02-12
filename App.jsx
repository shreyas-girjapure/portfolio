const { useState } = React;

// Sidebar Profile Component
function Profile() {
    return (
        <div className="plate profile-plate">
            <div style={{ position: 'relative' }}>
                <h1 style={{ fontSize: '20px', marginBottom: '4px', fontWeight: '700' }}>Alex Chen</h1>
                <p className="role-title">
                    Financial Systems Architect<br />
                    NY, USA
                </p>
                <div className="sticker status-sticker">
                    Open for<br />Contract ✳
                </div>
            </div>
        </div>
    );
}

// Navigation Item Component
function NavItem({ label, count, active, onClick }) {
    return (
        <a 
            href="#" 
            className={`nav-item ${active ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            <span>{label}</span>
            <span className="count-badge">{count}</span>
        </a>
    );
}

// Navigation Component
function Navigation({ activeView, setActiveView }) {
    const navItems = [
        { id: 'overview', label: 'Overview', count: '01' },
        { id: 'projects', label: 'Projects', count: '12' },
        { id: 'technical', label: 'Technical Stack', count: '08' },
        { id: 'publications', label: 'Publications', count: '04' }
    ];

    return (
        <nav className="plate nav-plate">
            <h2 style={{ marginTop: '20px', borderBottom: '2px solid black', paddingBottom: '8px' }}>
                Menu
            </h2>
            
            {navItems.map(item => (
                <NavItem
                    key={item.id}
                    label={item.label}
                    count={item.count}
                    active={activeView === item.id}
                    onClick={() => setActiveView(item.id)}
                />
            ))}

            <div className="mt-auto">
                <div className="flex-row" style={{ marginTop: '24px', border: '2px solid black', padding: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '700' }}>System Status</span>
                    <span style={{ fontSize: '14px', color: 'var(--accent-orange)' }}>● Stable</span>
                </div>
            </div>
        </nav>
    );
}

// Contact Component
function ContactButton() {
    return (
        <div className="plate contact-plate">
            <span style={{ fontWeight: '700', fontSize: '16px' }}>Download CV</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
        </div>
    );
}

// Sidebar Component
function Sidebar({ activeView, setActiveView }) {
    return (
        <aside className="sidebar">
            <Profile />
            <Navigation activeView={activeView} setActiveView={setActiveView} />
            <ContactButton />
        </aside>
    );
}

// Project Item Component
function ProjectItem({ year, title, tech }) {
    return (
        <div className="project-item">
            <span className="project-year">{year}</span>
            <span className="project-title">{title}</span>
            <span className="project-tech">{tech}</span>
        </div>
    );
}

// Main Content Component
function MainContent() {
    const projects = [
        { year: '2023', title: 'Citadel Settlement Engine', tech: 'RUST / GRPC' },
        { year: '2022', title: 'Liquidity Pool Aggregator', tech: 'SOLIDITY / PYTHON' },
        { year: '2021', title: 'Dark Pool Order Book', tech: 'C++ / FPGA' },
        { year: '2020', title: 'Risk Analysis Dashboard', tech: 'REACT / D3' }
    ];

    const competencies = [
        'Distributed Systems Architecture',
        'Market Data Ingestion',
        'Cryptography & Consensus',
        'Automated Compliance Auditing'
    ];

    return (
        <main className="plate content-sheet">
            <div className="sticker clearance-sticker">
                SECURE<br />ACCESS
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '60px' }}>
                <h1 style={{ marginBottom: '0' }}>
                    Financial<br />Infrastructure
                </h1>
                <p className="mono">Updated: Oct 2023 ✹</p>
            </div>

            <p className="intro-text">
                I engineer <span>high-frequency trading systems</span> and secure ledger architectures for the financial sector. 
                Focusing on sub-millisecond latency, fault tolerance, and institutional-grade security protocols.
            </p>

            <div className="divider" style={{ height: '4px', background: 'black' }}></div>

            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Selected Engineering</h2>
                
                <div className="project-list">
                    {projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            year={project.year}
                            title={project.title}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                <div>
                    <h2 style={{ fontSize: '18px' }}>Core Competencies</h2>
                    <ul style={{ listStyle: 'none', marginTop: '16px' }}>
                        {competencies.map((competency, index) => (
                            <li key={index}>{competency}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 style={{ fontSize: '18px' }}>Tech Stack</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '22px', lineHeight: '1.3', marginTop: '16px', color: 'var(--text-primary)' }}>
                        Primary proficiency in <strong>Rust</strong> and <strong>C++</strong> for execution layers. 
                        <strong>TypeScript/React</strong> for visualization dashboards. 
                        Experienced with Kafka message queues and PostgreSQL timeseries optimization.
                    </p>
                </div>
            </div>
        </main>
    );
}

// Main App Component
function App() {
    const [activeView, setActiveView] = useState('overview');

    return (
        <div className="layout-container">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            <MainContent />
        </div>
    );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
