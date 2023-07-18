import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Report from "./Report";
import NotFound from "./NotFound";

const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/Report" element={<Report />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
