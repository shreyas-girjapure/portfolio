import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import OverviewContent from './components/pages/OverviewContent'
import ProjectsContent from './components/pages/ProjectsContent'
import TechnicalContent from './components/pages/TechnicalContent'
import PublicationsContent from './components/pages/PublicationsContent'

function App() {
    const [activeView, setActiveView] = useState('overview');

    const renderContent = () => {
        switch(activeView) {
            case 'projects':
                return <ProjectsContent />;
            case 'technical':
                return <TechnicalContent />;
            case 'publications':
                return <PublicationsContent />;
            case 'overview':
            default:
                return <OverviewContent />;
        }
    };

    return (
        <div className="layout-container">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
            {renderContent()}
        </div>
    );
}

export default App
