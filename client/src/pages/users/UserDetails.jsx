import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid, Avatar, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useApi from "../../utils/useApi";

const UserPage = () => {
	const { userId } = useParams();
	const {
		data: user,
		error,
		loading,
		setData,
		deleteData,
		postData
	} = useApi(`/users/${userId}/buildings`);
	const [buildingIdInput, setBuildingIdInput] = useState("");

	const handleAddBuilding = async () => {
		try {
			await postData(buildingIdInput)
			setData((prevData) => {
				console.log(prevData);
				return {
					...prevData,
					buildings: [...prevData.buildings,]
				};
			});
			toast("Building was added to user successfully");
			setBuildingIdInput("");
		} catch (error) {
			console.error(error);
		}
	};

	const handleRemoveBuilding = async (buildingId) => {
		try {
			await deleteData(buildingId);
			setData((prevData) => {
				console.log(prevData);
				return {
					...prevData,
					buildings: prevData.buildings.filter(
						(building) => building.buildingId !== buildingId
					),
				};
			});
			toast("Building was removed from user successfully");
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) {
		return <Typography>Loading...</Typography>;
	}

	if (error) {
		return <Typography>Error loading user data</Typography>;
	}

	if (!user) {
		return <Typography>No user found</Typography>;
	}

	const { name, createdAt, buildings } = user;

	return (
		<div style={{ padding: 16 }}>
			<ToastContainer />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom>
						User Information
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper elevation={3} style={{ padding: 16 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Avatar>{name.charAt(0)}</Avatar>
							</Grid>
							<Grid item xs={12}>
								<Typography variant="h6">{name}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography>
									User ID: {userId} <br />
									Joined on: {new Date(createdAt).toLocaleString()}
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper elevation={3} style={{ padding: 16 }}>
						<Typography variant="h6" gutterBottom>
							Buildings
						</Typography>
						{buildings.length === 0 ? (
							<Typography>No buildings associated with this user.</Typography>
						) : (
							<ul>
								{buildings.map((building, index) => (
									<li key={index}>
										{building.building.name}
										<Button
											variant="outlined"
											color="secondary"
											size="small"
											onClick={() =>
												handleRemoveBuilding(building.building.id)
											}
											style={{ marginLeft: 8 }}
										>
											Remove
										</Button>
									</li>
								))}
							</ul>
						)}
						<Typography variant="h6" gutterBottom style={{ marginTop: 16 }}>
							Add User to Building
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} md={8}>
								<TextField
									label="Building ID"
									variant="outlined"
									fullWidth
									value={buildingIdInput}
									onChange={(e) => setBuildingIdInput(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} md={4}>
								<Button
									variant="contained"
									color="primary"
									onClick={handleAddBuilding}
								>
									Add
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default UserPage;
