import Profile from './Profile';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

function Sidebar({ activeView, setActiveView }) {
    return (
        <aside className="sidebar">
            <Profile />
            <Navigation activeView={activeView} setActiveView={setActiveView} />
            <ContactButton />
        </aside>
    );
}

export default Sidebar;
