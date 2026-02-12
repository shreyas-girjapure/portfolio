import ThemeToggle from '../common/ThemeToggle';

function ContactButton() {
    return (
        <div className="plate contact-plate" style={{ justifyContent: 'space-between' }}>
            <div className="cv-download" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <span style={{ fontWeight: '700', fontSize: '16px' }}>
                    Download CV
                </span>
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </div>
            <ThemeToggle />
        </div>
    );
}

export default ContactButton;
