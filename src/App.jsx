import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import MissionPage from './pages/MissionPage';
import ActionsPage from './pages/ActionsPage';
import ActionDetailsPage from './pages/ActionDetailsPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-brand-500 selection:text-white flex flex-col">
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/actions/:id" element={<ActionDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
