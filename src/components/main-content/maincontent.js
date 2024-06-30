import React from 'react';

const MesInformations = () => <div>Content of Mes informations</div>;
const NouveauxProjets = () => <div>Content of Nouveaux projets</div>;
const MesProjets = () => <div>Content of Mes projets</div>;
const MesTaches = () => <div>Content of Mes tâches</div>;

const MainContent = ({ selected }) => {
  let content;
  switch (selected) {
    case 'Mes informations':
      content = <MesInformations />;
      break;
    case 'Nouveaux projets':
      content = <NouveauxProjets />;
      break;
    case 'Mes projets':
      content = <MesProjets />;
      break;
    case 'Mes tâches':
      content = <MesTaches />;
      break;
    default:
      content = <NouveauxProjets />;
  }
  return <div className="main-content">{content}</div>;
};

export default MainContent;
