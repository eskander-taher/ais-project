// Dashboard.js

import React, { useState, useEffect } from "react";
import AccessLogList from "./AccessLogList"; // Assuming you have an AccessLogTable component

const Dashboard = () => {
	// Mock data for the dashboard
	const [userCount, setUserCount] = useState(0);
	const [buildingCount, setBuildingCount] = useState(0);

	useEffect(() => {
		// Fetch user count and building count from your API
		// Update the state with the fetched data
		// Example:
		// setUserCount(fetchedUserCount);
		// setBuildingCount(fetchedBuildingCount);
	}, []);

	return (
		<div className="dashboard">
			<div className="square users">
				<h2>Users</h2>
				<p>{userCount}</p>
			</div>

			<div className="square buildings">
				<h2>Buildings</h2>
				<p>{buildingCount}</p>
			</div>

			<div className="access-log">
				<h2>Access Logs</h2>
				<AccessLogList />
			</div>
		</div>
	);
};

export default Dashboard;
