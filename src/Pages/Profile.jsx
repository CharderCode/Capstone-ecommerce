import React from 'react';

const Profile = () => {
  // You can fetch and display user profile data here
  const userProfile = {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    // Add more profile data as needed
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <p>Username: {userProfile.username}</p>
        <p>Email: {userProfile.email}</p>
        {/* Display additional profile information */}
      </div>
    </div>
  );
};

export default Profile;