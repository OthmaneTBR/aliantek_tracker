import React from 'react';
import ProfileContainer from '../MesInformations/ProfileContainer';
import NewProjects from '../NewProjects/NewProjects';
import MyProjects from '../MyProjects/MyProjects';
import MyTasks from '../MyTasks/MyTasks';


const MainContent = ({ selected }) => {

  const renderContent = () => {
    switch (selected) {
      case 'Mes informations':
        return <ProfileContainer />;
      case 'Nouveaux projets':
        return <NewProjects />;
      case 'Mes projets':
        return <MyProjects />;
      case 'Mes tâches':
        return <MyTasks />;
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
