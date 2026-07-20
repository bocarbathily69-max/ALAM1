import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartsSection = ({ evolution, sources }) => {
  // Stacked Bar Chart Data
  const barData = {
    labels: evolution.labels,
    datasets: [
      {
        label: 'Scope 1',
        data: evolution.scope1,
        backgroundColor: '#012c1c', // Vert forêt profond
        borderRadius: 4,
      },
      {
        label: 'Scope 2',
        data: evolution.scope2,
        backgroundColor: '#0bb074', // Vert vif
        borderRadius: 4,
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            family: 'Outfit',
            size: 11,
            weight: '500'
          },
          color: '#475569'
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 10,
        titleFont: { family: 'Outfit', size: 12, weight: 'bold' },
        bodyFont: { family: 'Outfit', size: 12 },
        cornerRadius: 6
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        },
        ticks: {
          font: { family: 'Outfit', size: 11, weight: '500' },
          color: '#94a3b8'
        },
        border: {
          display: false
        }
      },
      y: {
        stacked: true,
        grid: {
          color: '#e2e8f0',
          tickLength: 0
        },
        ticks: {
          font: { family: 'Outfit', size: 11 },
          color: '#94a3b8'
        },
        border: {
          dash: [4, 4],
          display: false
        }
      }
    }
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: sources.labels,
    datasets: [
      {
        data: sources.values,
        backgroundColor: [
          '#0c3e2b', // Electricity - Vert moyen/profond
          '#0bb074', // Logistics - Vert vif
          '#1e3a8a', // Buildings - Bleu
          '#cbd5e1'  // Other - Gris clair
        ],
        borderWidth: 0,
        cutout: '75%'
      }
    ]
  };

  // Calcul du total pour l'affichage au centre
  const totalEmissions = sources.values.reduce((a, b) => a + b, 0);
  const formattedTotal = (totalEmissions / 1000).toFixed(1) + 'k';

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            family: 'Outfit',
            size: 11,
            weight: '500'
          },
          color: '#475569',
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 10,
        titleFont: { family: 'Outfit', size: 12, weight: 'bold' },
        bodyFont: { family: 'Outfit', size: 12 },
        cornerRadius: 6
      }
    }
  };

  return (
    <section className="charts-grid">
      {/* Emissions Evolution Card */}
      <div className="chart-card">
        <div className="chart-card-header">
          <h3>Emissions Evolution by Scope</h3>
          <p>Monthly historical tracking per tCO2e</p>
        </div>
        <div className="chart-container">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      {/* Emissions by Source Card */}
      <div className="chart-card">
        <div className="chart-card-header">
          <h3>Emissions by Source</h3>
          <p>Asset-level distribution</p>
        </div>
        <div className="chart-container" style={{ position: 'relative' }}>
          <Doughnut data={doughnutData} options={doughnutOptions} />
          
          {/* Centered Total Text */}
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none'
            }}
          >
            <div style={{ fontSize: '1.6rem', fontWeight: '700', color: '#0f172a', lineHeight: 1.1 }}>
              {formattedTotal}
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>
              Total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
