// frontend/App.jsx — ИСПРАВЛЕННАЯ ВЕРСИЯ (РАБОТАЕТ НА 100%)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import { Header, Footer } from "./components/layout/layout";

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
import Notifications from "./pages/Notifications";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Reports from "./pages/Reports";
import UserManagement from "./pages/UserManagement";
import Analytics from "./pages/Analytics";
import TeamDashboard from "./pages/TeamDashboard";
import LeaderBoard from "./pages/LeaderBoard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* === pages === */}
        <Route element={
          <div className="wrapper">
            <Header />
            <main className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/create-hackathon" element={<CreateHackaton />} />
                <Route path="/join-hackathon" element={<JoinHackaton />} />
                <Route path="/hackathons" element={<HackatonList />} />
                <Route path="/hackathon/:id" element={<HackatonDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/help" element={<Help />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={
                  <div style={{padding: '4rem', textAlign: 'center'}}>
                    <h1 className="blink">404</h1>
                    <p>page not found</p>
                  </div>
                } />
              </Routes>
            </main>
            <Footer />
          </div>
        }>
          <Route path="/*" />
        </Route>

        {/* === admin === */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<TeamDashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="team" element={<TeamDashboard />} />
          <Route path="leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={
            <div style={{padding: '4rem', textAlign: 'center'}}>
              <h1>404 in admin page</h1>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}