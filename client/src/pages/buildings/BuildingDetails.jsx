import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';

const BuildingPage = () => {
  const [building, setBuilding] = useState(null);
  const { buildingId } = useParams();

  useEffect(() => {
    const fetchBuildingDetails = async () => {
      try {
        const response = await fetch(`http://144.126.192.45:5000/buildings/${buildingId}/users`); // Adjust the API endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch building details');
        }

        const buildingData = await response.json();
        setBuilding(buildingData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBuildingDetails();
  }, [buildingId]);

  if (!building) {
    return <Typography>Loading...</Typography>;
  }

  console.log(building)
  const { name, createdAt, users } = building;

  return (
    <div style={{ padding: 16 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Building Information
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6">{name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Building ID: {buildingId} <br />
                  Created on: {new Date(createdAt).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom>
              Users
            </Typography>
            {users.length === 0 ? (
              <Typography>No users associated with this building.</Typography>
            ) : (
              <ul>
                {users.map((user, index) => (
                  <li key={index}>
                    <Avatar>{user.user.name.charAt(0)}</Avatar> {user.user.name}
                  </li>
                ))}
              </ul>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BuildingPage;
