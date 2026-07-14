import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  // STEP 1: LANDING
  if (step === 1) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold text-[#0A4D3C]">MELANDI</h1>
        <button onClick={() => {setRole("finder"); setStep(2)}} className="mt-8 bg-[#0A4D3C] text-white w-full max-w-sm py-4 rounded-xl font-bold">
          Skill Finder
        </button>
        <button onClick={() => {setRole("worker"); setStep(2)}} className="mt-4 bg-[#D4AF37] text-white w-full max-w-sm py-4 rounded-xl font-bold">
          Skill Worker
        </button>
      </div>
    )
  }

  // STEP 2: DASHBOARD
  if (step === 2 && role === "finder") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] p-4">
        <h2 className="text-2xl font-bold text-[#0A4D3C]">Find Workers</h2>
        <div className="bg-white p-4 rounded-xl mt-4">
          <p className="font-bold">Adebayo O. <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">✓ Verified</span></p>
          <p className="text-gray-600">Plumber • Ibadan</p>
          <p>⭐ 4.9 (23 reviews)</p>
        </div>
        <div className="bg-yellow-100 p-3 rounded-xl mt-4 text-center">
          <p className="font-bold">Pro: ₦2000/month for AI + Chat</p>
        </div>
      </div>
    )
  }

  if (step === 2 && role === "worker") {
    return (
      <div className="min-h-screen bg-[#F8F5F0] p-4">
        <h2 className="text-2xl font-bold text-[#0A4D3C]">My Profile</h2>
        <div className="bg-white p-4 rounded-xl mt-4">
          <p className="font-bold">Your Profile is Live</p>
          <p className="text-gray-600">Customers in Ibadan can find you</p>
        </div>
      </div>
    )
  }
}
