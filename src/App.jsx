import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ComingSoon from "./pages/ComingSoon";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Signed-in app shell: sidebar + page */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<ComingSoon title="Transactions" />} />
        <Route path="/wallets" element={<ComingSoon title="Wallets" />} />
        <Route path="/import" element={<ComingSoon title="Import statement" />} />
        <Route path="/people" element={<ComingSoon title="People & dues" />} />
        <Route path="/forecast" element={<ComingSoon title="Forecast" />} />
        <Route path="/what-if" element={<ComingSoon title="What-if" />} />
        <Route path="/ask" element={<ComingSoon title="Ask BatuwaAI" />} />
      </Route>
    </Routes>
  );
}
