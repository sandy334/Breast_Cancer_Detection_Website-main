import React from "react";
import { motion } from "framer-motion";
import { Eye, Hand, Info } from "lucide-react";

const steps = [
  {
    title: "1. In Front of a Mirror",
    icon: Eye,
    description: `Stand with your shoulders straight and arms on your hips. 
      Look for any changes in breast shape, size, or skin texture (dimpling, puckering). 
      Check if nipples have changed position or look inverted.`,
  },
  {
    title: "2. Raise Your Arms",
    icon: Hand,
    description: `Raise your arms overhead and look for the same changes. 
      Pay attention to any fluid (watery, milky, or bloody) coming from the nipple.`,
  },
  {
    title: "3. Lying Down - Palpate",
    icon: Hand,
    description: `Lie down and use your right hand to examine your left breast and vice versa. 
      Use the pads of your three middle fingers to press gently but firmly in small circular motions, covering the entire breast and armpit area. 
      Follow an up-and-down pattern to ensure full coverage.`,
  },
  {
    title: "4. Standing or Shower Check",
    icon: Hand,
    description: `Many find it easiest to examine breasts while wet and slippery during a shower. 
      Cover the entire breast and armpit with the same up-and-down pattern.`,
  },
];

const tips = [
  "Perform monthly at the same time relative to your menstrual cycle.",
  "Use different pressure levels—light, medium, and firm—to feel all breast tissue.",
  "Report any new lumps, thickening, or changes immediately to your healthcare provider.",
  "Breast self-exam is not a substitute for mammograms or clinical exams, but an additional awareness tool.",
];

export default function BreastSelfExamSection() {
  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-6 my-8 sm:my-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl sm:text-3xl font-bold text-pink-700 mb-6 text-center"
      >
        How to Do a Breast Self-Exam
      </motion.h2>

      <p className="text-gray-700 mb-8 text-center max-w-xl mx-auto text-base sm:text-lg">
        Regular breast self-exams help you become familiar with your breasts so you can detect changes early.
        Perform this simple monthly check following the steps below.
      </p>

      <div className="space-y-8">
        {steps.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <div className="flex-shrink-0 flex items-start justify-center sm:justify-start mb-2 sm:mb-0">
              <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                <Icon size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-1">{title}</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 bg-pink-50 p-4 sm:p-6 rounded-lg border border-pink-200 shadow-inner">
        <h3 className="flex items-center gap-2 text-pink-600 font-semibold text-base sm:text-lg mb-4">
          <Info size={20} /> Pro Tips for Effective Self-Exams
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}