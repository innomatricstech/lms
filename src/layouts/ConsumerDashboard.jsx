import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ConsumerDashboard = ({ children }) => {
  const { userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const go = (path) => navigate(path);

  return (
    <div style={wrap}>
      {/* ✅ FIXED SIDEBAR */}
      <aside style={sidebar}>
        <div style={brand}>🎓 Student</div>

        {/* ✅ MENU */}
        <nav style={menu}>
          <div style={menuItem} onClick={() => go("/dashboard/consumer")}>
            🏠 Dashboard
          </div>

          <div style={menuItem} onClick={() => go("/modules")}>
            📚 My Modules
          </div>

          <div style={menuItem} onClick={() => go("/notes")}>
            📝 Notes
          </div>

          <div style={menuItem} onClick={() => go("/progress")}>
            📈 Progress
          </div>

          <div style={menuItem} onClick={() => go("/alfa")}>
            🤖 AI Study Bot
          </div>
        </nav>

        {/* ✅ LOGOUT BUTTON */}
        <button
          style={logoutBtn}
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </aside>

      {/* ✅ MAIN CONTENT (Shows Dashboard OR Children) */}
      <main style={main}>
        {!children ? (
          <>
            <header style={topHeader}>
              <h1 style={title}>Welcome, {userProfile?.name || "Learner"}</h1>
              <p style={subtitle}>Your Personal Learning Dashboard</p>
            </header>

            {/* ✅ Default Dashboard Widgets */}
            <section style={grid}>
              <motion.div
                style={card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 style={cardTitle}>📚 Your Modules</h3>
                <p style={cardText}>Continue your learning journey.</p>
              </motion.div>

              <motion.div
                style={card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 style={cardTitle}>📈 Your Progress</h3>
                <p style={cardText}>Track your daily improvements.</p>
              </motion.div>

              <motion.div
                style={card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 style={cardTitle}>🤖 AI Study Bot</h3>
                <p style={cardText}>Ask ALFA anything to learn faster.</p>
              </motion.div>
            </section>
          </>
        ) : (
          // ✅ If a child page exists → render inside dashboard
          <div style={{ paddingTop: 20 }}>{children}</div>
        )}
      </main>
    </div>
  );
};

/* ✅ Styles */
const wrap = {
  display: "flex",
  minHeight: "100vh",
  background: "#eef6ff",
  fontFamily: "Arial, sans-serif",
};

const sidebar = {
  width: 260,
  background: "#ffffff",
  padding: 20,
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
};

const brand = {
  fontSize: 22,
  fontWeight: 800,
  color: "#0369a1",
  marginBottom: 20,
};

const menu = { display: "flex", flexDirection: "column", gap: 12 };

const menuItem = {
  padding: "12px 14px",
  borderRadius: 10,
  fontSize: 15,
  cursor: "pointer",
  background: "#f1faff",
  fontWeight: 600,
  color: "#0c4a6e",
  transition: "0.2s",
};

const logoutBtn = {
  marginTop: "auto",
  padding: "12px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  fontWeight: 700,
};

const main = {
  flex: 1,
  marginLeft: 260,
  padding: "30px 40px",
};

const topHeader = { marginBottom: 30 };

const title = { fontSize: 28, fontWeight: 800, color: "#0f172a" };
const subtitle = { fontSize: 14, color: "#475569" };

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const card = {
  background: "#ffffff",
  padding: 20,
  borderRadius: 14,
  boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
};

const cardTitle = { fontSize: 18, fontWeight: 700, color: "#0f172a" };
const cardText = { color: "#475569", fontSize: 14, marginTop: 6 };

export default ConsumerDashboard;
