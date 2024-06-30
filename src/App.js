import React, {useState} from 'react';
import './App.css';
import Headbar from './components/headbar/headbar';
import ProfileCard from './components/profilecard/profileCard';
import MainContent from './components/main-content/maincontent';

function App() {
  const [selected, setSelected] = useState('');

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <Headbar />
      <div className="app-container">
        <ProfileCard className="profile-card-container" onSelect={handleSelect} />
        <MainContent className="main-content" selected={selected} />
      </div>
    </div>
  );
}

export default App;
