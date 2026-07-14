import { useState } from "react";

const fakeWorkers = [
  { id: 1, name: "Adebayo O.", skill: "Plumber", rating: 4.9, reviews: 23, distance: "2.1km", location: "Ibadan", verified: true, phone: "0803 123 4567" },
  { id: 2, name: "Chinedu K.", skill: "Electrician", rating: 4.8, reviews: 18, distance: "3.5km", location: "Osogbo", verified: true, phone: "0902 987 6543" },
];

export default function App() {
  const [page, setPage] = useState("landing"); 
  const [signedUp, setSignedUp] = useState(false);
  const [userType, setUserType] = useState(""); // "finder" or "worker"
  const [activeTab, setActiveTab] = useState("search");

  const handleSignup = (type) => {
    setUserType(type);
    setSignedUp(true);
    setPage("dashboard");
  }

  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-extrabold text-[#0A4D3C]">MELANDI</h1>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <button onClick={() => handleSignup("finder")} className="bg-[#0A4D3C] text-white px-8 py-4 rounded-2xl font-bold">Skill Finder</button>
          <button onClick={() => handleSignup("worker")} className="bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-bold">Skill Worker</button>
        </div>
      </div>
    )
  }

  if (page === "dashboard" && signedUp) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-[#0A4D3C]">Dashboard</h2>
          <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>
        
        <div className="p-4 flex gap-2 overflow-x-auto bg-white border-b">
          <button onClick={() => setActiveTab("ai")} className={`px-4 py-2 rounded-xl ${activeTab === "ai" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>🤖 AI</button>
          <button onClick={() => setActiveTab("chat")} className={`px-4 py-2 rounded-xl ${activeTab === "chat" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>💬 Chat</button>
          <button onClick={() => setActiveTab("search")} className={`px-4 py-2 rounded-xl ${activeTab === "search" ? "bg-[#0A4D3C] text-white" : "bg-gray-200"}`}>🔍 Search</button>
        </div>

        <div className="p-4">
          
          {/* IF USER IS FINDER */}
          {userType === "finder" && activeTab === "search" && (
            <>
              <h3 className="text-2xl font-bold">Workers Near You</h3>
              {fakeWorkers.map(worker => (
                <div key={worker.id} className="bg-white p-4 rounded-xl mt-4 shadow">
                  <p className="font-bold">{worker.name} <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">✓ Verified</span></p>
                  <p className="text-sm text-gray-600">{worker.skill} • {worker.location} • {worker.distance}</p>
                  <p className="text-sm mt-1">⭐ {worker.rating} ({worker.reviews} reviews)</p>
                  <p className="text-sm mt-1">📞 {worker.phone}</p>
                  {/* NO PRICE HERE */}
                </div>
              ))}
            </>
          )}

          {/* IF USER IS WORKER */}
          {userType === "worker" && activeTab === "search" && (
            <>
              <h3 className="text-2xl font-bold">My MELANDI Profile</h3>
              <div className="bg-white p-4 rounded-xl mt-4 shadow">
                <p className="font-bold">Your Profile is Live</p>
                <p className="text-sm text-gray-600">Skill Finders in Ibadan can see you now</p>
                <button className="mt-2 bg-[#0A4D3C] text-white px-4 py-2 rounded-xl">Edit Profile</button>
              </div>
              <h3 className="text-2xl font-bold mt-6">New Job Requests</h3>
              <div className="bg-white p-4 rounded-xl mt-2 shadow">
                <p>0 new requests</p>
              </div>
            </>
          )}

          {/* AI TAB - PRICE SHOWS HERE */}
          {activeTab === "ai" && (
            <div className="text-center mt-10 bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">MELANDI AI 🤖</h3>
              <div className="bg-[#D4AF37]/20 p-3 rounded-xl mt-4"><p className="font-bold">Pro: ₦2000/month</p></div>
            </div>
          )}

          {/* CHAT TAB - PRICE SHOWS HERE */}
          {activeTab === "chat" && (
            <div className="text-center mt-10 bg-white p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-bold">Chat 💬</h3>
              <div className="bg-[#D4AF37]/20 p-3 rounded-xl mt-4"><p className="font-bold">Included in Pro: ₦2000/month</p></div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
