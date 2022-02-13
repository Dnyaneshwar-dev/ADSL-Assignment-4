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

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="department/add" element={<DepartmentForm />} />
        <Route path="department/show" element={<DepartmentTable />} />

        <Route path="course/add" element={<CourseForm />} />
        <Route path="course/show" element={<CourseTable />} />

        <Route path="student/add" element={<StudentForm />} />
        <Route path="student/show" element={<StudentTable />} />

        <Route path="section/add" element={<SectionForm />} />
        <Route path="section/show" element={<SectionTable />} />

        <Route path="instructor/add" element={<InstructorForm />} />
        <Route path="instructor/show" element={<InstructorTable />} />

        <Route path="classroom/add" element={<ClassRoomForm />} />
        <Route path="classroom/show" element={<ClassroomTable />} />

        <Route path="takes/add" element={<TakesForm />} />
        <Route path="takes/show" element={<TakesTable />} />

        <Route path="timeslot/add" element={<TimeslotForm />} />
        <Route path="timeslot/show" element={<TimeslotTable />} />

        <Route path="prereq/add" element={<PrereqForm />} />
        <Route path="prereq/show" element={<PrereqTable />} />

        <Route path="advisor/add" element={<AdvisorForm />} />
        <Route path="advisor/show" element={<AdvisorTable />} />

        <Route path="teaches/add" element={<TeachesForm />} />
        <Route path="teaches/show" element={<TeachesTable />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
