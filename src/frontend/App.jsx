import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateHackaton from "./pages/CreateHackaton";
import JoinHackaton from "./pages/JoinHackaton";
import HackatonDetails from "./pages/HackatonDetails";
import HackatonList from "./pages/HackatonList";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

import LeaderBoard from "./pages/LeaderBoard";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUserManagement from "./pages/admin/UserManagement";
import AdminTeamDashboard from "./pages/admin/TeamDashboard";
import AdminLeaderBoard from "./pages/admin/LeaderBoard";

// Components
import Modal from "./components/ui/Modal";
import useModal from "./hooks/useModal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const location = useLocation();
  const { closeModal } = useModal();

  const state = location.state;
  const backgroundLocation = state?.backgroundLocation; // background only when present

  return (
    <>
      <Routes location={location}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hackathons" element={<HackatonList />} />
          <Route path="/hackathon/:id" element={<HackatonDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          {/* Login/Signup/Create/Join как обычные страницы */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create-hackathon" element={<CreateHackaton />} />
          <Route path="/join-hackathon" element={<JoinHackaton />} />
        </Route>

        {/* Admin Routes - Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requireAdmin={true}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="user-management" element={<AdminUserManagement />} />
          <Route path="team" element={<AdminTeamDashboard />} />
          <Route path="leaderboard" element={<AdminLeaderBoard />} />
        </Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "4rem", textAlign: "center" }}>
              <h1 className="blink">404</h1>
              <p>page not found</p>
            </div>
          }
        />
      </Routes>

      {/* === Modal === */}
      {backgroundLocation && (
        <Routes location={backgroundLocation}>
          <Route
            path="/login"
            element={
              <Modal isOpen={true} onClose={closeModal}>
                <Login />
              </Modal>
            }
          />
          <Route
            path="/signup"
            element={
              <Modal isOpen={true} onClose={closeModal}>
                <Signup />
              </Modal>
            }
          />
          <Route
            path="/create-hackathon"
            element={
              <Modal isOpen={true} onClose={closeModal}>
                <CreateHackaton />
              </Modal>
            }
          />
          <Route
            path="/join-hackathon"
            element={
              <Modal isOpen={true} onClose={closeModal}>
                <JoinHackaton />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}
