import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TutorDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const cards = [
    { icon: "📅", title: "Class Schedule", desc: "Plan and manage upcoming sessions.", color: "#f97316" },
    { icon: "📝", title: "Assignments", desc: "Create, review, and grade tasks.", color: "#16a34a" },
    { icon: "🎥", title: "Recordings", desc: "Upload and manage session videos.", color: "#2563eb" },
    { icon: "📩", title: "Student Mailer", desc: "Send quick updates to students.", color: "#9333ea" }
  ];

  return (
    <div style={wrap}>
      <aside style={{ ...sidebar, background: "rgba(255,255,255,0.85)" }}>
        <div style={{ ...brand, color: "#b45309" }}>🧑‍🏫 Tutor</div>
        <nav style={nav}>
          <a style={navItemActive}>🏠 Dashboard</a>
          <a style={navItem}>📅 Classes</a>
          <a style={navItem}>📝 Assignments</a>
          <a style={navItem}>🎥 Recordings</a>
          <a style={navItem}>📩 Email</a>
          <a style={navItem}>📊 Reports</a>
        </nav>
        <button style={logoutBtn} onClick={() => { logout(); navigate("/"); }}>Logout</button>
      </aside>

      <main style={main}>
        <header style={topbar}>
          <h1 style={{ ...title, color: "#7c2d12" }}>Tutor Dashboard</h1>
          <div style={crumbs}>Home / Tutor</div>
        </header>

        <section style={grid}>
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              style={card}
            >
              <div style={{ ...badge, background: c.color }}>{c.icon}</div>
              <div style={cardTitle}>{c.title}</div>
              <div style={cardDesc}>{c.desc}</div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

// Shared baseline styles (reuse from Admin to keep consistency)
const wrap = { display: "flex", minHeight: "100vh", background: "linear-gradient(135deg,#fff7ed,#fff)" };
const sidebar = {
  position: "fixed", top: 0, left: 0, width: 260, height: "100vh",
  backdropFilter: "blur(12px)",
  borderRight: "1px solid #f5d9b1", boxShadow: "2px 0 16px rgba(124,45,18,0.08)",
  padding: "22px 16px", display: "flex", flexDirection: "column", gap: 14
};
const brand = { fontWeight: 800, fontSize: 20 };
const nav = { display: "flex", flexDirection: "column", gap: 8, marginTop: 8 };
const baseItem = { padding: "10px 12px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: 14, color: "#78350f", cursor: "pointer" };
const navItem = baseItem;
const navItemActive = { ...baseItem, background: "#ffedd5", boxShadow: "inset 0 0 0 1px #fed7aa" };
const logoutBtn = { marginTop: "300px", padding: "12px 14px", borderRadius: 10, border: "none", background: "#ef4444", color: "#fff", fontWeight: 700, cursor: "pointer" };
const main = { marginLeft: 260, flex: 1, padding: "28px 32px" };
const topbar = { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 22 };
const title = { fontSize: 28, fontWeight: 800 };
const crumbs = { color: "#7c2d12", opacity: 0.7, fontSize: 13, fontWeight: 600 };
const grid = { display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" };
const card = { borderRadius: 16, padding: 20, background: "white", boxShadow: "0 10px 24px rgba(124,45,18,0.07)", border: "1px solid #fde68a40" };
const badge = { width: 52, height: 52, borderRadius: 12, color: "#fff", fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 18px rgba(0,0,0,.12)", marginBottom: 12 };
const cardTitle = { fontWeight: 800, fontSize: 18, color: "#1f2937" };
const cardDesc = { marginTop: 6, color: "#6b7280", lineHeight: 1.5, fontSize: 14 };

export default TutorDashboard;
