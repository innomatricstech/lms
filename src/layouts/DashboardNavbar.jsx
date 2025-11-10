import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ role }) => {
  const { userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header style={nav}>
      <div style={left}>
        <h2 style={title}>📘 LMS Dashboard</h2>
        <span style={roleTag}>{role.toUpperCase()}</span>
      </div>

      <div style={right}>
        <div style={userBox}>
          👤 {userProfile?.name || "User"}
        </div>
        <button style={logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

// ✅ Styles
const nav = {
  height: "70px",
  background: "white",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 30px",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const left = { display: "flex", alignItems: "center", gap: "15px" };
const title = { fontSize: "22px", fontWeight: "800", color: "#1e3a8a" };

const roleTag = {
  background: "#e0f2fe",
  padding: "6px 14px",
  borderRadius: "20px",
  color: "#0369a1",
  fontWeight: "700",
  fontSize: "13px",
};

const right = { display: "flex", alignItems: "center", gap: "15px" };

const userBox = {
  padding: "8px 14px",
  background: "#f1f5f9",
  borderRadius: "10px",
  fontWeight: "600",
};

const logoutBtn = {
  padding: "8px 14px",
  background: "#ef4444",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "700",
};

export default DashboardNavbar;
