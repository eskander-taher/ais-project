import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid, Avatar, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPage = () => {
	const [user, setUser] = useState(null);
	const [buildingIdInput, setBuildingIdInput] = useState("");
	const { userId } = useParams();

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				const response = await fetch(
					`http://144.126.192.45:5000/users/${userId}/buildings`
				); // Adjust the API endpoint as needed
				if (!response.ok) {
					throw new Error("Failed to fetch user details");
				}

				const userData = await response.json();
				setUser(userData.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchUserDetails();
	}, [userId]);

	const handleAddBuilding = async () => {
		try {
			const response = await fetch(
				`http://144.126.192.45:5000/users/${userId}/buildings/${buildingIdInput}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({}),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to add user to building");
			}

			// Assuming the server response contains updated user data
			const userData = await response.json();
			setUser(userData.data);
			toast.success("Building was added to user successfuly");
			setBuildingIdInput(""); // Clear the input field after successful addition
		} catch (error) {
			console.error(error);
		}
	};

	const handleRemoveBuilding = async (buildingId) => {
		try {
			const response = await fetch(
				`http://144.126.192.45:5000/users/${userId}/buildings/${buildingId}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (!response.ok) {
				throw new Error("Failed to remove building from user");
			}

			// Assuming the server response contains updated user data
			const userData = await response.json();
			setUser(userData.data);
			toast.success("Building was removed from user successfuly");
		} catch (error) {
			console.error(error);
		}
	};

	if (!user) {
		return <Typography>Loading...</Typography>;
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
