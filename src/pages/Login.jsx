import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const role = login(email, password);

    if (role) {
      navigate(`/dashboard/${role}`);
    } else {
      setError('Invalid Email/Phone or Password.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ebf5ff, #d6eaff)',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '420px' }}
      >
        <div
          style={{
            background: 'white',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            borderRadius: '20px',
            padding: '40px'
          }}
        >
          <h2
            style={{
              fontSize: '26px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '25px',
              color: '#1d4ed8'
            }}
          >
            Login / Subscribe to Upskilling and Outsourcing
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {error && (
              <p style={{ color: 'red', fontSize: '14px', textAlign: 'center' }}>{error}</p>
            )}

            <input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                outline: 'none',
                fontSize: '15px',
                transition: '0.2s'
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                outline: 'none',
                fontSize: '15px',
                transition: '0.2s'
              }}
            />

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '18px',
                borderRadius: '12px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: '0.3s'
              }}
            >
              Login
            </button>
          </form>

          <div
            style={{
              marginTop: '22px',
              paddingTop: '14px',
              borderTop: '1px solid #e5e7eb',
              fontSize: '14px',
              color: '#4b5563',
              textAlign: 'center'
            }}
          >
            <p>Your subscription plan (Free, Premium, Platinum) and payment interface are handled after login.</p>
            <p style={{ marginTop: '6px', fontWeight: '600' }}>Test accounts: consumer/consumer, admin/admin, tutor/tutor</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;