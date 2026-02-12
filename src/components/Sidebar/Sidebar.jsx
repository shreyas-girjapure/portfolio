import { useState, useEffect } from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

function Sidebar({ activeView, setActiveView }) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when navigating
    const handleNavigate = (view) => {
        setActiveView(view);
        setMenuOpen(false);
    };

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            {/* Mobile top bar */}
            <div className="mobile-topbar">
                <span className="mobile-topbar-name">Shreyas Girjapure</span>
                <button 
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile overlay menu */}
            {menuOpen && (
                <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
            )}

            <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
                <Profile />
                <Navigation activeView={activeView} setActiveView={handleNavigate} />
                <ContactButton />
            </aside>
        </>
    );
}

export default Sidebar;
