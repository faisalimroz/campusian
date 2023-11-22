import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const UserProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [newDisplayName, setNewDisplayName] = useState('');

  const handleUpdateProfile = () => {
    // You can update any profile information you need, such as displayName or photoURL
    updateUser({
      displayName: newDisplayName,
      // other fields you want to update
    })
      .then((updatedUser) => {
        console.log('Profile updated successfully:', updatedUser);
        // Optionally, you can set any local state or trigger other actions after updating the profile
      })
      .catch((error) => {
        console.error('Error updating profile:', error.message);
        // Handle error or provide feedback to the user
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName}</p>
          {/* Display user's current photo */}
          {user.photoURL && <img src={user.photoURL} alt="User" />}
          <input
            type="text"
            placeholder="New Display Name"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
          />
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
