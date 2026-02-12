import PageHeader from '../common/PageHeader';
import ProjectItem from '../common/ProjectItem';
import Divider from '../common/Divider';

function OverviewContent() {
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
            <PageHeader 
                title="Financial Infrastructure" 
                subtitle="Updated: Oct 2023 ✹" 
            />

            <p className="intro-text">
                I engineer <span>high-frequency trading systems</span> and secure ledger 
                architectures for the financial sector. Focusing on sub-millisecond latency, 
                fault tolerance, and institutional-grade security protocols.
            </p>

            <Divider height="4px" />

            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Selected Engineering
                </h2>
                
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
                    <p style={{ 
                        fontFamily: 'var(--font-sans)', 
                        fontSize: '22px', 
                        lineHeight: '1.3', 
                        marginTop: '16px', 
                        color: 'var(--text-primary)' 
                    }}>
                        Primary proficiency in <strong>Rust</strong> and <strong>C++</strong> for 
                        execution layers. <strong>TypeScript/React</strong> for visualization dashboards. 
                        Experienced with Kafka message queues and PostgreSQL timeseries optimization.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default OverviewContent;
