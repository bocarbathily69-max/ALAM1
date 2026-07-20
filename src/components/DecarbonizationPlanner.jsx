import React, { useState, useEffect } from 'react';
import { Zap, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const DecarbonizationPlanner = ({ proposals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [proposals]);

  const nextProposal = () => {
    setCurrentIndex((prev) => (prev + 1) % proposals.length);
  };

  const prevProposal = () => {
    setCurrentIndex((prev) => (prev - 1 + proposals.length) % proposals.length);
  };

  const currentProposal = proposals[currentIndex] || proposals[0];

  return (
    <div className="planner-card">
      <div>
        <div className="planner-header">
          <div className="planner-header-title">
            <div className="planner-icon-container">
              <Zap size={18} fill="currentColor" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>AI Decarbonization Planner</h3>
            </div>
          </div>
          <span className="proposals-badge">{proposals.length} NEW PROPOSALS</span>
        </div>

        {currentProposal && (
          <div className="proposal-item">
            <div className="proposal-top">
              <span className="proposal-title">{currentProposal.title}</span>
              <span className="proposal-impact">{currentProposal.impact}</span>
            </div>
            
            <p className="proposal-desc">{currentProposal.desc}</p>
            
            <div className="proposal-footer">
              <span className="proposal-roi">{currentProposal.roi}</span>
              <a 
                href={currentProposal.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="proposal-link"
              >
                Review Case <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>

      {proposals.length > 1 && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
          <button
            onClick={prevProposal}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '4px',
              padding: '0.25rem 0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextProposal}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '4px',
              padding: '0.25rem 0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DecarbonizationPlanner;
