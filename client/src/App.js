import logo from "./logo.svg";
import "./App.css";
import ClassRoomForm from "./components/forms/ClassRoomForm";
import Navbar from "./components/Navbar";
import DepartmentForm from "./components/forms/DepartmentForm";
import CourseForm from "./components/forms/CourseForm";
import InstructorForm from "./components/forms/InstructorForm";
import StudentForm from "./components/forms/StudentForm";
import SectionForm from "./components/forms/SectionForm";
import CourseTable from "./components/tables/CourseTable";
import DepartmentTable from "./components/tables/DepartmentTable";
import AdvisorForm from "./components/forms/AdvisorForm";
import { Route, Routes } from "react-router";
import StudentTable from "./components/tables/StudentTable";
import SectionTable from "./components/tables/SectionForm";
import InstructorTable from "./components/tables/InstructorTable";
import ClassroomTable from "./components/tables/ClassroomTable";
import TakesForm from "./components/forms/TakesForm";
import TakesTable from "./components/tables/TakesTable";
import TimeslotForm from "./components/forms/TimeslotForm";
import TimeslotTable from "./components/tables/TimeslotTable";
import PrereqForm from "./components/forms/PrereqForm";
import PrereqTable from "./components/tables/AdvisorTable";
import AdvisorTable from "./components/tables/AdvisorTable";
import TeachesForm from "./components/forms/TeachesForm";
import TeachesTable from "./components/tables/TeachesTable";
import Home from "./pages/Home";
import CardItem from "./components/CardItem";
import AuthContext from "./auth/context";
import getUser from "./auth/getUser";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(getUser());
  const store = { user, setUser };
  console.log(user);
  return (
    <>
      <AuthContext.Provider value={store}>
        <Navbar />
      </AuthContext.Provider>

      <Routes>
        <Route
          path="department/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <DepartmentForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="department/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <DepartmentTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="course/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <CourseForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="course/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <CourseTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="student/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <StudentForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="student/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <StudentTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="section/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <SectionForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="section/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <SectionTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="instructor/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <InstructorForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="instructor/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <InstructorTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="classroom/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <ClassRoomForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="classroom/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <ClassroomTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="takes/add"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <TakesForm /> : <Login />}
            </AuthContext.Provider>
          }
        />
        <Route
          path="takes/show"
          element={
            <AuthContext.Provider value={store}>
              {user != null ? <TakesTable /> : <Login />}
            </AuthContext.Provider>
          }
        />

        <Route
          path="timeslot/add"
          element={
            user != null ? (
              <AuthContext.Provider value={store}>
                <TimeslotForm />
              </AuthContext.Provider>
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />
        <Route
          path="timeslot/show"
          element={
            user != null ? (
              <AuthContext.Provider value={store}>
                <TimeslotTable />
              </AuthContext.Provider>
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />

        <Route
          path="prereq/add"
          element={
            user != null ? (
              <PrereqForm />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />
        <Route
          path="prereq/show"
          element={
            user != null ? (
              <PrereqTable />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />

        <Route
          path="advisor/add"
          element={
            user != null ? (
              <AdvisorForm />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />
        <Route
          path="advisor/show"
          element={
            user != null ? (
              <AdvisorTable />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />

        <Route
          path="teaches/add"
          element={
            user != null ? (
              <TeachesForm />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />
        <Route
          path="teaches/show"
          element={
            user != null ? (
              <TeachesTable />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />

        <Route
          path="/"
          element={
            user != null ? (
              <Home />
            ) : (
              <AuthContext.Provider value={store}>
                <Login />
              </AuthContext.Provider>
            )
          }
        />
        <Route
          path="/login"
          element={
            <AuthContext.Provider value={store}>
              <Login />
            </AuthContext.Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
