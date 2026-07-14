import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing");
  const [tab, setTab] = useState("ai");
  const [signedUp, setSignedUp] = useState(false);

  // LANDING PAGE - NO TRIAL MENTION
  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-extrabold text-[#0A4D3C]">MELANDI</h1>
        <p className="text-gray-600 mt-2 text-center">Connect with trusted skilled workers near you</p>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-sm">
          <button 
            onClick={() => {setPage("signup"); setTab("search")}} 
            className="bg-[#0A4D3C] text-white px-8 py-4 rounded-xl font-bold text-lg"
          >
            Skill Finder
          </button>
          <button 
            onClick={() => {setPage("signup"); setTab("search")}} 
            className="bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-bold text-lg"
          >
            Skill Worker
          </button>
        </div>
      </div>
    )
  }

  // SIGNUP PAGE - NO TRIAL MENTION
  if (page === "signup") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] p-6 flex flex-col">
        <button onClick={() => setPage("landing")} className="text-[#0A4D3C] font-bold mb-4">← Back</button>
        <h2 className="text-3xl font-bold text-[#0A4D3C]">Create Account</h2>
        <p className="text-gray-600 mt-2">Join MELANDI for free</p>
        
        <input type="text" placeholder="Full Name" className="mt-6 p-3 border rounded-xl w-full" />
        <input type="tel" placeholder="Phone Number" className="mt-3 p-3 border rounded-xl w-full" />
        
        <button 
          onClick={() => setSignedUp(true)} 
          className="mt-8 bg-[#0A4D3C] text-white w-full py-4 rounded-xl font-bold text-lg"
        >
          Sign Up
        </button>
      </div>
    )
  }

  // DASHBOARD WITH TABS
  if (signedUp) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        {/* TOP TABS */}
        <div className="flex bg-white p-2 gap-2 border-b sticky top-0">
          <button onClick={() => setTab("ai")} className={`flex-1 py-3 rounded-xl font-bold ${tab==="ai" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}>
            🤖 AI
          </button>
          <button onClick={() => setTab("search")} className={`flex-1 py-3 rounded-xl font-bold ${tab==="search" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}>
            🔍 Search
          </button>
          <button onClick={() => setTab("review")} className={`flex-1 py-3 rounded-xl font-bold ${tab==="review" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}>
            ⭐ Review
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="p-4">

          {/* AI TAB - TRIAL SHOWS HERE ONLY */}
          {tab === "ai" && (
            <div>
              <h2 className="text-2xl font-bold text-[#0A4D3C]">MELANDI AI</h2>
              <div className="bg-[#D4AF37]/20 p-4 rounded-xl mt-3">
                <p className="font-bold text-lg">Free for 1 month</p>
                <p className="text-sm">Then ₦2000/month after trial</p>
              </div>
              <p className="mt-4">Tell AI what you need. Example: "I need a plumber in Ibadan today"</p>
              <button className="mt-4 bg-[#0A4D3C] text-white px-6 py-3 rounded-xl font-bold">Start AI Chat</button>
            </div>
          )}

          {/* SEARCH TAB - FREE FOREVER */}
          {tab === "search" && (
            <div>
              <h2 className="text-2xl font-bold text-[#0A4D3C]">Workers Near You</h2>
              <div className="bg-white p-4 rounded-xl mt-4 shadow">
                <p className="font-bold">Adebayo O. <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">✓ Verified</span></p>
                <p className="text-gray-600">Plumber • 2.1km away • Ibadan</p>
                <p>⭐ 4.9 (23 reviews)</p>
                <button className="mt-2 bg-[#0A4D3C] text-white px-4 py-2 rounded-lg">View Profile</button>
              </div>
              <div className="bg-white p-4 rounded-xl mt-4 shadow">
                <p className="font-bold">Fatima B. <span className="text-xs bg-green-100 text-green-800 px
