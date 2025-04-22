// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import TeamView from './pages/TeamView';
import NetworkGraph from './pages/NetworkGraph';
import Alerts from './pages/Alerts';
import PrivacySettings from './pages/PrivacySettings';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={sidebarOpen} toggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className={`content ${sidebarOpen ? '' : 'content-expanded'}`}>
          <Header 
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
            isSidebarOpen={sidebarOpen} 
          />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/teams" element={<TeamView />} />
              <Route path="/network" element={<NetworkGraph />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/privacy" element={<PrivacySettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;