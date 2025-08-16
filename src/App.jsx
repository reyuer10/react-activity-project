import { Routes, Route } from "react-router-dom";
import Activity1 from "./pages/Activity1";
import DashboardActivity from "./pages/DashboardActivity";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardActivity />} />
        <Route path="ActivityOne/select-number-total" element={<Activity1 />} />
      </Routes>
    </>
  );
}

export default App;
