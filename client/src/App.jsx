import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Buildings from "./pages/buildings/Buildings";

const App = () => {
	return (
		<Router>
			<div className="app-container">
				<NavBar />
				<div className="page-container">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/users" element={<Users />} />
						<Route path="/buildings" element={<Buildings />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
