// AwarenessPage.jsx
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RiskFactorsSection from "../components/riskfact";
import ScreeningAndDiagnosisSection from "../components/screening";
import BreastCancerStagesSection from "../components/stages";
import BreastSelfExamSection from "../components/selfex";
import CampaignsEvents from "../components/events";
import SupportResources from "../components/support";
const stats = [
  { label: "Women affected globally", value: 1, denominator: 8 },
  { label: "Early detection survival rate", value: 93, suffix: "%" },
  { label: "Avg. diagnosis age", value: 50 },
];

export default function AwarenessPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-pink-50 min-h-screen px-2 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-4xl text-center font-bold text-pink-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Breast Cancer Awareness
      </motion.h1>

      {/* Section: What is Breast Cancer */}
      <section className="bg-pink-50 py-10 sm:py-16 px-2 sm:px-4">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Text Section */}
          <div>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What is Breast Cancer?
            </motion.h2>

            <motion.p
              className="text-gray-700 text-base sm:text-lg mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Breast cancer is a type of cancer that starts in the breast tissue. It occurs
              when cells in the breast begin to grow uncontrollably and form a tumor that can
              be felt as a lump or seen on imaging.
            </motion.p>

            <motion.p
              className="text-gray-700 text-base sm:text-lg mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              This tumor can be benign (non-cancerous) or malignant (cancerous). Malignant
              tumors may spread to other parts of the body through the lymphatic system or
              bloodstream.
            </motion.p>

            <motion.ul
              className="list-disc list-inside text-gray-700 space-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <li>
                <span className="font-semibold text-pink-600">Benign Tumor:</span> Not
                cancerous and doesn't spread.
              </li>
              <li>
                <span className="font-semibold text-pink-600">Malignant Tumor:</span> Cancerous
                and can invade surrounding tissues.
              </li>
              <li>
                <span className="font-semibold text-pink-600">Metastasis:</span> The spread of
                cancer cells to other parts of the body.
              </li>
            </motion.ul>
          </div>

          {/* Image/Illustration Section */}
          <motion.div
            className="w-full mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="awareness.jpg"
              alt="Breast Cancer Illustration"
              className="w-full rounded-lg shadow-lg object-cover max-h-80 sm:max-h-none"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-pink-50 py-10 sm:py-16 px-2 sm:px-6" ref={ref}>
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-4xl font-bold text-pink-600 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Breast Cancer Awareness Matters
          </motion.h2>

          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Awareness leads to early detection, reduces stigma, and saves lives. Understanding symptoms and promoting open conversations is key to defeating breast cancer.
          </motion.p>

          {/* Stat Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-5 sm:p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-pink-500">
                  {stat.suffix ? (
                    <Counter end={stat.value} suffix={stat.suffix} />
                  ) : stat.denominator ? (
                    <>
                      <span className="text-5xl sm:text-6xl">{stat.value}</span>
                      <span className="text-gray-600 text-xl"> /{stat.denominator}</span>
                    </>
                  ) : (
                    <Counter end={stat.value} />
                  )}
                </p>
                <p className="mt-3 text-gray-600 text-base sm:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <motion.div
            className="w-full max-w-xl mx-auto bg-gray-300 h-4 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div
              className="bg-pink-500 h-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "12.5%" } : {}}
              transition={{ delay: 1.4, duration: 1 }}
            />
          </motion.div>
          <p className="text-sm text-gray-600 mt-2">
            1 in 8 women will be diagnosed with breast cancer in their lifetime
          </p>
        </div>
      </section>

      {/* Section: Screening & Diagnosis */}
      <ScreeningAndDiagnosisSection />

      {/* Section: Daily Habits - Risk Reduction */}
      <RiskFactorsSection />

      {/* Section: Cancer Stages - Horizontal Timeline */}
      <BreastCancerStagesSection />

      <BreastSelfExamSection />
      <CampaignsEvents />
      <SupportResources />
    </div>
  );
}

function Counter({ end, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={isInView ? { count: end } : {}}
      transition={{ duration: 2 }}
    >
      {Math.floor(end)}
      {suffix}
    </motion.span>
  );
}