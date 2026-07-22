import React, { useState } from 'react';
import {
  Search, Filter, Package, AlertCircle, CheckCircle2,
  Clock, ShieldCheck, FileText, X, ArrowUpRight, Layers, Factory, Fuel
} from 'lucide-react';

/* ─── Asset Details Modal Sub-component ─────────────────────────────────── */
const AssetDetailModal = ({ asset, onClose }) => {
  if (!asset) return null;

  const scopeBadgeColor =
    asset.scope === 'Scope 1'
      ? { bg: 'rgba(30, 58, 138, 0.1)', text: '#1e3a8a' }
      : asset.scope === 'Scope 2'
      ? { bg: 'rgba(59, 130, 246, 0.1)', text: '#3b82f6' }
      : { bg: 'rgba(107, 114, 128, 0.1)', text: '#4b5563' };

  const statusBadgeColor =
    asset.status === 'Verified'
      ? { bg: 'rgba(16, 185, 129, 0.1)', text: '#10b981', icon: CheckCircle2 }
      : asset.status === 'Action Required'
      ? { bg: 'rgba(239, 68, 68, 0.1)', text: '#ef4444', icon: AlertCircle }
      : { bg: 'rgba(245, 158, 11, 0.1)', text: '#f59e0b', icon: Clock };

  const StatusIcon = statusBadgeColor.icon;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px' }}
      >
        <div className="modal-header">
          <div>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}
            >
              {asset.id} • Asset Specification
            </span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#ffffff', marginTop: '2px' }}>
              {asset.name}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          {/* Header Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span
              style={{
                background: scopeBadgeColor.bg,
                color: scopeBadgeColor.text,
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px'
              }}
            >
              {asset.scope}
            </span>
            <span
              style={{
                background: statusBadgeColor.bg,
                color: statusBadgeColor.text,
                fontSize: '0.75rem',
                fontWeight: '600',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <StatusIcon size={13} />
              {asset.status}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>
              Last Audited: {asset.auditedDate || 'N/A'}
            </span>
          </div>

          {/* Key Numbers Grid */}
          <div className="review-metrics-grid">
            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(11, 176, 116, 0.1)', color: '#0bb074' }}>
                <Factory size={18} />
              </div>
              <div>
                <p className="review-metric-label">Annual Footprint</p>
                <p className="review-metric-value">{asset.emissions} tCO₂e</p>
              </div>
            </div>

            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                <Fuel size={18} />
              </div>
              <div>
                <p className="review-metric-label">Annual Activity</p>
                <p className="review-metric-value" style={{ fontSize: '0.85rem' }}>{asset.consumption}</p>
              </div>
            </div>

            <div className="review-metric-item">
              <div className="review-metric-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                <Layers size={18} />
              </div>
              <div>
                <p className="review-metric-label">Emission Factor</p>
                <p className="review-metric-value" style={{ fontSize: '0.82rem' }}>{asset.factor}</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="modal-audit-details">
            <div className="modal-audit-row">
              <span className="modal-audit-label">Category</span>
              <span className="modal-audit-value">{asset.category}</span>
            </div>
            <div className="modal-audit-row">
              <span className="modal-audit-label">Site / Facility</span>
              <span className="modal-audit-value">{asset.location}</span>
            </div>
            <div className="modal-audit-row">
              <span className="modal-audit-label">Calculation Methodology</span>
              <span className="modal-audit-value">GHG Protocol Corporate Standard (Activity × EF)</span>
            </div>
            <div className="modal-audit-row">
              <span className="modal-audit-label">Data Provider Source</span>
              <span className="modal-audit-value">DEFRA / IEA 2025 Database</span>
            </div>
          </div>

          {/* Notes */}
          {asset.notes && (
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-text-secondary)', uppercase: 'true', marginBottom: '0.35rem' }}>
                AUDITOR NOTES & CONTEXT
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                {asset.notes}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="review-modal-footer">
            <button className="review-close-btn" onClick={onClose}>
              Close
            </button>
            <button className="review-approve-btn">
              <FileText size={15} />
              Export Spec Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Inventory Component ────────────────────────────────────────────── */
const Inventory = ({ items = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Compute summary stats
  const totalEmissions = items.reduce((acc, item) => acc + (item.emissions || 0), 0);
  const scope1Total = items.filter(i => i.scope === 'Scope 1').reduce((acc, item) => acc + (item.emissions || 0), 0);
  const scope2Total = items.filter(i => i.scope === 'Scope 2').reduce((acc, item) => acc + (item.emissions || 0), 0);
  const scope3Total = items.filter(i => i.scope === 'Scope 3').reduce((acc, item) => acc + (item.emissions || 0), 0);

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesScope = scopeFilter === 'All' || item.scope === scopeFilter;
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

    return matchesSearch && matchesScope && matchesStatus;
  });

  return (
    <div className="inventory-page-container">
      {/* ── KPI Summary Cards Bar ── */}
      <div className="kpi-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="kpi-card footprint">
          <div className="kpi-header">TRACKED ASSETS</div>
          <div className="kpi-value-container">
            <span className="kpi-value">{items.length}</span>
            <span className="kpi-unit">sources</span>
          </div>
          <div className="kpi-footer">
            <span className="trend-indicator down">
              <ShieldCheck size={14} /> 100% Covered
            </span>
          </div>
        </div>

        <div className="kpi-card footprint">
          <div className="kpi-header">INVENTORY EMISSIONS</div>
          <div className="kpi-value-container">
            <span className="kpi-value">{totalEmissions.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
            <span className="kpi-unit">tCO₂e</span>
          </div>
          <div className="kpi-footer">
            <span>Sum of active registers</span>
          </div>
        </div>

        <div className="kpi-card scope1-2">
          <div className="kpi-header">SCOPE 1 & 2 DIRECT</div>
          <div className="kpi-value-container">
            <span className="kpi-value">{(scope1Total + scope2Total).toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
            <span className="kpi-unit">tCO₂e</span>
          </div>
          <div className="kpi-footer">
            <span>S1: {scope1Total.toFixed(0)}t • S2: {scope2Total.toFixed(0)}t</span>
          </div>
        </div>

        <div className="kpi-card scope3">
          <div className="kpi-header">SCOPE 3 INDIRECT</div>
          <div className="kpi-value-container">
            <span className="kpi-value">{scope3Total.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
            <span className="kpi-unit">tCO₂e</span>
          </div>
          <div className="kpi-footer">
            <span>Supply Chain & Travel</span>
          </div>
        </div>
      </div>

      {/* ── Search & Filter Controls Bar ── */}
      <div className="inventory-controls-card">
        <div className="inventory-search-wrapper">
          <Search size={16} className="inventory-search-icon" />
          <input
            type="text"
            className="inventory-search-input"
            placeholder="Search assets by name, category, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="inventory-filter-group">
          {/* Scope Filter Pills */}
          <div className="scope-pills">
            {['All', 'Scope 1', 'Scope 2', 'Scope 3'].map((scope) => (
              <button
                key={scope}
                className={`scope-pill ${scopeFilter === scope ? 'active' : ''}`}
                onClick={() => setScopeFilter(scope)}
              >
                {scope}
              </button>
            ))}
          </div>

          {/* Status Dropdown Filter */}
          <div className="status-select-wrapper">
            <Filter size={14} style={{ color: 'var(--color-text-muted)' }} />
            <select
              className="status-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Verified">Verified</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Action Required">Action Required</option>
              <option value="Estimated">Estimated</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Inventory Table Card ── */}
      <div className="table-card" style={{ marginTop: '1.25rem' }}>
        <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>Emissions Asset Inventory</h3>
            <p>Comprehensive register of audited emission activities and energy assets</p>
          </div>
          <span className="proposals-badge">
            {filteredItems.length} OF {items.length} ITEMS
          </span>
        </div>

        <div className="data-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset ID & Name</th>
                <th>Category</th>
                <th>Scope</th>
                <th>Location</th>
                <th>Activity / Consumption</th>
                <th>Emissions (tCO₂e)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="inventory-table-row">
                    <td>
                      <div className="location-cell">
                        <span className="location-name" style={{ fontSize: '0.9rem' }}>{item.name}</span>
                        <span className="location-country" style={{ fontSize: '0.72rem' }}>{item.id}</span>
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`inventory-scope-badge ${item.scope.toLowerCase().replace(' ', '-')}`}
                      >
                        {item.scope}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-primary)', fontWeight: '500' }}>
                        {item.location}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>
                        {item.consumption}
                      </span>
                    </td>
                    <td className="emissions-cell">
                      {item.emissions} <span>tCO₂e</span>
                    </td>
                    <td>
                      <span className={`inventory-status-pill ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.status === 'Verified' && <CheckCircle2 size={12} />}
                        {item.status === 'Action Required' && <AlertCircle size={12} />}
                        {(item.status === 'Pending Review' || item.status === 'Estimated') && <Clock size={12} />}
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="action-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                        onClick={() => setSelectedAsset(item)}
                      >
                        View Specs <ArrowUpRight size={13} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
                    <Package size={36} style={{ marginBottom: '0.5rem', opacity: 0.5 }} />
                    <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>No assets match your search or filter criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Asset Details Modal ── */}
      {selectedAsset && (
        <AssetDetailModal
          asset={selectedAsset}
          onClose={() => setSelectedAsset(null)}
        />
      )}
    </div>
  );
};

export default Inventory;
