import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Wrench } from "lucide-react";

function App() {
  const [view, setView] = useState("landing"); 

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] to-[#E8E2D9] text-black">
      
      {/* LANDING PAGE */}
      {view === "landing" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center h-screen px-6 text-center"
        >
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-7xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent"
          >
            MELANDI
          </motion.h1>
          <p className="text-gray-700 mt-3 text-lg max-w-md">Connect with trusted skilled workers near you. Get it done right.</p>
          
          <div className="flex flex-col md:flex-row gap-5 mt-12 w-full max-w-lg">
            <button 
              onClick={() => setView("finder")}
              className="flex-1 bg-[#0A4D3C] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#0A4D3C]/30 hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Search size={22} /> Skill Finder
            </button>
            <button 
              onClick={() => setView("worker")}
              className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#D4AF37]/30 hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Wrench size={22} /> Skill Worker
            </button>
          </div>
        </motion.div>
      )}

      {/* SKILL FINDER FORM */}
      {view === "finder" && (
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="max-w-md mx-auto p-6"
        >
          <button onClick={() => setView("landing")} className="flex items-center gap-2 mb-6 text-[#0A4D3C] font-semibold">
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-bold text-[#0A4D3C] mb-2">Find a Skill</h2>
          <p className="text-gray-600 mb-6">Tell us what you need</p>
          
          <form className="flex flex-col gap-4">
            <input placeholder="Full Name" className="border-2 border-gray-200 focus:border-[#D4AF37] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <input placeholder="Phone Number" className="border-2 border-gray-200 focus:border-[#D4AF37] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <input placeholder="Location e.g Ibadan" className="border-2 border-gray-200 focus:border-[#D4AF37] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <select className="border-2 border-gray-200 focus:border-[#D4AF37] outline-none rounded-xl p-3 bg-white shadow-sm">
              <option>What do you need?</option>
              <option>🔧 Plumber</option>
              <option>⚡ Electrician</option>
              <option>✂️ Tailor</option>
              <option>🎨 Painter</option>
            </select>
            <textarea placeholder="Describe your job" className="border-2 border-gray-200 focus:border-[#D4AF37] outline-none rounded-xl p-3 h-24 bg-white shadow-sm"></textarea>
            <button className="bg-gradient-to-r from-[#0A4D3C] to-[#0D6E5A] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition">Find Workers</button>
          </form>
        </motion.div>
      )}

      {/* SKILL WORKER FORM */}
      {view === "worker" && (
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="max-w-md mx-auto p-6"
        >
          <button onClick={() => setView("landing")} className="flex items-center gap-2 mb-6 text-[#D4AF37] font-semibold">
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-2">Join as Skill Worker</h2>
          <p className="text-gray-600 mb-6">Get verified and start getting jobs</p>
          
          <form className="flex flex-col gap-4">
            <input placeholder="Full Name" className="border-2 border-gray-200 focus:border-[#0A4D3C] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <input placeholder="Phone Number" className="border-2 border-gray-200 focus:border-[#0A4D3C] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <input placeholder="Location e.g Osogbo" className="border-2 border-gray-200 focus:border-[#0A4D3C] outline-none rounded-xl p-3 bg-white shadow-sm" />
            <select className="border-2 border-gray-200 focus:border-[#0A4D3C] outline-none rounded-xl p-3 bg-white shadow-sm">
              <option>Your Skill</option>
              <option>🔧 Plumber</option>
              <option>⚡ Electrician</option>
              <option>✂️ Tailor</option>
              <option>🎨 Painter</option>
            </select>
            <input placeholder="Years of Experience" type="number" className="border-2 border-gray-200 focus:border-[#0A4D3C] outline-none rounded-xl p-3 bg-white shadow-sm" />
            
            <div className="bg-white p-3 rounded-xl border-2 border-dashed border-gray-300">
              <label className="text-sm text-gray-600 font-semibold">Upload ID Card / Verification</label>
              <input type="file" className="w-full mt-1" />
            </div>
            
            <div className="bg-white p-3 rounded-xl border-2 border-dashed border-gray-300">
              <label className="text-sm text-gray-600 font-semibold">Upload Work Photos</label>
              <input type="file" multiple className="w-full mt-1" />
            </div>
            
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition">Submit for Verification</button>
          </form>
        </motion.div>
      )}

    </div>
  );
}

export default App;
