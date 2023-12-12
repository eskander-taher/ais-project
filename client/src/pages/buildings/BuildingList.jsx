export default function BuildingList({ data, loading, error, onDeleteItem }) {
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
					<th>Building ID</th>
					<th>Building Name</th>
				</tr>
			</thead>
			<tbody>
				{data.map((building) => (
					<tr key={building.id}>
						<td>{building.id}</td>
						<td>{building.name}</td>
						<td>
							<button
								className="delete-btn"
								onClick={() => onDeleteItem(building.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
