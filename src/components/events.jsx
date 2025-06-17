import React, { useState } from "react";
import { CalendarCheck, Users, Megaphone } from "lucide-react";

const campaigns = [
  {
    title: "Breast Cancer Awareness Month",
    date: "October",
    description:
      "Join millions worldwide to spread awareness about breast cancer prevention, early detection, and support for survivors.",
    icon: Megaphone,
    link: "https://www.breastcancer.org/about-breast-cancer/breast-cancer-awareness-month",
  },
  {
    title: "Annual Walkathon for a Cure",
    date: "October 15, 2025",
    description:
      "Participate in our community walkathon to raise funds for breast cancer research and patient support.",
    icon: Users,
    location: "Central Park, Banglore",
  },
  {
    title: "Free Mammogram Screening Drive",
    date: "October 20 - 25, 2025",
    description:
      "Avail free mammogram screenings at participating clinics. Early detection saves lives!",
    icon: CalendarCheck,
    location: "City Hospital & Partner Clinics",
  },
];

export default function CampaignsEvents() {
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpEmail, setRsvpEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRSVP = (e) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim() || !selectedEvent) {
      alert("Please fill all fields and select an event to RSVP.");
      return;
    }
    // Here you would send data to server or API
    setSubmitted(true);
    setRsvpName("");
    setRsvpEmail("");
    setSelectedEvent(null);
  };

  return (
    <section className="py-16 px-6 bg-white mx-auto">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
        Campaigns & Events
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Every year, October marks Breast Cancer Awareness Month. Participate in
        local and global campaigns to help raise awareness, fund research, and
        support those affected. Here are some key events and ways you can get
        involved:
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {campaigns.map(({ title, date, description, icon: Icon, location }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border border-pink-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4 text-pink-600">
              <Icon size={28} />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-sm text-pink-500 font-medium mb-2">{date}</p>
            {location && (
              <p className="text-gray-500 italic text-sm mb-4">📍 {location}</p>
            )}
            {title !== "Breast Cancer Awareness Month" && (
              <button
                className="mt-auto self-start bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => {
                  setSelectedEvent(title);
                  setSubmitted(false);
                }}
              >
                RSVP to this event
              </button>
            )}
            {title === "Breast Cancer Awareness Month" && (
              <a
                href="https://www.breastcancer.org/about-breast-cancer/breast-cancer-awareness-month"
                target="_blank"
                rel="noreferrer"
                className="mt-auto self-start text-pink-700 font-semibold underline"
              >
                Learn More
              </a>
            )}
          </div>
        ))}
      </div>

      {/* RSVP Form */}
      {selectedEvent && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-pink-200 shadow-md">
          <h3 className="text-2xl font-semibold text-pink-600 mb-4">
            RSVP for "{selectedEvent}"
          </h3>
          <form onSubmit={handleRSVP} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={rsvpName}
                onChange={(e) => setRsvpName(e.target.value)}
                className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={rsvpEmail}
                onChange={(e) => setRsvpEmail(e.target.value)}
                className="w-full p-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded transition-colors"
            >
              Submit RSVP
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-700 font-medium">
              🎉 Thank you for your RSVP! We look forward to seeing you at the
              event.
            </p>
          )}
          <button
            className="mt-3 text-pink-600 underline"
            onClick={() => setSelectedEvent(null)}
          >
            Cancel
          </button>
        </div>
      )}

      <div className="mt-16 text-center text-gray-700 max-w-lg mx-auto">
        <h3 className="text-xl font-semibold mb-2">How You Can Participate</h3>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Join local walkathons and charity runs to raise awareness.</li>
          <li>Volunteer at free screening events and awareness drives.</li>
          <li>Donate or fundraise for breast cancer research.</li>
          <li>Share educational content on social media to spread awareness.</li>
          <li>Encourage friends and family to get regular screenings.</li>
        </ul>
      </div>
    </section>
  );
}
