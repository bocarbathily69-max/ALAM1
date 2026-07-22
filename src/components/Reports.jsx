import React, { useState } from 'react';
import {
  FileText, Download, Award, ShieldCheck, CheckCircle2,
  Clock, AlertCircle, Printer, X, FileCheck, Layers, Sparkles, ExternalLink, Filter, Search
} from 'lucide-react';

/* ─── Default Fallback Reports ─────────────────────────────────────────── */
const defaultReports = [
  {
    id: "REP-2026-01",
    title: "Annual GHG Protocol Accounting Report",
    standard: "GHG Protocol Corporate Standard",
    period: "FY 2025 - 2026",
    verifiedEmissions: "1,240 tCO₂e",
    scopeBreakdown: { scope1: 324, scope2: 496, scope3: 420 },
    verifier: "EcoCert Veritas International",
    status: "Certified",
    issuedDate: "2026-06-15",
    summary: "Full corporate carbon inventory audit across all African operating facilities. Comprehensive coverage of Scope 1, 2, and initial Scope 3 categories."
  },
  {
    id: "REP-2026-02",
    title: "ISO 14064-1 Carbon Footprint Verification Statement",
    standard: "ISO 14064-1:2018",
    period: "H1 2026 Baseline",
    verifiedEmissions: "620 tCO₂e",
    scopeBreakdown: { scope1: 160, scope2: 250, scope3: 210 },
    verifier: "Global Carbon Standards Bureau",
    status: "Certified",
    issuedDate: "2026-07-01",
    summary: "Independent third-party verification statement validating quantification and reporting of greenhouse gas emissions at corporate facilities."
  },
  {
    id: "REP-2026-03",
    title: "CSRD Sustainability & ESG Disclosure Report",
    standard: "EU Corporate Sustainability Reporting Directive",
    period: "Q1 - Q2 2026",
    verifiedEmissions: "620 tCO₂e",
    scopeBreakdown: { scope1: 160, scope2: 250, scope3: 210 },
    verifier: "Deloitte ESG Assurance Services",
    status: "Under Review",
    issuedDate: "2026-07-18",
    summary: "Double-materiality ESG carbon report covering climate adaptation, transition risks, energy efficiency KPIs, and Net-Zero milestone tracking."
  },
  {
    id: "REP-2026-04",
    title: "Decarbonization Roadmap & Net-Zero Target Audit",
    standard: "SBTi Corporate Net-Zero Standard",
    period: "2026 - 2030 Horizon",
    verifiedEmissions: "Target: -45% by 2030",
    scopeBreakdown: { scope1: 180, scope2: 210, scope3: 310 },
    verifier: "ALAM AI Advisory Engine",
    status: "Draft",
    issuedDate: "2026-07-20",
    summary: "Strategic projection analysis detailing capital expenditure requirements, ROI payback periods, and projected emissions reductions for top 5 initiatives."
  }
];

/* ─── Preset Report Template Cards Config ───────────────────────────────── */
const reportTemplates = [
  {
    id: "ghg-protocol",
    title: "GHG Protocol Audit",
    subtitle: "Scopes 1, 2 & 3 Emissions Inventory",
    badge: "Official Standard",
    badgeBg: "rgba(11, 176, 116, 0.1)",
    badgeColor: "#0bb074",
    desc: "Complete greenhouse gas accounting aligned with WRI/WBCSD standards. Mandatory for compliance reporting."
  },
  {
    id: "iso-14064",
    title: "ISO 14064 Certificate",
    subtitle: "Third-Party Verified Statement",
    badge: "Certified Audit",
    badgeBg: "rgba(59, 130, 246, 0.1)",
    badgeColor: "#3b82f6",
    desc: "Verification statement detailing organization-level quantification, monitoring, and reduction metrics."
  },
  {
    id: "csrd-esg",
    title: "CSRD / ESG Disclosure",
    subtitle: "EU Sustainability Reporting",
    badge: "Regulatory",
    badgeBg: "rgba(245, 158, 11, 0.1)",
    badgeColor: "#f59e0b",
    desc: "Comprehensive ESG metrics export for European CSRD compliance, carbon tax alignment, and investor reports."
  },
  {
    id: "netzero-brief",
    title: "Net-Zero Executive Brief",
    subtitle: "SBTi Decarbonization Plan",
    badge: "AI Generated",
    badgeBg: "rgba(147, 51, 234, 0.1)",
    badgeColor: "#9333ea",
    desc: "Executive summary for C-suite decision makers with cap-ex requirements, ROI projections, and milestone charts."
  }
];

/* ─── Full Interactive Report Viewer Modal ───────────────────────────────── */
const ReportViewerModal = ({ report, onClose }) => {
  if (!report) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container report-viewer-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '680px', width: '92%' }}
      >
        {/* Certificate Style Header */}
        <div
          className="modal-header"
          style={{
            background: 'linear-gradient(135deg, #012c1c 0%, #0c3e2b 100%)',
            padding: '1.75rem 2rem',
            borderBottom: '2px solid #0bb074'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <ShieldCheck size={16} style={{ color: '#0bb074' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {report.id} • Official Audit Certificate
              </span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#ffffff' }}>
              {report.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* Certificate Content Body */}
        <div className="modal-body" style={{ padding: '2rem' }}>
          {/* Metadata Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>ACCOUNTING FRAMEWORK</p>
              <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{report.standard}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>REPORTING PERIOD</p>
              <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{report.period}</p>
            </div>
          </div>

          {/* Verified Footprint Callout Box */}
          <div
            style={{
              background: 'rgba(11, 176, 116, 0.06)',
              border: '1px solid rgba(11, 176, 116, 0.3)',
              borderRadius: '16px',
              padding: '1.5rem',
              textAlign: 'center',
              margin: '0.5rem 0'
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              VERIFIED CORPORATE CARBON FOOTPRINT
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-brand-dark)', margin: '0.25rem 0' }}>
              {report.verifiedEmissions}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-trend-down)', fontWeight: '600' }}>
              <CheckCircle2 size={14} style={{ display: 'inline', marginRight: '0.3rem', verticalAlign: 'middle' }} />
              100% Data Points Audited & Verified by {report.verifier}
            </p>
          </div>

          {/* Scope Breakdown Bars */}
          {report.scopeBreakdown && (
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                EMISSIONS BY SCOPE BREAKDOWN
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                    <span>Scope 1 (Direct Fuel & Gas)</span>
                    <span style={{ color: '#1e3a8a' }}>{report.scopeBreakdown.scope1} tCO₂e</span>
                  </div>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '35%', background: '#1e3a8a', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                    <span>Scope 2 (Purchased Electricity)</span>
                    <span style={{ color: '#3b82f6' }}>{report.scopeBreakdown.scope2} tCO₂e</span>
                  </div>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '45%', background: '#3b82f6', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                    <span>Scope 3 (Supply Chain & Travel)</span>
                    <span style={{ color: '#4b5563' }}>{report.scopeBreakdown.scope3} tCO₂e</span>
                  </div>
                  <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '20%', background: '#4b5563', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Executive Summary */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              EXECUTIVE SUMMARY
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, background: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              {report.summary}
            </p>
          </div>

          {/* Auditor Seal & Signature Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(11, 176, 116, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0bb074' }}>
                <Award size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>{report.verifier}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Certified Issuer • Date: {report.issuedDate}</p>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  background: report.status === 'Certified' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: report.status === 'Certified' ? '#10b981' : '#f59e0b',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <CheckCircle2 size={13} />
                {report.status}
              </span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="review-modal-footer">
            <button className="review-close-btn" onClick={onClose}>
              Close
            </button>
            <button className="review-close-btn" onClick={handlePrint} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Printer size={15} />
              Print Certificate
            </button>
            <button className="review-approve-btn" onClick={handlePrint}>
              <Download size={15} />
              Download PDF Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Reports Component ─────────────────────────────────────────────── */
const Reports = ({ reports = [] }) => {
  const activeReports = (reports && reports.length > 0) ? reports : defaultReports;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = activeReports.filter((rep) =>
    rep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rep.standard.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rep.verifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rep.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGenerateTemplate = (template) => {
    // Open a dynamically constructed report based on the template
    const newReport = {
      id: `REP-${Date.now().toString().slice(-4)}`,
      title: `${template.title} - ${new Date().getFullYear()}`,
      standard: template.subtitle,
      period: `FY ${new Date().getFullYear()}`,
      verifiedEmissions: "1,240 tCO₂e",
      scopeBreakdown: { scope1: 324, scope2: 496, scope3: 420 },
      verifier: "ALAM AI Automated Audit Engine",
      status: "Certified",
      issuedDate: new Date().toISOString().split('T')[0],
      summary: template.desc
    };
    setSelectedReport(newReport);
  };

  return (
    <div className="reports-page-container">
      {/* ── Top Compliance KPI Cards ── */}
      <div className="kpi-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="kpi-card footprint">
          <div className="kpi-header">GENERATED REPORTS</div>
          <div className="kpi-value-container">
            <span className="kpi-value">{activeReports.length}</span>
            <span className="kpi-unit">audits</span>
          </div>
          <div className="kpi-footer">
            <span className="trend-indicator down">
              <FileCheck size={14} /> ISO & GHG Aligned
            </span>
          </div>
        </div>

        <div className="kpi-card footprint">
          <div className="kpi-header">COMPLIANCE INDEX</div>
          <div className="kpi-value-container">
            <span className="kpi-value">98.5%</span>
            <span className="kpi-unit">score</span>
          </div>
          <div className="kpi-footer">
            <span>GHG Protocol Corporate Standard</span>
          </div>
        </div>

        <div className="kpi-card scope1-2">
          <div className="kpi-header">VERIFIED FOOTPRINT</div>
          <div className="kpi-value-container">
            <span className="kpi-value">1,240</span>
            <span className="kpi-unit">tCO₂e</span>
          </div>
          <div className="kpi-footer">
            <span>100% Independent Validation</span>
          </div>
        </div>

        <div className="kpi-card scope3">
          <div className="kpi-header">REGULATORY STANDARDS</div>
          <div className="kpi-value-container">
            <span className="kpi-value">4</span>
            <span className="kpi-unit">frameworks</span>
          </div>
          <div className="kpi-footer">
            <span>CSRD • ISO • SBTi • GHG</span>
          </div>
        </div>
      </div>

      {/* ── Preset Report Generation Templates Section ── */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={18} style={{ color: '#0bb074' }} />
              Generate Certified Report Templates
            </h3>
            <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
              Select a framework below to compile an instant audited report ready for export.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {reportTemplates.map((tpl) => (
            <div
              key={tpl.id}
              className="template-card"
              onClick={() => handleGenerateTemplate(tpl)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div className="template-icon-wrapper">
                  <FileText size={20} />
                </div>
                <span
                  style={{
                    background: tpl.badgeBg,
                    color: tpl.badgeColor,
                    fontSize: '0.68rem',
                    fontWeight: '700',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '12px'
                  }}
                >
                  {tpl.badge}
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}>
                {tpl.title}
              </h4>
              <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--color-brand-active)', marginBottom: '0.5rem' }}>
                {tpl.subtitle}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
                {tpl.desc}
              </p>

              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-brand-dark)' }}>
                Generate & Preview <ExternalLink size={13} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="inventory-controls-card">
        <div className="inventory-search-wrapper" style={{ maxWidth: '500px' }}>
          <Search size={16} className="inventory-search-icon" />
          <input
            type="text"
            className="inventory-search-input"
            placeholder="Search report archive by title, standard, or verifier..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>
          <Filter size={14} /> Showing {filteredReports.length} of {activeReports.length} Archives
        </div>
      </div>

      {/* ── Archived Reports Data Table ── */}
      <div className="table-card" style={{ marginTop: '1.25rem' }}>
        <div className="table-header">
          <h3>Archived Audit Reports & Statements</h3>
          <p>Official repository of verified environmental accounting statements</p>
        </div>

        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Report ID & Title</th>
                <th>Standard / Framework</th>
                <th>Reporting Period</th>
                <th>Verified Emissions</th>
                <th>Auditor / Verifier</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="inventory-table-row">
                    <td>
                      <div className="location-cell">
                        <span className="location-name" style={{ fontSize: '0.9rem' }}>{report.title}</span>
                        <span className="location-country" style={{ fontSize: '0.72rem' }}>{report.id}</span>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                        {report.standard}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-primary)' }}>
                        {report.period}
                      </span>
                    </td>
                    <td className="emissions-cell">
                      {report.verifiedEmissions}
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                        {report.verifier}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`inventory-status-pill ${
                          report.status === 'Certified'
                            ? 'verified'
                            : report.status === 'Under Review'
                            ? 'pending-review'
                            : 'estimated'
                        }`}
                      >
                        {report.status === 'Certified' && <CheckCircle2 size={12} />}
                        {report.status === 'Under Review' && <Clock size={12} />}
                        {report.status === 'Draft' && <AlertCircle size={12} />}
                        {report.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="action-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onClick={() => setSelectedReport(report)}
                      >
                        <FileText size={13} /> View Certificate
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
                    <FileText size={36} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                    <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>No archived reports match your search query.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Interactive Report Viewer Modal ── */}
      {selectedReport && (
        <ReportViewerModal
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
        />
      )}
    </div>
  );
};

export default Reports;
