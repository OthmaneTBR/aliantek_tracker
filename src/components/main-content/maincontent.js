import React from 'react';
import ProfileContainer from '../MesInformations/ProfileContainer';
// Import other components like NewProjects, Projects, Tasks if they exist

const MainContent = ({ selected }) => {

  const renderContent = () => {
    switch (selected) {
      case 'Mes informations':
        return <ProfileContainer />;
      case 'Nouveaux projets':
        return <div>Nouveaux projets content</div>;
      case 'Mes projets':
        return <div>Mes projets content</div>;
      case 'Mes tâches':
        return <div>Mes tâches content</div>;
      default:
        return <ProfileContainer />;
    }
  };

  return (
    <div className="main-content p-3 w-75">
      {renderContent()}
    </div>
  );
};

export default MainContent;
