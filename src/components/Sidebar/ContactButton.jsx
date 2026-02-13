import ThemeToggle from '../common/ThemeToggle';
import ExternalLinkIcon from '../common/ExternalLinkIcon';

function ContactButton() {
    return (
        <div className="plate contact-plate" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
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
                    <a 
                        href="https://flowcv.com/resume/cflkjqeu1i"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-download" 
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="12" y1="18" x2="12" y2="12"></line>
                            <polyline points="9 15 12 18 15 15"></polyline>
                        </svg>
                        <span style={{ fontWeight: '700', fontSize: '13px' }}>
                            Resume<ExternalLinkIcon size={11} opacity={0.5} />
                        </span>
                    </a>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <a 
                        href="https://linkedin.com/in/shreyas-girjapure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontWeight: '700', fontSize: '13px', textDecoration: 'none', color: 'inherit', opacity: 1, display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                        LinkedIn<ExternalLinkIcon size={11} opacity={0.5} />
                    </a>
                    <a 
                        href="https://github.com/shreyas-girjapure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ fontWeight: '700', fontSize: '13px', textDecoration: 'none', color: 'inherit', opacity: 1, display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub<ExternalLinkIcon size={11} opacity={0.5} />
                    </a>
                </div>
            </div>
            <ThemeToggle />
        </div>
    );
}

export default ContactButton;
