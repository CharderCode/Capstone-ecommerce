import React, { useState, useEffect } from 'react';
import { fetchUserById } from '../API';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const userId = 1; // Replace with the actual user ID you want to fetch

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const userData = await fetchUserById(userId);
        setUserProfile(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserProfile();
  }, [userId]);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card style={{ width: '400px' }}>
        {userProfile ? (
          <Card.Body>
            <Card.Title className="text-center display-4">
              {userProfile.username}
            </Card.Title>
            <Card.Text>
              <p>Email: {userProfile.email}</p>
              <p>First Name: {userProfile.name.firstname}</p>
              <p>Last Name: {userProfile.name.lastname}</p>
              <p>City: {userProfile.address.city}</p>
              <p>Street: {userProfile.address.street}</p>
              <p>Number: {userProfile.address.number}</p>
              <p>Zipcode: {userProfile.address.zipcode}</p>
              <p>Latitude: {userProfile.address.geolocation.lat}</p>
              <p>Longitude: {userProfile.address.geolocation.long}</p>
              <p>Phone: {userProfile.phone}</p>
            </Card.Text>
          </Card.Body>
        ) : (
          <Card.Body className="text-center">
            <p>Loading user profile...</p>
          </Card.Body>
        )}
      </Card>
    </Container>
  );
};

export default Profile;