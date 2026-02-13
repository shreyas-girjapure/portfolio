import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';

function PublicationsContent() {
    const certifications = [
        { 
            title: 'Salesforce Platform Developer 1',
            issuer: 'Salesforce',
            type: 'Platform'
        },
        { 
            title: 'Salesforce App Builder',
            issuer: 'Salesforce',
            type: 'Platform'
        },
        { 
            title: 'MuleSoft Certified Developer 1',
            issuer: 'MuleSoft / Salesforce',
            type: 'Integration'
        },
        { 
            title: 'Vlocity Health Quoting Developer',
            issuer: 'Vlocity (Salesforce Industries)',
            type: 'Industries'
        },
        { 
            title: 'Vlocity Platform Developer',
            issuer: 'Vlocity (Salesforce Industries)',
            type: 'Industries'
        }
    ];

    const education = [
        { 
            degree: 'B.E — Rajiv Gandhi College of Engineering',
            period: '2014 – 2018',
            score: 'CGPA: 6.09'
        },
        { 
            degree: 'HSC — Major Hemant Jakate Vidyaniketan',
            period: '2014',
            score: '75.05%'
        },
        { 
            degree: 'SSC — Pandit Bachcharaj Vyas Vidyalaya',
            period: '2012',
            score: '89.90%'
        }
    ];

    const architectGoals = [
        'Salesforce Application Architect',
        'Salesforce System Architect',
        'Salesforce Technical Architect (CTA)',
        'Integration Architecture',
        'Data Architecture & Management'
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Certifications & Education" 
                subtitle="5 Certs ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Building credentials toward <span>Salesforce Architect</span> — 
                certified across Platform, Industries, and Integration domains.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '40px', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>
                    Salesforce Certifications
                </h2>
                <div className="project-list">
                    {certifications.map((cert, index) => (
                        <div 
                            key={index} 
                            className="project-item" 
                            style={{ gridTemplateColumns: '1fr auto' }}
                        >
                            <div>
                                <span 
                                    className="project-title" 
                                    style={{ 
                                        fontSize: '22px', 
                                        display: 'block', 
                                        marginBottom: '6px' 
                                    }}
                                >
                                    {cert.title}
                                </span>
                                <p style={{ fontSize: '14px', opacity: '0.7' }}>
                                    {cert.issuer}
                                </p>
                            </div>
                            <span className="project-tech">{cert.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Divider height="2px" />

            <div style={{ marginTop: '40px', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>
                    Education
                </h2>
                <div className="project-list">
                    {education.map((edu, index) => (
                        <div 
                            key={index} 
                            className="project-item" 
                            style={{ gridTemplateColumns: '1fr auto' }}
                        >
                            <div>
                                <span className="project-title" style={{ fontSize: '20px', display: 'block', marginBottom: '4px' }}>
                                    {edu.degree}
                                </span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span className="project-tech" style={{ display: 'block' }}>{edu.period}</span>
                                <span style={{ fontSize: '14px', opacity: 0.7 }}>{edu.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid var(--text-primary)' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px', opacity: 0.9 }}>
                    Architect Roadmap — Next Goals
                </h2>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                    {architectGoals.map((goal, index) => (
                        <li key={index} style={{ fontSize: '16px', lineHeight: '1.9', opacity: 0.8 }}>
                            {goal}
                        </li>
                    ))}
                </ul>
                <p style={{ fontSize: '15px', lineHeight: '1.6', marginTop: '20px', opacity: 0.7, fontStyle: 'italic' }}>
                    Actively working toward becoming a <span className="hl">Salesforce Technical Architect</span> — 
                    combining deep platform expertise with solution design and enterprise integration skills.
                </p>
            </div>
        </main>
    );
}

export default PublicationsContent;
