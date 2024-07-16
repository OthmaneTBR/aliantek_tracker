import React, { useState, useEffect } from 'react';
import ProfileDetails from './ProfileDetails';


const ProfileContainer = () => {
  const [user, setUser] = useState({
    profilePicture: '../../assets/profile-pic.png', 
    firstName: 'Othmane',
    lastName: 'TIBARI',
    email: 'othmane@gmail.com',
    role: 'employee',
    joinDate: '2024-07-16',
    projectsCount: 1,
    tasksCompleted: 2,
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
