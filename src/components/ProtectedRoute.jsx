import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, role, loading } = useAuth();

  // ⛔ WAIT for Firebase auth to load
  if (loading) {
    return null; // or spinner
  }

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ❌ Role not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>Access Denied</h2>
        <p>Your role: <b>{role}</b></p>
      </div>
    );
  }

  // ✅ Access allowed
  return children;
};

export default ProtectedRoute;
