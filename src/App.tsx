
import { useState } from "react";

const fakeWorkers = [
  { id: 1, name: "Adebayo O.", skill: "Plumber", distance: "2.1km", location: "Ibadan", price: "₦5000/hr", phone: "0803 123 4567", email: "adebayo@melandi.ng" },
  { id: 2, name: "Chinedu K.", skill: "Electrician", distance: "3.5km", location: "Osogbo", price: "₦7000/hr", phone: "0902 987 6543", email: "chinedu@melandi.ng" },
];

function App() {
  const [view, setView] = useState("landing"); 
  const [activeTab, setActiveTab] = useState("search");
  const [isSignedUp, setIsSignedUp] = useState(false); 
  const [selectedWorker, setSelectedWorker] = useState(null);

  const handleSignup = (type) => {
    setIsSignedUp(true);
    setView("dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black flex">
      
      {/* SIDEBAR */}
      {isSignedUp && view === "dashboard" && (
        <div className="w-20 md:w-64 bg-white border-r flex-col items-center md:items-start p-4">
          <h2 className="text-2xl font-bold text-[#0A4D3C] mb-8 hidden md:block">MELANDI</h2>
          <div className="flex flex-col gap-4 w-full">
            <button onClick={() => setActiveTab("ai")} className={`p-3 rounded-xl ${activeTab === "ai" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>🤖 AI</button>
            <button onClick={() => setActiveTab("chat")} className={`p-3 rounded-xl ${activeTab === "chat" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>💬 Chat</button>
            <button onClick={() => setActiveTab("search")} className={`p-3 rounded-xl ${activeTab === "search" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>🔍 Search</button>
            <button onClick={() => setActiveTab("review")} className={`p-3 rounded-xl ${activeTab === "review" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>⭐ Reviews</button>
            <button onClick={() => setActiveTab("settings")} className={`p-3 rounded-xl ${activeTab === "settings" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>⚙️ Settings</button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1">
        {isSignedUp && view === "dashboard" && (
          <div className="bg-white border-b p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-[#0A4D3C] capitalize">{activeTab}</h1>
            <button onClick={() => setActiveTab("settings")}><img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]"/></button>
          </div>
        )}

        <div className="p-4">
          {/* SEARCH TAB */}
          {activeTab === "search" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Workers Near You</h2>
              {fakeWorkers.map(worker => (
                <div key={worker.id} onClick={() => {setSelectedWorker(worker); setActiveTab("profile")}}
                  className="bg-white rounded-2xl p-4 shadow-md"
                >
                  <p className="font-bold">{worker.name}</p>
                  <p className="text-gray-600">{worker.skill} • {worker.distance}</p>
                </div>
              ))}
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <img src="https://i.pravatar.cc/150?u=user" className="w-24 h-24 rounded-full mb-2"/>
              <input defaultValue="Your Name" className="border rounded-xl p-3 w-full mt-4"/>
              <button className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">Save Changes</button>
            </div>
          )}

          {/* WORKER PROFILE */}
          {activeTab === "profile" && selectedWorker && (
            <div>
              <button onClick={() => setActiveTab("search")} className="mb-4">← Back</button>
              <div className="bg-white rounded-2xl p-4 shadow">
                <h2 className="text-2xl font-bold">{selectedWorker.name}</h2>
                <p>{selectedWorker.skill}</p>
                <p className="mt-2">📞 {selectedWorker.phone}</p>
                <p>📧 {selectedWorker.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* LANDING */}
      {view === "landing" && (
        <div className="w-full flex-col items-center justify-center h-screen px-6 text-center">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent">MELANDI</h1>
          <button onClick={() => setView("finder")} className="mt-12 bg-[#0A4D3C] text-white py-5 px-10 rounded-2xl font-bold text-lg">Skill Finder</button>
        </div>
      )}

      {/* FORM */}
      {view === "finder" && (
        <div className="w-full max-w-md mx-auto p-6">
          <button onClick={() => setView("landing")} className="mb-6">← Back</button>
          <h2 className="text-3xl font-bold mb-2">Find a Skill</h2>
          <form onSubmit={(e) => {e.preventDefault(); handleSignup('finder')}} className="flex flex-col gap-4">
            <input required placeholder="Full Name" className="border-2 rounded-xl p-3"/>
            <button className="bg-[#0A4D3C] text-white py-4 rounded-xl font-bold">Start Free for 1 Month</button>
          </form>
        </div>
      )}

    </div>
  );
}
export default App;
