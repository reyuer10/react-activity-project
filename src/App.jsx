import { Routes, Route } from "react-router-dom";
import Activity1 from "./pages/Activity1";
import DashboardActivity from "./pages/DashboardActivity";
import Activity2 from "./pages/Activity2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardActivity />} />
        <Route path="ActivityOne/select-number-total" element={<Activity1 />} />
        <Route path="ActivityTwo/register-user" element={<Activity2 />} />
      </Routes>
    </>
  );
}

export default App;
