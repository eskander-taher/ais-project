export default function BuildingList() {
	const buildings = [
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
					<th>Building ID</th>
					<th>Building Name</th>
					<th>CreatedAt</th>
				</tr>
			</thead>
			<tbody>
				{buildings.map((building) => (
					<tr key={building.id}>
						<td>{building.id}</td>
						<td>{building.name}</td>
						<td>{building.createdAt}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
