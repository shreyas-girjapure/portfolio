import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';
import ExternalLinkIcon from '../common/ExternalLinkIcon';

function H({ children }) {
    return <span className="hl">{children}</span>;
}

function ProjectsContent() {
    const engagements = [
        { 
            period: '2024 – Present', 
            title: 'CS Energy — Sales Cloud, OmniStudio', 
            url: 'https://www.csenergy.com',
            role: 'Senior Software Engineer @ Merkle',
            roleUrl: 'https://www.merkle.com',
            highlights: [
                <>Managing development and enhancement for <H>CS Sales Cloud</H></>,
                <>Responsible for full <H>Development and Deployment Cycle</H></>,
                <>Developed complex business processes for sales and service teams</>,
                <>Modules: <H>EV Sales</H>, <H>EV Service</H>, <H>Customer Onboarding</H>, <H>Bulk Service Site Management</H></>,
                <>Orchestrated <H>API integrations</H> (Inbound &amp; Outbound) with multiple vendors</>,
                <>OmniStudio: <H>OmniScript</H>, <H>Data Mapper</H>, <H>Data Extractor</H>, <H>Integration Procedure</H>, <H>Document Templates</H></>
            ]
        },
        { 
            period: '2021 – 2024', 
            title: 'IDFC BBG — Financial Services Cloud, Community Cloud', 
            url: 'https://www.idfcfirstbank.com',
            role: 'Engineering Lead @ Persistent Systems, Pune',
            roleUrl: 'https://www.persistent.com',
            highlights: [
                <>Led <H>digital transformation</H> of banking offline workflows — Case Onboarding, Case Management, E-Sign &amp; E-Stamp</>,
                <>Reduced RM to CM turnaround time from <H>1 day → 30 minutes</H></>,
                <>Helped increase overall loan disbursements from <H>₹50 Crore → ₹300 Crore</H></>,
                <>Built and delivered <H>5-minute loan disbursement</H> journey for RBI initiative</>,
                <>EKYC &amp; ESign/EStamp reduced loan processing time from <H>5+ days → hours</H></>,
                <>Contributed to <H>Trigger Framework</H> and <H>API Integration Framework</H></>,
                <>Implemented and orchestrated integrations with <H>40+ third-party systems</H></>
            ]
        },
        { 
            period: '2019 – 2021', 
            title: 'BCBSMA — Sales Cloud, Health Cloud, OmniStudio', 
            url: 'https://www.bluecrossma.org',
            role: 'Associate Technical Consultant @ Perficient, Nagpur',
            roleUrl: 'https://www.perficient.com',
            highlights: [
                <><H>Offshore Team Lead</H> for the engagement</>,
                <>Delivered <H>Classic to Lightning Migration</H> journey</>,
                <>Built community portal for <H>Insurance Onboarding</H> and Management</>,
                <>Designed solutions for out-of-the-box and custom features</>,
                <>CPQ module with Vlocity — <H>DataRaptor</H>, <H>Integration Procedures</H>, <H>Pricing</H>, <H>FlexCards</H>, <H>Document Templates</H></>
            ]
        },
        { 
            period: '2018 – 2019', 
            title: 'Techtronic — Sales Cloud', 
            url: 'https://www.ttigroup.com',
            role: 'Associate Technical Consultant @ Perficient',
            roleUrl: 'https://www.perficient.com',
            highlights: [
                <>Salesforce <H>Sales Cloud</H> implementation and customization</>,
                <>Production-ready delivery and deployment support</>
            ]
        }
    ];

    const personalProjects = [
        { title: 'Salesforce CI/CD Pipeline', description: 'Automated deployment pipeline for Salesforce orgs using GitHub Actions and SFDX', url: 'https://github.com/shreyas-girjapure/Salesforce-Pipeline' },
        { title: 'Orphan-Node-Identifier', description: 'Tool to identify orphan metadata nodes in Salesforce org configurations', url: 'https://github.com/shreyas-girjapure/Orphan-Node-Identifier' },
        { title: 'Salesforce-CLI-RAG-Bot', description: 'AI-powered RAG bot for Salesforce CLI documentation and troubleshooting', url: 'https://github.com/shreyas-girjapure/Salesforce-CLI-RAG-Bot' }
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Experience Portfolio" 
                subtitle="7+ Years ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Delivering <span>enterprise Salesforce implementations</span> across Energy, 
                Banking, Insurance, and Healthcare domains.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '40px' }}>
                {engagements.map((engagement, index) => (
                    <div key={index} className="engagement-card">
                        <div className="engagement-header">
                            <a 
                                href={engagement.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-title" 
                                style={{ fontSize: '22px', textDecoration: 'none', color: 'inherit' }}
                            >
                                {engagement.title}<ExternalLinkIcon size={13} opacity={0.4} />
                            </a>
                            <span className="project-tech">{engagement.period}</span>
                        </div>
                        <p className="engagement-role">
                            {engagement.role}
                        </p>
                        <ul className="highlight-list">
                            {engagement.highlights.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

                                    {project.title}<ExternalLinkIcon size={14} opacity={0.5} />

            <div style={{ marginTop: '40px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '24px' }}>
                    Personal Projects
                </h2>
                <div className="project-list">
                    {personalProjects.map((project, index) => (
                        <a 
                            key={index} 
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-item" 
                            style={{ gridTemplateColumns: '1fr', rowGap: '4px', textDecoration: 'none', color: 'inherit' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="project-title" style={{ fontSize: '20px' }}>
                                    {project.title} <span style={{ fontSize: '14px', opacity: 0.5, fontFamily: 'Arial, sans-serif' }}>↗</span>
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', opacity: '0.7', lineHeight: '1.5' }}>
                                {project.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ProjectsContent;
