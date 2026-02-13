import ThemeToggle from '../common/ThemeToggle';

function ContactButton() {
    return (
        <div className="plate contact-plate" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a 
                    href="mailto:shreyasgirjapure1122@gmail.com" 
                    className="cv-download" 
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M22 4l-10 8L2 4"></path>
                    </svg>
                    <span style={{ fontWeight: '700', fontSize: '13px' }}>Email</span>
                </a>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <a 
                        href="https://linkedin.com/in/shreyas-girjapure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontWeight: '600', fontSize: '13px', textDecoration: 'none', color: 'inherit', opacity: 0.8 }}
                    >
                        LinkedIn ↗
                    </a>
                    <a 
                        href="https://github.com/shreyas-girjapure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontWeight: '600', fontSize: '13px', textDecoration: 'none', color: 'inherit', opacity: 0.8 }}
                    >
                        GitHub ↗
                    </a>
                </div>
            </div>
            <ThemeToggle />
        </div>
    );
}

export default ContactButton;
