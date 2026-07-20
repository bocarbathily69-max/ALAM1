import React from 'react';
import { TrendingDown } from 'lucide-react';

const KPICards = ({ kpis }) => {
  const { totalCarbon, reductionProgress, scope1_2, scope3 } = kpis;

  return (
    <section className="kpi-grid">
      {/* Total Carbon Footprint Card */}
      <div className="kpi-card footprint">
        <div className="kpi-header">Total Carbon Footprint</div>
        <div className="kpi-value-container">
          <div className="kpi-value">{totalCarbon.value}</div>
          <div className="kpi-unit">tCO2e</div>
        </div>
        <div className="kpi-footer">
          <span className="trend-indicator down">
            <TrendingDown size={14} /> {totalCarbon.text}
          </span>
        </div>
      </div>

      {/* Target Reduction Progress Card */}
      <div className="kpi-card progress">
        <div className="kpi-header">Target Reduction Progress</div>
        <div className="kpi-value-container">
          <div className="kpi-value">{reductionProgress.value}</div>
          <div className="kpi-unit" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginLeft: '4px' }}>
            {reductionProgress.text}
          </div>
        </div>
        <div className="kpi-footer" style={{ width: '100%' }}>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${reductionProgress.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scope 1 & 2 Emissions Card */}
      <div className="kpi-card scope1-2">
        <div className="kpi-header">Scope 1 & 2 Emissions</div>
        <div className="kpi-value-container">
          <div className="kpi-value">{scope1_2.value}</div>
          <div className="kpi-unit">tCO2e</div>
        </div>
        <div className="kpi-footer">
          <span className="kpi-badge">{scope1_2.badge}</span>
        </div>
      </div>

      {/* Scope 3 Value Chain Card */}
      <div className="kpi-card scope3">
        <div className="kpi-header">Scope 3 Value Chain</div>
        <div className="kpi-value-container">
          <div className="kpi-value">{scope3.value}</div>
          <div className="kpi-unit">tCO2e</div>
        </div>
        <div className="kpi-footer">
          <span style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#94a3b8' }}>
            {scope3.text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default KPICards;
