import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TimeslotTable() {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/department");
    return res.data;
  };
  React.useEffect(() => {
    getData().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <>
      {" "}
      <h2 style={{ marginLeft: "10%", marginTop: "2%" }}>Time Slots</h2>
      <TableContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          marginTop: 30,
        }}
      >
        <Table
          sx={{ width: "80%", border: "1px solid" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Time Slot ID </TableCell>
              <TableCell align="right">Day</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.time_slot_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.time_slot_id}
                </TableCell>
                <TableCell align="right">{row.day}</TableCell>
                <TableCell align="right">{row.start_time}</TableCell>
                <TableCell align="right">{row.end_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
