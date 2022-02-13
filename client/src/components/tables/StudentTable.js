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

export default function StudentTable() {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/student");
    return res.data;
  };
  React.useEffect(() => {
    getData().then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  return (
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
            <TableCell>ID </TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Department Name</TableCell>
            <TableCell align="right">Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.dept_name}</TableCell>
              <TableCell align="right">{row.tot_cred}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
