import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DataCoreCollection from './pages/DataCoreCollection';
import DigitalLegalServices from './pages/DigitalLegalServices';
import PanIndiaPresence from './pages/PanIndiaPresence';
import CampaignManagement from './pages/CampaignManagement';
import SkipTrace from './pages/SkipTrace';
import TechnologyPage from './pages/TechnologyPage';
import TeamPage from './pages/TeamPage';
import PanelLogin from './pages/PanelLogin';

// Modals
import ProjectModal from './components/ProjectModal';
import CaseStudyModal from './components/CaseStudyModal';
import ScheduleModal from './components/ScheduleModal';

function App() {
  const currentPage = useSelector((state) => state.navigation.currentPage);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about-us':
        return <AboutUs />;
      case 'contact-us':
        return <ContactUs />;
      case 'data-core':
        return <DataCoreCollection />;
      case 'digital-legal':
        return <DigitalLegalServices />;
      case 'pan-india':
        return <PanIndiaPresence />;
      case 'campaign-management':
        return <CampaignManagement />;
      case 'skip-trace':
        return <SkipTrace />;
      case 'technology':
        return <TechnologyPage />;
      case 'team':
        return <TeamPage />;
      case 'panel-login':
        return <PanelLogin />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* 1. Header Navigation Bar (Matches screenshot with hover dropdowns) */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 2. Consistent Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <ProjectModal />
      <CaseStudyModal />
      <ScheduleModal />
    </div>
  );
}

export default App;
