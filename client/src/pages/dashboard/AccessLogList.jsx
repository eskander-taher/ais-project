import React, { useState, useEffect } from "react";
import useApi from "../../utils/useApi";
import { ACCESSLOG_API_URL } from "../../utils/constants";

const AccessLogTable = () => {
	// Mock data for the access log table
	const { data, loading, error } = useApi(ACCESSLOG_API_URL);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th>User</th>
					<th>Building ID</th>
					<th>Access Time</th>
				</tr>
			</thead>
			<tbody>
				{data.map((log) => (
					<tr key={log.id}>
						<td>{log.user.name}</td>
						<td>{log.building.name}</td>
						<td>{log.accessTime}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default AccessLogTable;
