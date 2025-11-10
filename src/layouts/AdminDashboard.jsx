import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Zap,
  BookOpen,
  BarChart3,
  Wallet,
  Menu,
  X,
  Bell,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ✅ Card Data */
const CARD_DATA = [
  { title: "Manage Content", icon: BookOpen, desc: "Create, edit, and organize modules.", color: "bg-blue-600" },
  { title: "Attendance", icon: BarChart3, desc: "Monitor real-time student activity.", color: "bg-emerald-500" },
  { title: "Subscriptions", icon: Wallet, desc: "Manage plans, billing, and privileges.", color: "bg-amber-500" },
  { title: "Automation", icon: Zap, desc: "Automate emails & notification triggers.", color: "bg-violet-600" },
  { title: "User Control", icon: Users, desc: "Manage admin, tutor & student access.", color: "bg-red-500" },
];

/* ✅ Navigation Items */
const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Content", icon: BookOpen, active: false },
  { label: "Attendance", icon: BarChart3, active: false },
  { label: "Subscriptions", icon: Wallet, active: false },
  { label: "Automation", icon: Zap, active: false },
  { label: "Users", icon: Users, active: false },
];

/* ✅ Beautiful Logout Confirmation Modal */
const ConfirmLogoutModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl shadow-2xl p-7 w-[90%] max-w-md text-center"
      >
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Confirm Logout
        </h3>

        <p className="text-gray-700 mb-6">
          Are you sure you want to log out?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 transition rounded-xl font-semibold"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white transition rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

/* ✅ Sidebar Navigation Item */
const NavItem = ({ label, Icon, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer font-semibold transition-all duration-200 ${
      active
        ? "bg-blue-100 text-blue-700 shadow-inner shadow-blue-50 border border-blue-200"
        : "text-gray-600 hover:bg-white hover:shadow-md"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </div>
);

/* ✅ Navbar */
const DashboardNavbar = ({ role, onMenuToggle, onLogoutClick }) => {
  return (
    <header className="flex justify-between items-center h-16 sticky top-0 bg-white/80 backdrop-blur-md z-30 px-0 sm:px-4">
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="hidden lg:block text-xl font-bold text-gray-800">
        {role} Panel
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
          <Bell className="w-5 h-5" />
        </button>

        <button
          onClick={onLogoutClick}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold flex items-center gap-2 transition-all"
        >
          <LogOut className="w-4 h-4" /> Logout
        </button>

        <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
      </div>
    </header>
  );
};

/* ✅ FULL Dashboard Component */
const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /* ✅ Logout Modal Controls */
  const openLogoutModal = () => setShowConfirm(true);
  const closeLogoutModal = () => setShowConfirm(false);

  const confirmLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  /* ✅ Sidebar */
  const sidebar = (
    <nav className="flex flex-col gap-3 p-4 h-full">
      {NAV_ITEMS.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          Icon={item.icon}
          active={item.active}
          onClick={() => {
            if (isMenuOpen) toggleMenu();
          }}
        />
      ))}

      <button
        onClick={openLogoutModal}
        className="mt-auto p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-2"
      >
        <LogOut className="w-4 h-4" /> Logout
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">

      {/* ✅ Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-screen fixed top-0 left-0 p-6 bg-white shadow-xl z-20">
        <div className="text-3xl font-extrabold text-blue-800 mb-8">⚙️ Admin</div>
        {sidebar}
      </aside>

      {/* ✅ Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 w-64 bg-white shadow-2xl z-50 lg:hidden flex flex-col h-screen"
      >
        <div className="p-6 flex justify-between items-center border-b">
          <div className="text-3xl font-extrabold text-blue-800">⚙️ Admin</div>
          <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100">
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        {sidebar}
      </motion.div>

      {/* ✅ Main Content */}
      <div className="flex-1 lg:ml-64 p-4 sm:p-8 pt-0 min-w-0">
        <DashboardNavbar
          role="Admin"
          onMenuToggle={toggleMenu}
          onLogoutClick={openLogoutModal}
        />

        <main className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Welcome Back, Admin 👋
          </h1>

          <p className="text-base sm:text-lg mb-8 text-gray-500">
            Control your Learning Management System efficiently using the tools below.
          </p>

          {/* ✅ Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CARD_DATA.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] cursor-pointer border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 ${c.color}`}>
                  <c.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500">{c.desc}</p>
              </motion.div>
            ))}
          </section>

          {/* ✅ Recent Activity */}
          <div className="mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
            <div className="h-40 flex items-center justify-center text-gray-400">
              Activity log or chart placeholder
            </div>
          </div>
        </main>
      </div>

      {/* ✅ Logout Confirmation Modal */}
      <ConfirmLogoutModal
        visible={showConfirm}
        onConfirm={confirmLogout}
        onCancel={closeLogoutModal}
      />

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </div>
  );
};

export default AdminDashboard;
