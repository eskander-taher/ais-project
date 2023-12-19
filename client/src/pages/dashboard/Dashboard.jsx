// Dashboard.js

import React, { useState, useEffect } from "react";
import AccessLogList from "./AccessLogList";
import useApi from "../../utils/useApi";
import { USERS_API_URL, BUILDINGS_API_URL, ACCESSLOG_API_URL } from "../../utils/constants";

const Dashboard = () => {
	// Mock data for the dashboard
	const { data: users } = useApi(USERS_API_URL);
	const { data: buildings } = useApi(BUILDINGS_API_URL);

	return (
		<div className="dashboard">
			<div className="square users">
				<h2>Users</h2>
				<h2>{users ? users.length : 0}</h2>
			</div>

			<div className="square buildings">
				<h2>Buildings</h2>
				<h2>{buildings ? buildings.length : 0}</h2>
			</div>

			<div className="access-log">
				<h2>Access Logs</h2>
				<AccessLogList api_url={ACCESSLOG_API_URL} />
			</div>
		</div>
	);
};

export default Dashboard;
