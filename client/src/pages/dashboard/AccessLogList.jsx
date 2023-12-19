import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useApi from "../../utils/useApi";

export default function AccessLogList({ api_url }) {
	const { data, loading, error } = useApi(api_url);
	console.log(data);

	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>User Name</TableCell>
						<TableCell>Building Name</TableCell>
						<TableCell>Accessed At</TableCell>
						<TableCell>Accessed Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								"&:last-child td, &:last-child th": { border: 0 },
								backgroundColor: row.accessStatus == "DENIED" && "red"
							}}
						>
							<TableCell component="th" scope="row">
								{row.user.name}
							</TableCell>
							<TableCell>{row.building.name}</TableCell>
							<TableCell>{row.accessTime}</TableCell>
							<TableCell>{row.accessStatus}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
