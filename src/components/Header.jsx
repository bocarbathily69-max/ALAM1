import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = ({ selectedOrg, onOrgChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const organizations = ["Main Overview", "Lagos Branch", "Nairobi Office"];

  return (
    <header className="main-header">
      <div className="header-title">
        <h2>
          {selectedOrg}
          <span className="header-divider"></span>
        </h2>
      </div>

      <div className="org-switcher">
        <button
          className="org-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOrg === "Main Overview" ? "Organization Switcher" : selectedOrg}</span>
          <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="org-dropdown">
            {organizations.map((org) => (
              <div
                key={org}
                className={`org-item ${selectedOrg === org ? 'active' : ''}`}
                onClick={() => {
                  onOrgChange(org);
                  setIsOpen(false);
                }}
              >
                {org}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
