import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../auth/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function Login() {
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await axios.post("http://localhost:5000/user", values);
    if (res.data.ok == true) {
      logIn(res.data.token);
      navigate("/");
    } else {
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
            username: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <Grid container spacing={3} width="60%" border="1px solid">
                <Grid item xs={12}>
                  <h2>Login</h2>
                </Grid>
                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="username"
                    name="username"
                    label="Username"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item width={"80%"}>
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="shipping address-line1"
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
