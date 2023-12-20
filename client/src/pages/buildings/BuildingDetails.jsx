import React, { useState, useEffect } from 'react';
import { Typography, Paper, Grid, Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';

import useApi from "../../utils/useApi";

const BuildingPage = () => {
	const { buildingId } = useParams();
	const { data: building, error, loading } = useApi(`/buildings/${buildingId}/users`);

	if (!building) {
		return <Typography>Loading...</Typography>;
	}

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
