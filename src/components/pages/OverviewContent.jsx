import PageHeader from '../common/PageHeader';
import ProjectItem from '../common/ProjectItem';
import Divider from '../common/Divider';
import ExternalLinkIcon from '../common/ExternalLinkIcon';

function OverviewContent() {
    const experience = [
        { 
            year: '2024', 
            title: 'Senior Software Engineer', 
            company: 'Merkle', 
            url: 'https://www.merkle.com', 
            tech: 'CURRENT' 
        },
        { 
            year: '2021', 
            title: 'Engineering Lead', 
            company: 'Persistent Systems', 
            url: 'https://www.persistent.com', 
            tech: '2021–2024' 
        },
        { 
            year: '2018', 
            title: 'Associate Technical Consultant', 
            company: 'Perficient', 
            url: 'https://www.perficient.com', 
            tech: '2018–2021' 
        }
    ];

    const competencies = [
        'Salesforce Architecture & Design',
        'CRM Cloud Implementations',
        'API Integration & Orchestration',
        'OmniStudio (OmniScript, FlexCards, Data Mapper)',
        'CI/CD & DevOps for Salesforce',
        'Digital Transformation & Process Automation'
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Salesforce Engineering" 
                subtitle="Updated: Feb 2026 ✹" 
            />

            <p className="intro-text">
                I build and architect <span>enterprise Salesforce solutions</span> — from Sales Cloud 
                and Financial Services Cloud to OmniStudio and complex API integrations. 
                7+ years delivering digital transformations that drive measurable business impact.
            </p>

            <Divider height="4px" />

            <div style={{ marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Career Timeline
                </h2>
                
                <div className="project-list">
                    {experience.map((item, index) => (
                        <div key={index} className="project-item" style={{ gridTemplateColumns: '80px 1fr' }}>
                            <span className="project-year">{item.year}</span>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                <span className="project-title">
                                    {item.title} — <a 
                                        href={item.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit', opacity: 0.7 }}
                                    >
                                        {item.company}<ExternalLinkIcon size={11} opacity={0.6} />
                                    </a>
                                </span>
                                <span className="project-tech" style={{ whiteSpace: 'nowrap' }}>{item.tech}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                <div>
                    <h2 style={{ fontSize: '18px' }}>Core Competencies</h2>
                    <ul className="bordered-list" style={{ listStyle: 'none', marginTop: '16px' }}>
                        {competencies.map((competency, index) => (
                            <li key={index}>{competency}</li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 style={{ fontSize: '18px' }}>Impact Highlights</h2>
                    <p style={{ 
                        fontFamily: 'var(--font-sans)', 
                        fontSize: '22px', 
                        lineHeight: '1.3', 
                        marginTop: '16px', 
                        color: 'var(--text-primary)' 
                    }}>
                        Increased loan disbursements from <strong>₹50 Cr to ₹300 Cr</strong>. 
                        Reduced RM-to-CM turnaround from <strong>1 day to 30 minutes</strong>. 
                        Orchestrated integrations across <strong>40+ third-party systems</strong>. 
                        Delivered <strong>5-minute loan disbursement</strong> journey for RBI initiative.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default OverviewContent;
