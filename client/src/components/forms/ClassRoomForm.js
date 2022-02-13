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
export default function AddressForm() {
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await axios.post("http://localhost:5000/classroom", values);

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
            building: "",
            room_number: "",
            capacity: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <Grid container spacing={3} width="60%" border="1px solid">
                <Grid item xs={12}>
                  <h2>Add Classroom Details</h2>
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="building"
                    name="building"
                    label="Building Number"
                    fullWidth
                    autoComplete="given-name"
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
                    autoComplete="shipping address-line1"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    id="capacity"
                    name="capacity"
                    label="Room Capacity"
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
