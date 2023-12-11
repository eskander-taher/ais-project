import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<div className="logo">
				<h1>eskander</h1>
			</div>
			<ul>
				<li>
					<Link to="/">Dashboard</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/buildings">Buildings</Link>
				</li>
			</ul>
		</nav>
	);
}
