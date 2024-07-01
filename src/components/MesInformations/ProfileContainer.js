import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';


const ProfileContainer = () => {
  const [user, setUser] = useState({
    profilePicture: '../../assets/profile-pic.jpeg', 
    firstName: 'Othmane',
    lastName: 'TIBARI',
    email: 'othmane@example.com',
    role: 'Developer',
    joinDate: '2020-01-01',
    projectsCount: 10,
    tasksCompleted: 50,
  });

  useEffect(() => {
    // Fetch user data from an API or database
    // setUser(fetchedUserData);
  }, []);

  return (
    <div>
      <h2>Mes Informations</h2>
      <ProfileDetails user={user} />
    </div>
  );
};

export default ProfileContainer;
