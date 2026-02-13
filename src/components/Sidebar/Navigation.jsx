import NavItem from './NavItem';

function Navigation({ activeView, setActiveView }) {
    const navItems = [
        { id: 'overview', label: 'Overview', count: '01' },
        { id: 'projects', label: 'Experience', count: '03' },
        { id: 'technical', label: 'Technical Stack', count: '10' },
        { id: 'publications', label: 'Certifications', count: '05' }
    ];

    return (
        <nav className="plate nav-plate">
            <h2 style={{ 
                marginTop: '20px', 
                borderBottom: '2px solid black', 
                paddingBottom: '8px' 
            }}>
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
                <div className="flex-row" style={{ 
                    marginTop: '24px', 
                    border: '2px solid var(--text-primary)', 
                    padding: '12px' 
                }}>
                    <span style={{ fontSize: '14px', fontWeight: '700' }}>
                        System Status
                    </span>
                    <span style={{ fontSize: '14px', color: 'var(--accent-orange)' }}>
                        ● Stable
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
