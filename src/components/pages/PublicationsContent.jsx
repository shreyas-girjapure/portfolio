import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';

function PublicationsContent() {
    const publications = [
        { 
            year: '2023', 
            title: 'Optimizing Consensus Mechanisms for High-Frequency Trading Networks',
            venue: 'Journal of Financial Engineering',
            type: 'Research Paper'
        },
        { 
            year: '2022', 
            title: 'Zero-Knowledge Proofs in Institutional Settlement Systems',
            venue: 'ACM Conference on Computer Security',
            type: 'Conference'
        },
        { 
            year: '2021', 
            title: 'FPGA Acceleration for Market Data Processing',
            venue: 'IEEE Transactions on Parallel Systems',
            type: 'Research Paper'
        },
        { 
            year: '2020', 
            title: 'Distributed Ledger Architecture for Multi-Party Clearing',
            venue: 'Blockchain Economics & Technology',
            type: 'White Paper'
        }
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Publications Research" 
                subtitle="4 Papers ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                Contributing to <span>academic research</span> in distributed systems, 
                cryptography, and financial technology.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '40px' }}>
                <div className="project-list">
                    {publications.map((pub, index) => (
                        <div 
                            key={index} 
                            className="project-item" 
                            style={{ gridTemplateColumns: '80px 1fr auto' }}
                        >
                            <span className="project-year">{pub.year}</span>
                            <div>
                                <span 
                                    className="project-title" 
                                    style={{ 
                                        fontSize: '22px', 
                                        display: 'block', 
                                        marginBottom: '8px' 
                                    }}
                                >
                                    {pub.title}
                                </span>
                                <p style={{ fontSize: '16px', opacity: '0.8' }}>
                                    {pub.venue}
                                </p>
                            </div>
                            <span className="project-tech">{pub.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '80px', padding: '30px', border: '2px solid black' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>
                    Research Interests
                </h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    Current focus areas include Byzantine fault-tolerant consensus protocols 
                    for financial settlement, hardware acceleration for cryptographic primitives, 
                    and privacy-preserving computation in multi-party trading environments.
                </p>
            </div>
        </main>
    );
}

export default PublicationsContent;
