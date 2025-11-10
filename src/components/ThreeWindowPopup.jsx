import React from "react";
import { motion } from "framer-motion";

const windowVariants = {
  initial: { opacity: 0, x: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 10 },
  },
};

const ThreeWindowPopup = () => {
  const container = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div style={popupStyle} variants={container} initial="initial" animate="visible">
      <motion.div style={windowStyle(1)} variants={windowVariants}>
        <h4 style={{ color: "#2C3E50" }}>1. Editor ✍️ (Code/Notes Making)</h4>
        <textarea style={textAreaStyle} placeholder="Write your code, notes, or homework here..."></textarea>
      </motion.div>

      <motion.div style={windowStyle(2)} variants={windowVariants}>
        <h4 style={{ color: "#F39C12" }}>2. Source of Truth 📖 (Content Reference)</h4>
        <p>Access Content: PDF, Video Streaming Recorded, Online Class Access</p>
      </motion.div>

      <motion.div style={windowStyle(3)} variants={windowVariants}>
        <h4 style={{ color: "#1ABC9C" }}>3. Bot 🤖 (AI Agent for Assistance)</h4>
        <div style={chatWindowStyle}>
          <p><strong>Bot:</strong> Welcome! Ask me anything about your module.</p>
        </div>
        <input type="text" placeholder="Chat with the Bot..." style={chatInputStyle} />
      </motion.div>
    </motion.div>
  );
};

const popupStyle = {
  display: "flex",
  gap: "15px",
  marginTop: "30px",
  minHeight: "450px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  padding: "15px",
  backgroundColor: "#fff",
};

const windowStyle = (index) => ({
  flex: 1,
  padding: "20px",
  borderRadius: "10px",
  overflow: "hidden",
  border: "1px solid #DCE4E8",
  backgroundColor: ["#F9F9F9", "#F0F3F4", "#E8F6F3"][index - 1],
});

const textAreaStyle = {
  width: "100%",
  minHeight: "260px",
  border: "none",
  resize: "none",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "white",
  boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
};

const chatWindowStyle = {
  height: "260px",
  border: "1px solid #ccc",
  padding: "10px",
  overflowY: "scroll",
  backgroundColor: "white",
  borderRadius: "5px",
  marginBottom: "5px",
};

const chatInputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #3498db",
};

export default ThreeWindowPopup;
