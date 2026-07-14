import { useState } from "react";

const fakeWorkers = [
  { 
    id: 1, 
    name: "Adebayo O.", 
    skill: "Plumber", 
    rating: 4.9, 
    reviews: 23, 
    distance: "2.1km", 
    location: "Ibadan", 
    verified: true, 
    jobs: 87,
    bio: "10 years experience. Fast and neat pipe fixing. Available 24/7 for emergencies.",
    skills: ["Pipe Leakage", "Water Heater", "Toilet Installation"],
    img: "https://i.pravatar.cc/150?u=ade", 
    phone: "0803 123 4567", 
    email: "adebayo@melandi.ng" 
  },
  { 
    id: 2, 
    name: "Chinedu K.", 
    skill: "Electrician", 
    rating: 4.8, 
    reviews: 18, 
    distance: "3.5km", 
    location: "Osogbo", 
    verified: true, 
    jobs: 64,
    bio: "Certified electrician. House wiring, AC installation, Solar setup. Neat work guaranteed.",
    skills: ["House Wiring", "Solar", "Generator"],
    img: "https://i.pravatar.cc/150?u=chi", 
    phone: "0902 987 6543", 
    email: "chinedu@melandi.ng" 
  },
];

export default function App() {
  const [page, setPage] = useState("landing"); 
  const [signedUp, setSignedUp] = useState(false);
  const [activeTab, setActiveTab] = useState("search");
  const [selectedWorker, setSelectedWorker] = useState(null);

  // LANDING PAGE
  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent">MELANDI</h1>
        <p className="text-gray-600 mt-2">Connect with trusted skilled workers</p>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <button onClick={() => setPage("signup")} className="bg-[#0A4D3C] text-white px-8 py-4 rounded-2xl font-bold">Skill Finder</button>
          <button onClick={() => setPage("signup")} className="bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-bold">Skill Worker</button>
        </div>
      </div>
    )
  }

  // SIGNUP FORM
  if (page === "signup") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] p-6">
        <button onClick={() => setPage("landing")} className="mb-4 text-[#0A4D3C] font-bold">← Back</button>
        <h2 className="text-3xl font-bold text-[#0A4D3C]">Create Account</h2>
        <p className="text-gray-600">Free for 1 month. Then ₦2000/mo for AI + Chat</p>
        <form onSubmit={(e) => {e.preventDefault(); setSignedUp(true); setPage("dashboard")}}>
          <input placeholder="Full Name" className="border w-full p-3 rounded-xl mt-4" required />
          <input placeholder="Phone Number" className="border w-full p-3 rounded-xl mt-2" required />
          <input placeholder="Location e.g Ibadan" className="border w-full p-3 rounded-xl mt-2" required />
          <button className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">Start Free Trial</button>
        </form>
      </div>
    )
  }

  // DASHBOARD
  if (page === "dashboard" && signedUp) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        {/* TOP BAR */}
        <div className="bg-white p-4 flex justify-between items-center border-b sticky top-0">
          <h2 className="text-xl font-bold text-[#0A4D3C] capitalize">{activeTab}</h2>
          <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>
        
        {/* SIDEBAR BUTTONS */}
        <div className="p-4 flex gap-2 overflow-x-auto bg-white border-b">
          <button onClick={() => setActiveTab("ai")} className={`px-4 py-2 rounded-xl whitespace-nowrap ${activeTab === "ai" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>🤖 AI</button>
          <button onClick={() => setActiveTab("chat")} className={`px-4 py-2 rounded-xl whitespace-nowrap ${activeTab === "chat" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>💬 Chat</button>
          <button onClick={() => setActiveTab("search")} className={`px-4 py-2 rounded-xl whitespace-nowrap ${activeTab === "search" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>🔍 Search</button>
          <button onClick={() => setActiveTab("review")} className={`px-4 py-2 rounded-xl whitespace-nowrap ${activeTab === "review" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>⭐ Reviews</button>
          <button onClick={() => setActiveTab("settings")} className={`px-4 py-2 rounded-xl whitespace-nowrap ${activeTab === "settings" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>⚙️ Settings</button>
        </div>

        <div className="p-4">
          
          {/* SEARCH TAB - WITH FULL INFO + VERIFICATION */}
          {activeTab === "search" && !selectedWorker && (
            <>
              <h3 className="text-2xl font-bold">Workers Near You</h3>
              {fakeWorkers.map(worker => (
                <div key={worker.id} onClick={() => setSelectedWorker(worker)}
                  className="bg-white p-4 rounded-2xl mt-4 shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <div className="flex gap-3">
                    <img src={worker.img} className="w-16 h-16 rounded-full"/>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-lg">{worker.name}</p>
                        {worker.verified && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">✓ Verified</span>}
                      </div>
                      <p className="text-gray-600">{worker.skill} • {worker.location}</p>
                      <div className="flex gap-3 text-sm mt-1">
                        <span>⭐ {worker.rating} ({worker.reviews} reviews)</span>
                        <span>📍 {worker.distance}</span>
                        <span>💼 {worker.jobs} jobs</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* WORKER DETAIL PAGE */}
          {activeTab === "search" && selectedWorker && (
            <div>
              <button onClick={() => setSelectedWorker(null)} className="mb-4 text-[#0A4D3C] font-bold">← Back to Search</button>
              <div className="bg-white rounded-2xl p-6 shadow">
                <div className="flex flex-col items-center">
                  <img src={selectedWorker.img} className="w-24 h-24 rounded-full"/>
                  <h2 className="text-2xl font-bold mt-2">{selectedWorker.name}</h2>
                  {selectedWorker.verified && <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold mt-1">✓ Verified Skill Worker</span>}
                </div>

                <p className="text-center text-gray-600 mt-2">{selectedWorker.skill} • {selectedWorker.location}</p>
                
                <div className="flex justify-center gap-4 text-sm mt-3">
                  <span>⭐ {selectedWorker.rating}</span>
                  <span>({selectedWorker.reviews} reviews)</span>
                  <span>💼 {selectedWorker.jobs} jobs done</span>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold">About</h4>
                  <p className="text-gray-700">{selectedWorker.bio}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold">Specializes In</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedWorker.skills.map(s => <span key={s} className="bg-[#0A4D3C]/10 text-[#0A4D3C] px-3 py-1 rounded-full text-sm">{s}</span>)}
                  </div>
                </div>

                <div className="mt-6 border-t pt-4">
                  <h4 className="font-bold mb-2">Contact</h4>
                  <p>📞 {selectedWorker.phone}</p>
                  <p>📧 {selectedWorker.email}</p>
                  <button className="w-full mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold">Chat Now - Pro Feature</button>
                </div>
              </div>
            </div>
          )}

          {/* AI TAB */}
          {activeTab === "ai" && (
            <div className="text-center mt-10 bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">MELANDI AI 🤖</h3>
              <div className="bg-[#D4AF37]/20 p-3 rounded-xl mt-4"><p className="font-bold">Pro Plan: ₦2000/month</p></div>
            </div>
          )}

          {/* CHAT TAB */}
          {activeTab === "chat" && (
            <div className="text-center mt-10 bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">Chat with Workers 💬</h3>
              <div className="bg-[#D4AF37]/20 p-3 rounded-xl mt-4"><p className="font-bold">Included in Pro: ₦2000/month</p></div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <img src="https://i.pravatar.cc/150?u=user" className="w-24 h-24 rounded-full mb-2 mx-auto"/>
              <button className="text-sm text-[#D4AF37] block mx-auto">Change Photo</button>
              <input defaultValue="Your Name" className="border rounded-xl p-3 w-full mt-4"/>
              <button className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">Save Changes</button>
            </div>
          )}

        </div>
      </div>
    )
  }

  return <div>Loading...</div>
}
