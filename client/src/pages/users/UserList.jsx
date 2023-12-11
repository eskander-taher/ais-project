export default function UserList() {
	const users = [
		{
			id: 1,
			name: "ali",
			createdAt: "2022-02-01-12-12-12",
		},
	];
	return (
		<table className="table">
			<thead>
				<tr>
					<th>User ID</th>
					<th>User Name</th>
					<th>CreatedAt</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.createdAt}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
