import React from "react";
import CardItem from "../components/CardItem";
const Home = () => {
  return (
    <div className="container-fluid mb-5 mt-5">
      <div className="row">
        <div className="col-10 ms-auto">
          <div className="row gy-10">
            <CardItem
              title="Department"
              subtitle="Add Department"
              link="/department/add"
              buttontext="ADD"
            />
            <CardItem
              title="Department"
              subtitle="Show Departments"
              link="/department/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Classrooms"
              subtitle="Add Department"
              link="/classroom/add"
              buttontext="ADD"
            />
            <CardItem
              title="Classrooms"
              subtitle="Show classrooms"
              link="/classroom/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Students"
              subtitle="Add Student"
              link="/student/add"
              buttontext="ADD"
            />
            <CardItem
              title="Students"
              subtitle="Show Students"
              link="/student/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Courses"
              subtitle="Add Course"
              link="/course/add"
              buttontext="ADD"
            />
            <CardItem
              title="Courses"
              subtitle="Show Courses"
              link="/course/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Section"
              subtitle="Add Section"
              link="/section/add"
              buttontext="ADD"
            />
            <CardItem
              title="Section"
              subtitle="Show Sections"
              link="/section/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Instructor"
              subtitle="Add Instructor"
              link="/instructor/add"
              buttontext="ADD"
            />
            <CardItem
              title="Instructor"
              subtitle="Show Instructors"
              link="/instructor/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Takes"
              subtitle="Add Takes"
              link="/takes/add"
              buttontext="ADD"
            />
            <CardItem
              title="Takes"
              subtitle="Show Takes"
              link="/takes/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Advisor"
              subtitle="Add Advisor"
              link="/advisor/add"
              buttontext="ADD"
            />
            <CardItem
              title="Advisor"
              subtitle="Show Advisors"
              link="/advisor/show"
              buttontext="SHOW"
            />

            <CardItem
              title="Teaches"
              subtitle="Add Teaches"
              link="/teaches/add"
              buttontext="ADD"
            />
            <CardItem
              title="Teaches"
              subtitle="Show Teaches"
              link="/teaches/show"
              buttontext="SHOW"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
