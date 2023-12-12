export default function UserList({ data, loading, error, onDeleteItem }) {
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
					<th>User ID</th>
					<th>User Name</th>
					<th>CreatedAt</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.createdAt}</td>
						<td>
							<button className="delete-btn" onClick={() => onDeleteItem(user.id)}>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
