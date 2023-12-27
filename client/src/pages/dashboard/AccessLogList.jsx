import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import useApi from "../../utils/useApi";
import { ACCESSLOG_API_URL } from "../../utils/constants";

export default function AccessLogList() {
  const { data, loading, error, fetchData } = useApi(ACCESSLOG_API_URL);
  console.log(data);

  // Function to fetch data every one second
  const fetchAccessLogs = () => {
    fetchData();
  };

  // Set up the interval on component mount
  useEffect(() => {
    const intervalId = setInterval(fetchAccessLogs, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data && (
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
              {data
                .slice()
                .reverse()
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      backgroundColor: row.accessStatus === "DENIED" && "red",
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
      )}
    </>
  );
}
