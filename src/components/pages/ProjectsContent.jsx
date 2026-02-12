import PageHeader from '../common/PageHeader';
import Divider from '../common/Divider';

function ProjectsContent() {
    const allProjects = [
        { 
            year: '2023', 
            title: 'Citadel Settlement Engine', 
            tech: 'RUST / GRPC', 
            description: 'Real-time settlement system processing 500K+ transactions per second with Byzantine fault tolerance.' 
        },
        { 
            year: '2023', 
            title: 'Collateral Optimization Engine', 
            tech: 'C++ / CUDA', 
            description: 'GPU-accelerated portfolio margin calculations reducing compute time by 87%.' 
        },
        { 
            year: '2022', 
            title: 'Liquidity Pool Aggregator', 
            tech: 'SOLIDITY / PYTHON', 
            description: 'Multi-DEX routing protocol managing $2B+ in cross-chain liquidity.' 
        },
        { 
            year: '2022', 
            title: 'Trade Surveillance Platform', 
            tech: 'KAFKA / SPARK', 
            description: 'Real-time market abuse detection system analyzing 10M+ events per second.' 
        },
        { 
            year: '2021', 
            title: 'Dark Pool Order Book', 
            tech: 'C++ / FPGA', 
            description: 'Ultra-low latency matching engine with 200 nanosecond median tick-to-trade.' 
        },
        { 
            year: '2021', 
            title: 'Smart Order Router', 
            tech: 'RUST / TOKIO', 
            description: 'Multi-venue execution system optimizing for price improvement and fill rates.' 
        },
        { 
            year: '2021', 
            title: 'Blockchain Oracle Network', 
            tech: 'GO / LIBP2P', 
            description: 'Decentralized price feed infrastructure with cryptographic verification.' 
        },
        { 
            year: '2020', 
            title: 'Risk Analysis Dashboard', 
            tech: 'REACT / D3', 
            description: 'Real-time portfolio risk visualization with stress testing and scenario analysis.' 
        },
        { 
            year: '2020', 
            title: 'Credit Derivatives Pricer', 
            tech: 'PYTHON / NUMPY', 
            description: 'Monte Carlo simulation engine for CDO tranche valuation.' 
        },
        { 
            year: '2019', 
            title: 'Market Data Normalizer', 
            tech: 'RUST / ARROW', 
            description: 'High-throughput feed handler processing normalized tick data from 50+ venues.' 
        },
        { 
            year: '2019', 
            title: 'Automated Market Maker', 
            tech: 'SOLIDITY / HARDHAT', 
            description: 'Constant function AMM protocol with concentrated liquidity positions.' 
        },
        { 
            year: '2018', 
            title: 'Regulatory Reporting System', 
            tech: 'JAVA / ELASTICSEARCH', 
            description: 'Automated EMIR and Dodd-Frank transaction reporting platform.' 
        }
    ];

    return (
        <main className="plate content-sheet">
            <PageHeader 
                title="Project Portfolio" 
                subtitle="12 Projects ✹" 
            />

            <p className="intro-text" style={{ fontSize: '36px', marginBottom: '60px' }}>
                A selection of <span>production systems</span> deployed at scale across 
                trading firms, hedge funds, and decentralized protocols.
            </p>

            <Divider height="4px" />

            <div style={{ marginTop: '40px' }}>
                <div className="project-list">
                    {allProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="project-item" 
                            style={{ 
                                gridTemplateColumns: '80px 1fr', 
                                gridTemplateRows: 'auto auto', 
                                rowGap: '12px' 
                            }}
                        >
                            <span className="project-year" style={{ gridRow: '1 / 3' }}>
                                {project.year}
                            </span>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center' 
                            }}>
                                <span className="project-title" style={{ fontSize: '24px' }}>
                                    {project.title}
                                </span>
                                <span className="project-tech">{project.tech}</span>
                            </div>
                            <p style={{ 
                                fontSize: '16px', 
                                opacity: '0.8', 
                                lineHeight: '1.5', 
                                gridColumn: '2' 
                            }}>
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default ProjectsContent;
