import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
        }}
      >
        <h2
          style={{
            fontSize: '26px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#1e40af'
          }}
        >
          Logout
        </h2>

        <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '25px', color: '#374151' }}>
          Are you sure you want to log out?
        </p>

        <button
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '18px',
            transition: '0.3s'
          }}
        >
          Confirm Logout
        </button>
      </motion.div>
    </div>
  );
};

export default Logout;