import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function SectionForm() {
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await axios.post("http://localhost:5000/section", values);
    console.log(res);
    if (res.data.ok == true) {
      toast.success(`Added!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`Something Went Wrong`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 80,
          marginBottom: 80,
        }}
      >
        <Formik
          initialValues={{
            course_id: "",
            sec_id: "",
            semester: "",
            year: "",
            building: "",
            room_number: "",
            time_slot_id: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <Grid container spacing={3} width="60%" border="1px solid">
                <Grid item xs={12}>
                  <h2>Add Section Details</h2>
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="course_id"
                    name="course_id"
                    label="Course ID"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="sec_id"
                    name="sec_id"
                    label="Section ID"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="semester"
                    name="semester"
                    label="Semester"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="year"
                    name="year"
                    label="Year"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="building"
                    name="building"
                    label="Building"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="room_number"
                    name="room_number"
                    label="Room Number"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="time_slot_id"
                    name="time_slot_id"
                    label="Time Slot ID"
                    fullWidth
                    autoComplete="shipping address-line2"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} marginRight={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      marginBottom: 20,
                    }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </>
          )}
        </Formik>
      </div>
    </>
  );
}
