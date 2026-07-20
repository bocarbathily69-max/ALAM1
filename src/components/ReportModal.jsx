import React from 'react';
import { X, Calendar, User, FileText, CheckCircle, ShieldAlert } from 'lucide-react';

const ReportModal = ({ report, onClose }) => {
  if (!report) return null;

  // Calcul des scopes fictifs mais 100% coherents avec les emissions du site
  const emissionsVal = report.emissions;
  const scope1Calculated = Math.round(emissionsVal * 0.35); // 35%
  const scope2Calculated = emissionsVal - scope1Calculated;  // 65%

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header de la modale */}
        <div className="modal-header">
          <div>
            <h3>{report.name}</h3>
            <div className="modal-header-subtitle">{report.country} — Carbon Audit Report</div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Corps de la modale */}
        <div className="modal-body">
          {/* Section KPIs */}
          <div>
            <div className="modal-section-title">Audit Summary Indicators</div>
            <div className="modal-stats-grid">
              <div className="modal-stat-box">
                <div className="modal-stat-label">Total Carbon</div>
                <div className="modal-stat-value">
                  {report.emissions}
                  <span className="modal-stat-unit">tCO2e</span>
                </div>
              </div>
              <div className="modal-stat-box">
                <div className="modal-stat-label">Scope 1</div>
                <div className="modal-stat-value">
                  {scope1Calculated}
                  <span className="modal-stat-unit">tCO2e</span>
                </div>
              </div>
              <div className="modal-stat-box">
                <div className="modal-stat-label">Scope 2</div>
                <div className="modal-stat-value">
                  {scope2Calculated}
                  <span className="modal-stat-unit">tCO2e</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fiche d'informations d'audit */}
          <div>
            <div className="modal-section-title">Audit Metadata</div>
            <div className="modal-audit-details">
              <div className="modal-audit-row">
                <div className="modal-audit-label">
                  <Calendar size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }} />
                  Audit Period:
                </div>
                <div className="modal-audit-value">FY2025 Annual Audit</div>
              </div>
              <div className="modal-audit-row">
                <div className="modal-audit-label">
                  <User size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }} />
                  Lead Auditor:
                </div>
                <div className="modal-audit-value">Bureau Veritas Certification</div>
              </div>
              <div className="modal-audit-row">
                <div className="modal-audit-label">
                  <FileText size={14} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }} />
                  Compliance Standard:
                </div>
                <div className="modal-audit-value">ISO 14064-1:2018</div>
              </div>
              <div className="modal-audit-row" style={{ marginTop: '0.25rem', paddingTop: '0.5rem', borderTop: '1px dashed var(--color-border)' }}>
                <div className="modal-audit-label">Status:</div>
                <div className="modal-audit-value" style={{
                  color: report.status === 'Audit Complete' ? '#10b981' : '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  {report.status === 'Audit Complete' ? (
                    <>
                      <CheckCircle size={14} /> Approved & Signed
                    </>
                  ) : (
                    <>
                      <ShieldAlert size={14} /> Under Final Review
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section recommandations */}
          <div>
            <div className="modal-section-title">Key Decarbonization Pathways</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Sur la base du bilan de <strong>{report.emissions} tCO2e</strong> pour le site de <strong>{report.name}</strong>, les priorités d'action recommandées par notre modèle IA pour réduire les émissions de Scope 2 (électricité) de {scope2Calculated} tCO2e et Scope 1 de {scope1Calculated} tCO2e sont les suivantes :
            </p>
            <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.25rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Transition Énergétique (Scope 2)</strong> : Négocier un contrat PPA (Power Purchase Agreement) d'électricité 100% renouvelable.</li>
              <li><strong>Efficacité Thermique (Scope 1)</strong> : Remplacement des chaudières par des pompes à chaleur industrielles.</li>
              <li><strong>Mobilité Responsable</strong> : Électrification de la flotte de véhicules locaux du site.</li>
            </ul>
          </div>
        </div>

        {/* Footer de la modale */}
        <div className="modal-footer">
          <button className="modal-btn-close" onClick={onClose}>
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
