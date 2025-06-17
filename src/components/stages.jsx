import React from "react";
import { motion } from "framer-motion";
import { FileDown, Stethoscope } from "lucide-react";

const stages = [
  {
    stage: "Stage 0",
    desc: "Non-invasive breast cancer (DCIS) where abnormal cells are contained in the ducts.",
    spread: "No spread",
    treatment: "Lumpectomy or mastectomy, followed by radiation",
    prognosis: "Excellent",
  },
  {
    stage: "Stage I",
    desc: "Invasive cancer; tumor is small and hasn’t spread significantly.",
    spread: "Limited to breast tissue",
    treatment: "Surgery, radiation, hormone therapy if needed",
    prognosis: "Very good",
  },
  {
    stage: "Stage II",
    desc: "Tumor is larger and/or has spread to nearby lymph nodes.",
    spread: "Local lymph nodes",
    treatment: "Surgery, chemotherapy, radiation",
    prognosis: "Good",
  },
  {
    stage: "Stage III",
    desc: "Extensive spread to nearby tissues or lymph nodes.",
    spread: "Regional lymph nodes & chest wall",
    treatment: "Chemo, surgery, radiation, hormonal therapy",
    prognosis: "Moderate",
  },
  {
    stage: "Stage IV",
    desc: "Cancer has spread to distant organs (metastatic).",
    spread: "Bones, liver, lungs, brain",
    treatment: "Systemic treatments (chemo, targeted, immunotherapy)",
    prognosis: "Chronic but treatable",
  },
];

const AddOns = () => (
  <div className="grid gap-4 md:grid-cols-2 mt-10">
    <div className="bg-pink-100 p-4 sm:p-6 rounded-xl shadow">
      <h4 className="text-lg font-bold mb-2"> Download Stage-wise Guide</h4>
      <p className="text-sm text-gray-700 mb-2">
        Get a printable PDF with detailed information on diagnosis, treatment, and support for each breast cancer stage.
      </p>
      <a
        href="https://www.cooperhealth.org/sites/default/files/pdfs/Breast%20Cancer%20Treatment%20by%20Stage.pdf"
        className="inline-flex items-center gap-2 text-pink-700 font-medium hover:underline"
      >
        <FileDown className="w-4 h-4" /> Download PDF
      </a>
    </div>

    <div className="bg-pink-100 p-4 sm:p-6 rounded-xl shadow">
      <h4 className="text-lg font-bold mb-2"> Expert Video Explainer</h4>
      <p className="text-sm text-gray-700 mb-2">
        Understand staging with a short animated video explained by a leading oncologist.
      </p>
      <a
        href="https://www.youtube.com/watch?v=Dr6MejkqRoQ"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-pink-700 font-medium hover:underline"
      >
        <Stethoscope className="w-4 h-4" /> Watch Now
      </a>
    </div>
  </div>
);

export default function BreastCancerStagesSection() {
  return (
    <section className="py-10 px-3 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">
          Stages of Breast Cancer
        </h2>
        <p className="text-center text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Breast cancer is categorized into stages, from 0 (non-invasive) to IV (metastatic), depending on tumor size, lymph node involvement, and spread to other organs.
        </p>

        <div className="grid gap-6">
          {stages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 sm:p-6 rounded-xl shadow bg-pink-50 border-l-4 border-pink-500"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">
                {item.stage}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{item.desc}</p>
              <ul className="text-sm sm:text-base text-gray-600 list-disc ml-5">
                <li>
                  <strong>Spread:</strong> {item.spread}
                </li>
                <li>
                  <strong>Treatment:</strong> {item.treatment}
                </li>
                <li>
                  <strong>Prognosis:</strong> {item.prognosis}
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        <AddOns />

        <div className="mt-10 bg-pink-100 p-4 sm:p-5 rounded-xl">
          <h4 className="font-bold text-pink-700 text-base sm:text-lg mb-2">
            Why is staging important?
          </h4>
          <p className="text-sm sm:text-base text-gray-700">
            Accurate staging helps doctors plan appropriate treatment, predict outlook, and determine if clinical trials are a good option.
            Early stages are usually more treatable and curable, while advanced stages focus on controlling the disease and improving quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}