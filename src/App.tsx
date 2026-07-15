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


  // IF USER IS SIGNED UP, SHOW MELANDI DASHBOARD
  if (signedUp) {
    return (
      <div className="min-h-screen bg-[#F8F5F0]">
        
        {/* HEADER - NOW SAYS MELANDI */}
        <div className="flex justify-between items-center p-5 bg-white border-b sticky top-0">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent">MELANDI</h1>
          <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full border-2 border-[#D4AF37]" />
        </div>

        {/* TABS - SEARCH FIRST */}
        <div className="flex bg-white p-2 gap-2 overflow-x-auto border-b">
          <button 
            onClick={() => setTab("search")} 
            className={`flex-1 min-w-[100px] py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${tab==="search" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}
          >
            🔍 Search
          </button>
          <button 
            onClick={() => setTab("ai")} 
            className={`flex-1 min-w-[100px] py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${tab==="ai" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}
          >
            🤖 AI
          </button>
          <button 
            onClick={() => setTab("chat")} 
            className={`flex-1 min-w-[100px] py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${tab==="chat" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}
          >
            💬 Chat
          </button>
          <button 
            onClick={() => setTab("review")} 
            className={`flex-1 min-w-[100px] py-3 rounded-xl font-bold flex items-center justify-center gap-2 ${tab==="review" ? "bg-[#0A4D3C] text-white" : "bg-gray-200 text-black"}`}
          >
            ⭐ Review
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="p-4">

          {/* SEARCH TAB - FREE FOREVER */}
          {tab === "search" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Workers Near You</h2>
              
              <div className="bg-white p-4 rounded-2xl shadow mb-4">
                <p className="font-bold text-lg">Adebayo O. - Plumber <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">✓ Verified</span></p>
                <p className="text-gray-600">2.1km away • ₦5000/hr</p>
                <p className="mt-2">📞 0803 123 4567</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow mb-4">
                <p className="font-bold text-lg">Chinedu K. - Electrician <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">✓ Verified</span></p>
                <p className="text-gray-600">3.5km away • ₦7000/hr</p>
                <p className="mt-2">📞 0902 987 6543</p>
              </div>
            </div>
          )}

          {/* AI TAB - TRIAL SHOWS HERE ONLY */}
          {tab === "ai" && (
            <div>
              <h2 className="text-2xl font-bold text-[#0A4D3C] mb-2">MELANDI AI</h2>
              <div className="bg-[#D4AF37]/20 p-4 rounded-2xl mb-4">
                <p className="font-bold text-lg">Free for 1 month</p>
                <p className="text-sm">Then ₦2000/month after trial</p>
              </div>
              <p>Tell AI what you need and it will match you instantly.</p>
              <button className="mt-4 bg-[#0A4D3C] text-white px-6 py-3 rounded-xl font-bold">Start AI Chat</button>
            </div>
          )}

          {/* CHAT TAB */}
          {tab === "chat" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Messages</h2>
              <p className="text-gray-600">Chat with workers you hired</p>
              <div className="bg-white p-4 rounded-2xl shadow mt-4">No messages yet</div>
            </div>
          )}

          {/* REVIEW TAB */}
          {tab === "review" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Review Feed</h2>
              <div className="bg-white p-4 rounded-2xl shadow mb-4">
                <p className="font-bold">Chinedu K.</p>
                <p>"Fixed my wiring in 30min. Very professional ⭐⭐⭐⭐⭐"</p>
              </div>
            </div>
          )}

        </div>
      </div>
    )
  }

  // YOUR EXISTING LANDING PAGE CODE
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
            <button 
              type="button"
              onClick={() => setSignedUp(true)} // <-- THIS TAKES THEM TO MELANDI DASHBOARD
              className="bg-gradient-to-r from-[#0A4D3C] to-[#0D6E5A] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition"
            >
              Find Workers
            </button>
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
            
            <button 
              type="button"
              onClick={() => setSignedUp(true)} // <-- THIS TAKES THEM TO MELANDI DASHBOARD
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition"
            >
              Submit for Verification
            </button>
    </form>
      </motion.div>
    </div>
  );
}
export default App;
