export default function List({ data }) {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
