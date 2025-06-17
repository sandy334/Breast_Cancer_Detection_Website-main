import React from "react";
import { Phone, Globe, Hospital, Users, MapPin } from "lucide-react";

export default function SupportResources() {
  return (
    <section className="py-10 px-3 sm:px-6 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-6 text-center">
        Support Groups & Resources
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-12 text-base sm:text-lg">
        You're never alone in this journey. Whether you're a patient, survivor, or caregiver — emotional and practical help is available. Explore our verified support options:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Helplines */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Phone />
            <h3 className="text-lg sm:text-xl font-semibold">Breast Cancer Helplines</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><strong>India:</strong> 080-6191-1919 (Tata Memorial)</li>
            <li><strong>USA:</strong> 1-800-227-2345 (American Cancer Society)</li>
            <li><strong>UK:</strong> 0808-800-6000 (Breast Cancer Now)</li>
            <li><strong>Email:</strong> helpline@breastcancersupport.org</li>
          </ul>
        </div>

        {/* Forums */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Globe />
            <h3 className="text-lg sm:text-xl font-semibold">Online Forums</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><a href="https://community.breastcancer.org" target="_blank" rel="noreferrer" className="text-pink-700 underline">BreastCancer.org Community</a></li>
            <li><a href="https://cancerforums.net" target="_blank" rel="noreferrer" className="text-pink-700 underline">Cancer Forums</a></li>
            <li><a href="https://www.reddit.com/r/breastcancer/" target="_blank" rel="noreferrer" className="text-pink-700 underline">Reddit r/breastcancer</a></li>
          </ul>
        </div>

        {/* Clinics */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Hospital />
            <h3 className="text-lg sm:text-xl font-semibold">NGOs & Clinics</h3>
          </div>
          <ul className="text-gray-700 list-disc list-inside space-y-2 text-sm sm:text-base">
            <li><strong>Tata Memorial Hospital (Mumbai)</strong></li>
            <li><strong>American Cancer Society (US)</strong></li>
            <li><strong>Pink Hope (Australia)</strong></li>
            <li><strong>CanSupport (India)</strong></li>
          </ul>
          <a
            href="https://www.google.com/maps/search/breast+cancer+clinics+near+me"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-pink-600 mt-3 underline text-sm sm:text-base"
          >
            <MapPin className="mr-2" size={18} /> Find Nearby Support Centers
          </a>
        </div>

        {/* Survivor Stories */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-pink-200 shadow-sm">
          <div className="flex items-center gap-3 text-pink-600 mb-3">
            <Users />
            <h3 className="text-lg sm:text-xl font-semibold">Survivor Communities</h3>
          </div>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            Get inspired by real stories and connect with survivor groups to share experiences and strength.
          </p>
          <ul className="text-pink-700 list-disc list-inside space-y-1 text-sm sm:text-base">
            <li><a href="https://www.nationalbreastcancer.org/breast-cancer-ribbon/" target="_blank" rel="noreferrer">Pink Ribbon Stories</a></li>
            <li><a href="https://www.survivingbreastcancer.org/breast-cancer-stories?gad_source=1&gad_campaignid=10554593716&gbraid=0AAAAACT9FcqaFSYxSFne8OwVv6jrH0UR4&gclid=CjwKCAjwruXBBhArEiwACBRtHX4GZAufCallF702LY2uSoogC9r_qGhL39DVJAvlmvuu8s9VaMyfqBoCcW4QAvD_BwE" target="_blank" rel="noreferrer">BreastCancer.org Stories</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}