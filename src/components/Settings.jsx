import React, { useState } from 'react';
import {
  Settings as SettingsIcon, Sliders, Shield, Key, Bell,
  Save, CheckCircle2, RefreshCw, Zap, Server, Globe
} from 'lucide-react';

const Settings = () => {
  const [saved, setSaved] = useState(false);
  const [netZeroYear, setNetZeroYear] = useState('2030');
  const [emissionsFactorSource, setEmissionsFactorSource] = useState('DEFRA / IEA 2025 Standard');
  const [autoSync, setAutoSync] = useState(true);
  const [thresholdAlert, setThresholdAlert] = useState('500');

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="reports-page-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* ── Header Notification Banner ── */}
      {saved && (
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', padding: '0.85rem 1.25rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>
          <CheckCircle2 size={18} />
          Settings successfully saved and synchronized across all organizational units!
        </div>
      )}

      {/* ── Organization Carbon Target Settings Card ── */}
      <div className="table-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(11, 176, 116, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0bb074' }}>
            <Zap size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>Carbon Targets & Net-Zero Horizon</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Configure global organizational reduction goals and emission factor providers</p>
          </div>
        </div>

        <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-text-secondary)', uppercase: 'true', marginBottom: '0.35rem' }}>
              TARGET NET-ZERO YEAR
            </label>
            <select
              value={netZeroYear}
              onChange={(e) => setNetZeroYear(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-family)', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}
            >
              <option value="2030">2030 (Aggressive SBTi Horizon)</option>
              <option value="2040">2040 (Standard Corporate Target)</option>
              <option value="2050">2050 (Paris Agreement Baseline)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-text-secondary)', uppercase: 'true', marginBottom: '0.35rem' }}>
              PRIMARY EMISSION FACTOR DATABASE
            </label>
            <select
              value={emissionsFactorSource}
              onChange={(e) => setEmissionsFactorSource(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-family)', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}
            >
              <option value="DEFRA / IEA 2025 Standard">DEFRA / IEA 2025 Certified Database</option>
              <option value="US EPA eGRID 2024">US EPA eGRID 2024</option>
              <option value="Base Carbone ADEME France">ADEME Base Carbone France</option>
              <option value="Custom Regional Hybrid">Custom Regional Hybrid (African Utilities)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-text-secondary)', uppercase: 'true', marginBottom: '0.35rem' }}>
              EXCEEDED EMISSION ALERT THRESHOLD (tCO₂e / Month)
            </label>
            <input
              type="number"
              value={thresholdAlert}
              onChange={(e) => setThresholdAlert(e.target.value)}
              style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontFamily: 'var(--font-family)', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-text-secondary)', uppercase: 'true', marginBottom: '0.35rem' }}>
              TELEMETRY AUTO-SYNCHRONIZATION
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
              <input
                type="checkbox"
                id="autoSyncCheck"
                checked={autoSync}
                onChange={(e) => setAutoSync(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: 'var(--color-brand-active)', cursor: 'pointer' }}
              />
              <label htmlFor="autoSyncCheck" style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)', cursor: 'pointer', fontWeight: '500' }}>
                Automatically fetch live energy meter feeds every 24 hours
              </label>
            </div>
          </div>

          <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
            <button
              type="submit"
              className="review-approve-btn"
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}
            >
              <Save size={16} /> Save Configuration
            </button>
          </div>
        </form>
      </div>

      {/* ── Data Connectors & Integrations Card ── */}
      <div className="table-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justify: 'center', color: '#3b82f6' }}>
            <Server size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>IoT Smart Meters & API Connectors</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Status of automated telemetry feeds and ERP integrations</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Globe size={20} style={{ color: '#0bb074' }} />
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>Lagos HQ Diesel Generator IoT Sensor Feed</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Status: Active • Frequency: Real-time via MQTT Protocol</p>
              </div>
            </div>
            <span className="inventory-status-pill verified">Connected</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Server size={20} style={{ color: '#3b82f6' }} />
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>SAP ERP Utility Billing Auto-Sync API</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Status: Active • Frequency: Monthly Invoice Scraper</p>
              </div>
            </div>
            <span className="inventory-status-pill verified">Connected</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Key size={20} style={{ color: '#f59e0b' }} />
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-text-primary)' }}>AWS / Azure Cloud Carbon Footprint API</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Status: Pending Key Authorization</p>
              </div>
            </div>
            <span className="inventory-status-pill pending-review">Pending Setup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
