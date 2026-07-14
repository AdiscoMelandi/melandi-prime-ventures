import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing"); 
  const [signedUp, setSignedUp] = useState(false);

  // LANDING PAGE
  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent">MELANDI</h1>
        <p className="text-gray-600 mt-2">Connect with trusted skilled workers</p>
        
        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <button 
            onClick={() => setPage("signup")}
            className="bg-[#0A4D3C] text-white px-8 py-4 rounded-2xl font-bold"
          >
            Skill Finder
          </button>
          <button 
            onClick={() => setPage("signup")}
            className="bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-bold"
          >
            Skill Worker
          </button>
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
        <p className="text-gray-600">Free for 1 month. Then ₦2000/mo</p>
        
        <form onSubmit={(e) => {e.preventDefault(); setSignedUp(true); setPage("dashboard")}}>
          <input placeholder="Full Name" className="border w-full p-3 rounded-xl mt-4" required />
          <input placeholder="Phone Number" className="border w-full p-3 rounded-xl mt-2" required />
          <input placeholder="Location e.g Ibadan" className="border w-full p-3 rounded-xl mt-2" required />
          <button className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">
            Start Free Trial
          </button>
        </form>
      </div>
    )
  }

  // DASHBOARD - WHAT YOU DREW
  if (page === "dashboard" && signedUp) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        {/* TOP BAR WITH PROFILE */}
        <div className="bg-white p-4 flex justify-between items-center border-b sticky top-0">
          <h2 className="text-xl font-bold text-[#0A4D3C]">Dashboard</h2>
          <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>
        
        {/* SIDEBAR BUTTONS */}
        <div className="p-4 flex gap-2 overflow-x-auto bg-white border-b">
          <button className="bg-[#0A4D3C] text-white px-4 py-2 rounded-xl whitespace-nowrap">🤖 AI</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl whitespace-nowrap">💬 Chat</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl whitespace-nowrap">🔍 Search</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl whitespace-nowrap">⭐ Reviews</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl whitespace-nowrap">⚙️ Settings</button>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="text-2xl font-bold">Workers Near You</h3>
          <div className="bg-white p-4 rounded-xl mt-4 shadow">
            <p className="font-bold">Adebayo O. - Plumber</p>
            <p className="text-sm text-gray-600">2.1km away • ₦5000/hr</p>
            <p className="text-sm mt-1">📞 0803 123 4567</p>
          </div>
          <div className="bg-white p-4 rounded-xl mt-2 shadow">
            <p className="font-bold">Chinedu K. - Electrician</p>
            <p className="text-sm text-gray-600">3.5km away • ₦7000/hr</p>
            <p className="text-sm mt-1">📞 0902 987 6543</p>
          </div>
        </div>
      </div>
    )
  }

  return <div>Loading...</div>
}
