import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

function App() {
  const [view, setView] = useState("landing"); // landing, finder, worker

  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* LANDING PAGE */}
      {view === "landing" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center h-screen px-6 text-center"
        >
          <h1 className="text-6xl font-bold">MELANDI</h1>
          <p className="text-gray-600 mt-3 text-lg">Connect with trusted skilled workers near you</p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-12 w-full max-w-md">
            <button 
              onClick={() => setView("finder")}
              className="flex-1 bg-black text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
            >
              Skill Finder
            </button>
            <button 
              onClick={() => setView("worker")}
              className="flex-1 bg-black text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition"
            >
              Skill Worker
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
          <button onClick={() => setView("landing")} className="flex items-center gap-2 mb-6">
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-bold mb-2">Find a Skill</h2>
          <p className="text-gray-600 mb-6">Tell us what you need</p>
          
          <form className="flex flex-col gap-4">
            <input placeholder="Full Name" className="border rounded-lg p-3" />
            <input placeholder="Phone Number" className="border rounded-lg p-3" />
            <input placeholder="Location e.g Ibadan" className="border rounded-lg p-3" />
            <select className="border rounded-lg p-3">
              <option>What do you need?</option>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>Tailor</option>
              <option>Painter</option>
            </select>
            <textarea placeholder="Describe your job" className="border rounded-lg p-3 h-24"></textarea>
            <button className="bg-black text-white py-3 rounded-lg font-semibold">Find Workers</button>
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
          <button onClick={() => setView("landing")} className="flex items-center gap-2 mb-6">
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-3xl font-bold mb-2">Join as Skill Worker</h2>
          <p className="text-gray-600 mb-6">Get verified and start getting jobs</p>
          
          <form className="flex flex-col gap-4">
            <input placeholder="Full Name" className="border rounded-lg p-3" />
            <input placeholder="Phone Number" className="border rounded-lg p-3" />
            <input placeholder="Location e.g Osogbo" className="border rounded-lg p-3" />
            <select className="border rounded-lg p-3">
              <option>Your Skill</option>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>Tailor</option>
              <option>Painter</option>
            </select>
            <input placeholder="Years of Experience" type="number" className="border rounded-lg p-3" />
            
            <div>
              <label className="text-sm text-gray-600">Upload ID Card / Verification</label>
              <input type="file" className="border rounded-lg p-3 w-full mt-1" />
            </div>
            
            <div>
              <label className="text-sm text-gray-600">Upload Work Photos</label>
              <input type="file" multiple className="border rounded-lg p-3 w-full mt-1" />
            </div>
            
            <button className="bg-black text-white py-3 rounded-lg font-semibold">Submit for Verification</button>
          </form>
        </motion.div>
      )}

    </div>
  );
}

export default App;
