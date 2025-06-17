import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircleHeart } from "lucide-react";
import "../styles/animations.css";

// =======================
// Chatbot Component
// =======================
const ChatbotSupport = () => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi there 💗 I'm here for emotional and informational support related to breast cancer. How can I help you today?",
    },
  ]);

  const responses = {
    diagnosed:
      "You are not alone. It's completely okay to feel overwhelmed. It's important to talk to your doctor and surround yourself with supportive people. 💕",
    screening:
      "Breast cancer screening includes mammograms and clinical exams. Visit your local health center or hospital to schedule one. Early detection is crucial. 🎗️",
    scared:
      "Feeling scared is valid. You're strong for reaching out. Consider speaking to a counselor or joining a support group. You are not alone.",
    treatment:
      "Treatment depends on the stage and type of breast cancer. It might involve surgery, chemotherapy, radiation, or hormonal therapy. Consult an oncologist to explore your options.",
    sideEffects:
      "Common side effects of treatment include fatigue, nausea, and hair loss. Remember, each body reacts differently. Stay hydrated, rest well, and consult your doctor about symptom management.",
    familyHistory:
      "Having a family history of breast cancer may increase your risk. Regular screenings and genetic counseling can help you stay ahead.",
    lump:
      "Not all lumps are cancerous, but it's important to get any unusual breast changes checked by a doctor promptly. Early consultation can make a big difference.",
  };

  const handleUserInput = (text) => {
    setMessages((prev) => [...prev, { from: "user", text }]);

    setTimeout(() => {
      let reply = "I'm here with you. Could you please tell me more?";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("diagnosed")) reply = responses.diagnosed;
      else if (lowerText.includes("screen")) reply = responses.screening;
      else if (lowerText.includes("scared")) reply = responses.scared;
      else if (lowerText.includes("treatment")) reply = responses.treatment;
      else if (lowerText.includes("side effect")) reply = responses.sideEffects;
      else if (lowerText.includes("family")) reply = responses.familyHistory;
      else if (lowerText.includes("lump")) reply = responses.lump;

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <div className="mt-16 p-6 bg-pink-50/80 rounded-xl shadow-md max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircleHeart className="text-pink-400 w-6 h-6" />
        <h3 className="text-lg font-semibold text-pink-700">
          Breast Cancer Support Chatbot
        </h3>
      </div>
      <div className="border p-4 h-64 overflow-y-auto bg-pink-100 rounded mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.from === "user"
                ? "text-right text-gray-700"
                : "text-left text-pink-700"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {[
          "I just got diagnosed",
          "Where can I get screened?",
          "I feel scared",
          "Tell me about treatment",
          "What are side effects?",
          "I have family history",
          "I found a lump",
        ].map((btnText, idx) => (
          <button
            key={idx}
            onClick={() => handleUserInput(btnText)}
            className="text-sm bg-pink-200 text-pink-800 px-3 py-1 rounded hover:bg-pink-300 transition"
          >
            {btnText}
          </button>
        ))}
      </div>
    </div>
  );
};

// =======================
// Animated Background
// =======================
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-pink-100 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-pink-200 opacity-30 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 100, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-1/4 w-72 h-72 rounded-full bg-pink-300 opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [50, 0, 50], y: [-50, 0, -50] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

// =======================
// Ribbon Animation
// =======================
const RibbonAnimation = () => (
  <motion.div
    className="absolute right-10 top-20 w-24 h-24 opacity-20"
    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z"
        fill="#f9a8d4"
      />
      <circle cx="50" cy="50" r="15" fill="#f472b6" />
    </svg>
  </motion.div>
);

// =======================
// Main Home Component
// =======================
export default function Home() {
  return (
    <div className="bg-pink-50/50 text-gray-800 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <RibbonAnimation />
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
            backgroundSize: "300% 300%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Early Detection Saves Lives
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-pink-700 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Learn the signs, stay informed, and take action. Breast cancer
          awareness starts with knowledge and proactive care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/awareness"
            className="px-6 py-3 rounded-full shadow font-semibold transition bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-white hover:brightness-110"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 text-center bg-pink-100/70 backdrop-blur-sm relative"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <RibbonAnimation />
        <h2 className="text-3xl sm:text-4xl font-semibold text-pink-500 mb-4">
          About This Project
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-pink-800">
          Our mission is to create awareness about breast cancer and provide a
          free online tool for early prediction using AI. Empower yourself with
          knowledge and take steps to protect your health.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-4 sm:px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">
          Ready to Take a Step?
        </h2>
        <p className="text-pink-700 mb-6 text-base sm:text-lg">
          Explore symptoms or steps to protect your health.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/symptoms"
            className="bg-white border-2 border-pink-400 text-pink-600 px-6 py-3 rounded-full hover:bg-pink-100 transition mb-3 sm:mb-0"
          >
            View Symptoms
          </Link>
          <Link
            to="/awareness"
            className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition"
          >
            Awareness
          </Link>
        </div>
      </motion.section>

      {/* Chatbot */}
      <ChatbotSupport />

      <footer className="text-center py-6 text-sm text-pink-700 bg-pink-50 border-t border-pink-100 mt-12">
        <p className="mb-2 font-medium">
          &copy; {new Date().getFullYear()} Sandesh H R. All rights reserved.
        </p>
        <div className="flex justify-center flex-wrap gap-4 text-pink-600 text-sm">
          <a
            href="https://github.com/sandy334"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-hr-32262a220/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://sandeshportfoliofrontend.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-800 transition"
          >
            Portfolio
          </a>
          <a
            href="mailto:sandeshhr334@gmail.com"
            className="hover:text-pink-800 transition"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}