import React from 'react';

const ConsolidatedTable = ({ sites, onViewReport }) => {
  return (
    <div className="table-card">
      <div className="table-header">
        <h3>Multi-site Consolidated Bilans</h3>
        <p>Performance by operational unit</p>
      </div>

      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Emissions</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site) => (
              <tr key={site.name}>
                <td>
                  <div className="location-cell">
                    <span className="location-name">{site.name}</span>
                    <span className="location-country">{site.country}</span>
                  </div>
                </td>
                <td>
                  <div className="emissions-cell">
                    {site.emissions} <span>tCO2e</span>
                  </div>
                </td>
                <td>
                  <div className="status-badge">
                    <span className="status-dot" style={{
                      backgroundColor: site.status === 'Audit Complete' ? '#10b981' : '#f59e0b'
                    }}></span>
                    <span style={{
                      color: site.status === 'Audit Complete' ? '#10b981' : '#f59e0b'
                    }}>{site.status}</span>
                  </div>
                </td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => onViewReport(site)}
                  >
                    View Report
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsolidatedTable;
