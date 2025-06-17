import React from "react";
import { motion } from "framer-motion";
import MythVsTruthSection from "../components/myth";
import symptomsImage from "../assests/symptoms.png";

const steps = [
  {
    title: "Step 1: Self-Examination",
    desc: "Every month, check for lumps, skin changes, or any unusual signs.",
  },
  {
    title: "Step 2: Clinical Exam",
    desc: "Doctors perform a physical breast check during routine visits.",
  },
  {
    title: "Step 3: Mammogram",
    desc: "An X-ray of the breast can detect cancer early, even before symptoms.",
  },
  {
    title: "Step 4: Biopsy",
    desc: "If something suspicious is found, a tissue sample is tested in labs.",
  },
];

export default function SignsAndSymptoms() {
  return (
    <div className="min-h-screen bg-pink-50 px-3 sm:px-6 py-10 flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Signs & Symptoms
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-700 max-w-2xl text-center mb-10 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hover over the markers on the diagram to explore the early signs of breast cancer.
      </motion.p>

      {/* Image with Interactive Markers */}
      <motion.div
        className="relative w-full max-w-xs sm:max-w-md md:max-w-lg mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={symptomsImage}
          alt="Breast Cancer Awareness Diagram"
          className="rounded-xl shadow-lg w-full"
        />
        {/* Interactive markers can be added here */}
      </motion.div>

      {/* Step-by-Step Awareness Section */}
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-pink-600 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Early Detection Steps
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-pink-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      <motion.div
        className="w-full max-w-2xl mt-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-pink-600 mb-4 text-center">
          Doctor Explains Symptoms
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="rounded-xl shadow-xl w-full h-[220px] sm:h-[320px] md:h-[360px]"
            src="https://www.youtube.com/embed/3JOb2hyawFg"
            title="Breast Cancer Symptoms"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <MythVsTruthSection />
    </div>
  );
}