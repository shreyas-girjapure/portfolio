import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';

function TechnicalContent() {
    const languages = [
        { name: 'Rust', level: 'Expert', years: '5+' },
        { name: 'C++', level: 'Expert', years: '8+' },
        { name: 'Python', level: 'Advanced', years: '7+' },
        { name: 'Solidity', level: 'Advanced', years: '4+' },
        { name: 'TypeScript', level: 'Advanced', years: '6+' },
        { name: 'Go', level: 'Intermediate', years: '3+' }
    ];

    const infrastructure = [
        'Kubernetes & Docker',
        'AWS / GCP Cloud Infrastructure',
        'Kafka & RabbitMQ Messaging',
        'PostgreSQL / TimescaleDB',
        'Redis & Memcached',
        'Prometheus & Grafana'
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Technical Expertise" 
                subtitle="8 Core Technologies ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Specialized in <span>systems programming</span> with a focus on 
                performance-critical financial infrastructure.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '60px', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Programming Languages
                </h2>
                <div className="project-list">
                    {languages.map((lang, index) => (
                        <div key={index} className="project-item" style={{ gridTemplateColumns: '1fr auto', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                                <span className="project-title" style={{ fontSize: '24px' }}>
                                    {lang.name}
                                </span>
                                <span style={{ fontSize: '18px', opacity: 0.7 }}>{lang.level}</span>
                            </div>
                            <span className="project-tech">{lang.years}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Infrastructure & Tools
                </h2>
                <ul style={{ listStyle: 'none' }}>
                    {infrastructure.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default TechnicalContent;
