import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Formik } from "formik";

export default function SectionForm() {
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
        >
          {() => (
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
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6} >
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6} marginRight={3}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6} marginRight={3}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6} marginRight={3}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid> */}
                <Grid item xs={12} sm={6} marginRight={3}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      marginBottom: 20,
                    }}
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