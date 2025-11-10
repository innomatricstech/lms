import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

import ConsumerDashboard from "./layouts/ConsumerDashboard";
import AdminDashboard from "./layouts/AdminDashboard";
import TutorDashboard from "./layouts/TutorDashboard";

import { useAuth } from "./context/AuthContext";
import TechManthanaPage from "./pages/TechManthanaPage";
import ALFASection from "./pages/ALFASection";
import ScrollToTop from "./components/ScrollToTop";


// ✅ Protected Route Wrapper
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(userRole))
    return <div>Access Denied</div>;

  return children;
};

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>

        {/* ✅ PUBLIC ROUTES (With Public Layout) */}
        <Route
          path="/"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />

        <Route
          path="/services"
          element={
            <PublicLayout>
              <Services />
            </PublicLayout>
          }
        />

        <Route
          path="/industries"
          element={
            <PublicLayout>
              <Industries />
            </PublicLayout>
          }
        />

        <Route
          path="/tech-manthana"
          element={
            <PublicLayout>
              <TechManthanaPage />
            </PublicLayout>
          }
        />

        {/* ✅ LOGOUT (Public Layout) */}
        <Route
          path="/logout"
          element={
            <PublicLayout>
              <Logout />
            </PublicLayout>
          }
        />


        {/* ✅ DASHBOARD ROUTES (Without Public Layout) */}
        <Route
          path="/dashboard/consumer"
          element={
            <ProtectedRoute allowedRoles={["consumer"]}>
              <ConsumerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/tutor"
          element={
            <ProtectedRoute allowedRoles={["tutor"]}>
              <TutorDashboard />
            </ProtectedRoute>
          }
        />


        {/* ✅ ALFA PAGE (INSIDE CONSUMER DASHBOARD LAYOUT) */}
        <Route
          path="/alfa"
          element={
            <ProtectedRoute allowedRoles={["consumer"]}>
              <ConsumerDashboard>
                <ALFASection />
              </ConsumerDashboard>
            </ProtectedRoute>
          }
        />


        {/* ✅ FALLBACK */}
        <Route
          path="*"
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          }
        />

<Route
  path="/alfa"
  element={
    <ProtectedRoute allowedRoles={["consumer"]}>
      <ConsumerDashboard>
        <ALFASection />
      </ConsumerDashboard>
    </ProtectedRoute>
  }
/>

      </Routes>
    </>
  );
};

export default App;
