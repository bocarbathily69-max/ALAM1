import React from 'react';
import { LayoutDashboard, Package, BarChart3, Zap, Settings, Leaf } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'planner', label: 'Decarbonization Planner', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-brand">
          <div className="brand-logo-container">
            <Leaf className="nav-icon" fill="white" size={20} />
          </div>
          <div className="brand-text">
            <h1>ALAM</h1>
            <p>Carbon Intelligence</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
              >
                <Icon className="nav-icon" size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-profile">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
          alt="A. Olumide"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h3>A. Olumide</h3>
          <p>Global Admin</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
