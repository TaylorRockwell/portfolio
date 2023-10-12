import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Interests from './Interests';
import AboutMe from './AboutMe';
import Resume from './Resume';

// Render Header
const Header = () => {
  const [currentTab, setCurrentTab] = useState("AboutMe");

  // Render data based on state
  const renderTabs = () => {
    if (currentTab === 'AboutMe') {
      return <AboutMe />
    }
    if (currentTab === 'Interests') {
      return <Interests />;
    }
    return <Resume />;
  };

  // State change funciton
  const handleTabChange = (page) => setCurrentTab(page);

  // Render Tabs
  return (
    <div>
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <NavTabs currentTab={currentTab} handleTabChange={handleTabChange} />
      </header>
      <body>
      {renderTabs()}
      </body>
    </div>
  );
};

export default Header;
