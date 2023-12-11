// AccessLogTable.js

import React, { useState, useEffect } from "react";

const AccessLogTable = () => {
	// Mock data for the access log table
	const [accessLogs, setAccessLogs] = useState([]);

	useEffect(() => {
		// Fetch access logs from your API
		// Update the state with the fetched data
		// Example:
		const fetchedAccessLogs = [
			{
				id: 1,
				userName: "eskander",
				buildingName: "main building",
				timestamp: "2022-02-01-12-12-12"
			}
		]
		setAccessLogs(fetchedAccessLogs);
	}, []);

	return (
		<table className="table">
			<thead>
				<tr>
					<th>User ID</th>
					<th>Building ID</th>
					<th>Timestamp</th>
				</tr>
			</thead>
			<tbody>
				{accessLogs.map((log) => (
					<tr key={log.id}>
						<td>{log.userName}</td>
						<td>{log.buildingName}</td>
						<td>{log.timestamp}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AccessLogTable;
