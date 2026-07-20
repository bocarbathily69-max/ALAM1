import React, { useState, useEffect } from 'react';
import {
  Zap, ArrowRight, ChevronRight, ChevronLeft, X,
  TrendingDown, DollarSign, CheckCircle2, Clock
} from 'lucide-react';

/* ─── Sub-component : Review Case Modal ─────────────────────────────────── */
const ReviewCaseModal = ({ proposal, onClose }) => {
  if (!proposal) return null;

  const impactColor =
    proposal.impact === 'High Impact'
      ? { bg: 'rgba(239,68,68,0.12)', text: '#ef4444' }
      : proposal.impact === 'Medium Impact'
      ? { bg: 'rgba(245,158,11,0.12)', text: '#f59e0b' }
      : { bg: 'rgba(16,185,129,0.12)', text: '#10b981' };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '560px' }}
      >
        <div className="modal-header">
          <div>
            <p className="modal-header-subtitle">AI Decarbonization Planner</p>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginTop: '2px' }}>
              {proposal.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{
              alignSelf: 'flex-start',
              background: impactColor.bg,
              color: impactColor.text,
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '0.3rem 0.75rem',
              borderRadius: '20px',
              letterSpacing: '0.5px'
            }}>
              {proposal.impact}
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {proposal.desc}
            </p>
          </div>

          <div className="review-metrics-grid">
            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(11,176,116,0.1)', color: '#0bb074' }}>
                <TrendingDown size={18} />
              </div>
              <div>
                <p className="review-metric-label">CO2 Reduction</p>
                <p className="review-metric-value">{proposal.reduction || 'N/A'}</p>
              </div>
            </div>
            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>
                <DollarSign size={18} />
              </div>
              <div>
                <p className="review-metric-label">Investment Cost</p>
                <p className="review-metric-value">{proposal.cost || 'N/A'}</p>
              </div>
            </div>
            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>
                <Clock size={18} />
              </div>
              <div>
                <p className="review-metric-label">Payback Period</p>
                <p className="review-metric-value">{proposal.roi || 'N/A'}</p>
              </div>
            </div>
          </div>

          {proposal.steps && proposal.steps.length > 0 && (
            <div>
              <h4 className="review-section-heading">Implementation Roadmap</h4>
              <ol className="review-steps-list">
                {proposal.steps.map((step, i) => (
                  <li key={i} className="review-step-item">
                    <span className="review-step-number">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="review-modal-footer">
            <button className="review-close-btn" onClick={onClose}>Close</button>
            <button className="review-approve-btn">
              <CheckCircle2 size={15} />
              Approve Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
const DecarbonizationPlanner = ({ proposals }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewProposal, setReviewProposal] = useState(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [proposals]);

  const nextProposal = () =>
    setCurrentIndex((prev) => (prev + 1) % proposals.length);
  const prevProposal = () =>
    setCurrentIndex((prev) => (prev - 1 + proposals.length) % proposals.length);

  const currentProposal = proposals[currentIndex] || proposals[0];

  return (
    <>
      <div className="planner-card">
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
              <button
                className="proposal-link proposal-review-btn"
                onClick={() => setReviewProposal(currentProposal)}
                aria-label={`Review case for ${currentProposal.title}`}
              >
                Review Case <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {proposals.length > 1 && (
          <div className="planner-pagination">
            <div className="planner-dots">
              {proposals.map((_, i) => (
                <button
                  key={i}
                  className={`planner-dot${i === currentIndex ? ' active' : ''}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to proposal ${i + 1}`}
                />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button className="planner-nav-btn" onClick={prevProposal} aria-label="Previous">
                <ChevronLeft size={16} />
              </button>
              <button className="planner-nav-btn" onClick={nextProposal} aria-label="Next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {reviewProposal && (
        <ReviewCaseModal
          proposal={reviewProposal}
          onClose={() => setReviewProposal(null)}
        />
      )}
    </>
  );
};

export default DecarbonizationPlanner;
