import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherHeader from './components/Teacher/TeacherHeader';
import TeacherFooter from './components/Teacher/TeacherFooter';
import StudentHeader from './components/Student/StudentHeader';
import StudentFooter from './components/Student/StudentFooter';
import Home from './components/Home';
import TeacherDashboard from './components/Teacher/Dashboard';
import StudentDashboard from './components/Student/Dashboard';
import Attendance from './components/Teacher/Attendance';
import TeacherReport from './components/Teacher/Report';
import Substitute from './components/Teacher/Substitute';
import StudentReport from './components/Student/Report';
import Leave from './components/Student/Leave';
import UpdatePage from './components/Teacher/UpdatePage';
const Header = () => {
  // Implement your header component here
  return <div></div>;
};

const Footer = () => {
  // Implement your footer component here
  return <div></div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/TeacherDashboard"
          element={
            <>
              <TeacherHeader />
              <TeacherDashboard />

              <TeacherFooter />
            </>
          }
        />
        <Route
          path="/Attendance"
          element={
            <>
              <TeacherHeader />
              <Attendance />

              <TeacherFooter />
            </>
          }
        />
        <Route
          path="/TeacherReport"
          element={
            <>
              <TeacherHeader />
              <TeacherReport />

              <TeacherFooter />
            </>
          }
        />
        <Route
          path="/UpdatePage"
          element={
            <>
              <TeacherHeader />
              <UpdatePage />

              <TeacherFooter />
            </>
          }
        />
        <Route
          path="/StudentDashboard"
          element={
            <>
              <StudentHeader />
              <StudentDashboard />
              <StudentFooter />
            </>
          }
        />
        <Route
          path="/StudentReport"
          element={
            <>
              <StudentHeader />
              <StudentReport />
              <StudentFooter />
            </>
          }
        />
        <Route
          path="/Leave"
          element={
            <>
              <StudentHeader />
              <Leave />
              <StudentFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
