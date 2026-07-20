import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import KPICards from './components/KPICards';
import ChartsSection from './components/ChartsSection';
import DecarbonizationPlanner from './components/DecarbonizationPlanner';
import ConsolidatedTable from './components/ConsolidatedTable';
import { mockData } from './data/mockData';
import ReportModal from './components/ReportModal';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedOrg, setSelectedOrg] = useState('Main Overview');
  const [activeReport, setActiveReport] = useState(null);

  // Recuperation des donnees dynamiques de l'organisation selectionnee
  const currentData = mockData[selectedOrg] || mockData['Main Overview'];

  return (
    <div className="app-container">
      {/* Sidebar de navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Zone de contenu principal */}
      <main className="main-content">
        {/* Barre superieure avec selecteur */}
        <Header selectedOrg={selectedOrg} onOrgChange={setSelectedOrg} />

        {activeTab === 'dashboard' ? (
          <>
            {/* Grille des cartes de statistiques (KPIs) */}
            <KPICards kpis={currentData.kpis} />

            {/* Section des visualisations graphiques */}
            <ChartsSection
              evolution={currentData.evolution}
              sources={currentData.sources}
            />

            {/* Section des actions d'optimisation et bilans consolidés */}
            <section className="bottom-grid">
              <DecarbonizationPlanner proposals={currentData.proposals} />
              <ConsolidatedTable sites={currentData.sites} onViewReport={setActiveReport} />
            </section>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '3rem',
              textAlign: 'center',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(11, 176, 116, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0bb074',
                marginBottom: '1.5rem',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              !
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>
              Section en cours de construction
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', maxWidth: '360px', lineHeight: 1.5 }}>
              Cette partie de l'application ALAM Carbon Intelligence (onglet "{activeTab}") sera disponible prochainement.
            </p>
          </div>
        )}
      </main>

      {/* Modal d'affichage de rapport d'audit carbone local */}
      <ReportModal report={activeReport} onClose={() => setActiveReport(null)} />
    </div>
  );
}

export default App;
