import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Attendance from "./Attendance";
import NotFound from "./NotFound";

const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/Attendance" element={<Attendance />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
