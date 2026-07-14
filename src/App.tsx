import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing"); 
  const [userType, setUserType] = useState("");

  if (page === "landing") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-extrabold text-[#0A4D3C]">MELANDI</h1>
        <p className="text-gray-600 mt-2">Connect with trusted skilled workers</p>
        
        <button onClick={() => {setUserType("finder"); setPage("dashboard")}} 
          className="mt-8 bg-[#0A4D3C] text-white px-8 py-4 rounded-2xl font-bold w-full max-w-sm">
          Skill Finder
        </button>
        
        <button onClick={() => {setUserType("worker"); setPage("dashboard")}} 
          className="mt-4 bg-[#D4AF37] text-white px-8 py-4 rounded-2xl font-bold w-full max-w-sm">
          Skill Worker
        </button>
      </div>
    )
  }

  // DASHBOARD FOR FINDER
  if (page === "dashboard" && userType === "finder") {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-[#0A4D3C]">Find Workers</h2>
          <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>
        
        <div className="p-4">
          <div className="bg-white p-4 rounded-xl shadow mb-3">
            <p className="font-bold">Adebayo O. <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">✓ Verified</span></p>
            <p className="text-sm text-gray-600">Plumber • Ibadan • 2.1km</p>
            <p className="text-sm">⭐ 4.9 (23 reviews)</p>
            <p className="text-sm">📞 0803 123 4567</p>
          </div>
          
          <div className="bg-[#D4AF37]/20 p-3 rounded-xl mt-4 text-center">
            <p className="font-bold">Want AI + Chat? Pro: ₦2000/month</p>
          </div>
        </div>
      </div>
    )
  }

  // DASHBOARD FOR WORKER
  if (page === "dashboard" && userType === "worker") {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-[#0A4D3C]">My Profile</h2>
          <img src="https://i.pravatar.cc/150?u=user" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>
        
        <div className="p-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="font-bold">Your Profile is Live</p>
            <p className="text-sm text-gray-600">Skill Finders can see you now</p>
            <button className="mt-2 bg-[#0A4D3C] text-white px-4 py-2 rounded-xl">Edit Profile</button>
          </div>
          
          <h3 className="text-xl font-bold mt-6">Job Requests</h3>
          <div className="bg-white p-4 rounded-xl mt-2 shadow">
            <p>0 new requests</p>
          </div>
        </div>
      </div>
