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

function App() {
  return (
    <>
      <Navbar />
      <DepartmentTable />
      <CourseTable />
      <ClassRoomForm />
      <DepartmentForm />
      <CourseForm />
      <InstructorForm />
      <StudentForm />
      <SectionForm />
    </>
  );
}

export default App;
