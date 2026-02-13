import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';

function TechnicalContent() {
    const salesforceSkills = [
        { name: 'Apex Programming', level: 'Expert', detail: 'Triggers, Batch, Future, Queueable, Scheduler, Unit Testing' },
        { name: 'Lightning Web Components', level: 'Expert', detail: 'HTML, CSS, JavaScript' },
        { name: 'Salesforce Automation', level: 'Expert', detail: 'Process Builder, Flow, Workflow, Approval Processes' },
        { name: 'OmniStudio', level: 'Advanced', detail: 'OmniScript, Data Mapper, Integration Procedures, FlexCards, Doc Templates' },
        { name: 'API Integrations', level: 'Expert', detail: 'REST, SOAP, Connected Apps, Named Credentials, Platform Events, Composite API' },
        { name: 'SOQL / SOSL', level: 'Expert', detail: 'Query optimization, Governor limits management' },
    ];

    const clouds = [
        'Sales Cloud',
        'Financial Services Cloud',
        'Health Cloud',
        'Community Cloud (Experience Cloud)',
    ];

    const devOpsTools = [
        'SFDX CLI, Change Set, Quick Deploy, Workbench, Dataloader',
        'CI/CD — Jenkins, GitHub Actions, COPADO',
        'GIT — GitHub, Bitbucket, GitHub Actions',
        'JIRA — Project & Sprint Management',
    ];

    const configuration = [
        'Custom Metadata & Custom Settings',
        'Custom Labels',
        'Configuration-Driven Development',
        'Visualforce Pages',
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Technical Expertise" 
                subtitle="10+ Core Skills ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Specialized in <span>Salesforce platform engineering</span> with deep expertise 
                across Apex, LWC, OmniStudio, and multi-cloud implementations.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '60px', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Salesforce Development
                </h2>
                <div className="project-list">
                    {salesforceSkills.map((skill, index) => (
                        <div key={index} className="project-item" style={{ gridTemplateColumns: '1fr', gap: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px' }}>
                                <span className="project-title" style={{ fontSize: '22px' }}>
                                    {skill.name}
                                </span>
                                <span className="project-tech">{skill.level}</span>
                            </div>
                            <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '4px' }}>{skill.detail}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }}>
                <div>
                    <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                        CRM Clouds
                    </h2>
                    <ul className="bordered-list" style={{ listStyle: 'none' }}>
                        {clouds.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                        Custom Configuration
                    </h2>
                    <ul className="bordered-list" style={{ listStyle: 'none' }}>
                        {configuration.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    DevOps & Tooling
                </h2>
                <ul className="bordered-list" style={{ listStyle: 'none' }}>
                    {devOpsTools.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default TechnicalContent;
