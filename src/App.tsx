import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing"); 
  const [signedUp, setSignedUp] = useState(false);

  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex flex-col items-center justify-center p-6">
        <h1 className="text-6xl font-extrabold text-[#0A4D3C]">MELANDI</h1>
        <p className="text-gray-600 mt-2">Connect with trusted skilled workers</p>
        <button onClick={() => setPage("signup")} className="mt-8 bg-[#0A4D3C] text-white px-8 py-4 rounded-2xl font-bold w-full max-w-sm">Skill Finder</button>
        <button onClick={() => setPage("signup")} className="mt-4 bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-bold w-full max-w-sm">Skill Worker</button>
      </div>
    )
  }

  if (page === "signup") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] p-6">
        <button onClick={() => setPage("landing")} className="mb-4 text-[#0A4D3C] font-bold">← Back</button>
        <h2 className="text-3xl font-bold text-[#0A4D3C]">Create Account</h2>
        <p className="text-gray-600">Free for 1 month. Then ₦2000/mo</p>
        <input placeholder="Full Name" className="border w-full p-3 rounded-xl mt-4" />
        <input placeholder="Phone Number" className="border w-full p-3 rounded-xl mt-2" />
        <button onClick={() => {setSignedUp(true); setPage("dashboard")}} className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">Start Free Trial</button>
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
          <button className="bg-[#0A4D3C] text-white px-4 py-2 rounded-xl">🤖 AI Pro</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl">💬 Chat Pro</button>
          <button className="bg-gray-200 px-4 py-2 rounded-xl">🔍 Search</button>
        </div>

        <div className="p-4">
          <h3 className="text-2xl font-bold">Workers Near You</h3>
          <div className="bg-white p-4 rounded-xl mt-4 shadow">
            <p className="font-bold">Adebayo O. <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">✓ Verified</span></p>
            <p className="text-sm text-gray-600">Plumber • Ibadan • 2.1km away</p>
            <p className="text-sm mt-1">⭐ 4.9 (23 reviews) • 87 jobs</p>
            <p className="text-sm mt-1">📞 0803 123 4567</p>
          </div>
        </div>
      </div>
    )
  }
}
