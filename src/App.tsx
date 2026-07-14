import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Bot, Star, MapPin, MessageCircle, Sparkles, Phone, Mail, Send, Lock, Settings, Users, Menu, Camera, Edit } from "lucide-react";

const fakeWorkers = [
  { id: 1, name: "Adebayo O.", skill: "Plumber", rating: 4.9, reviews: 23, distance: "2.1km", location: "Ibadan", price: "₦5000/hr", verified: true, img: "https://i.pravatar.cc/150?u=ade", phone: "0803 123 4567", email: "adebayo@melandi.ng" },
  { id: 2, name: "Chinedu K.", skill: "Electrician", rating: 4.8, reviews: 18, distance: "3.5km", location: "Osogbo", price: "₦7000/hr", verified: true, img: "https://i.pravatar.cc/150?u=chi", phone: "0902 987 6543", email: "chinedu@melandi.ng" },
];

function App() {
  const [view, setView] = useState("landing"); 
  const [activeTab, setActiveTab] = useState("search"); // search, ai, chat, review, settings
  const [userType, setUserType] = useState(null); 
  const [isSignedUp, setIsSignedUp] = useState(false); 
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [profilePic, setProfilePic] = useState("https://i.pravatar.cc/150?u=user");

  const handleSignup = (type) => {
    setUserType(type);
    setIsSignedUp(true);
    setView("dashboard");
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-black flex">
      
      {/* SIDEBAR - THE BUTTONS ON THE RIGHT/LEFT */}
      {isSignedUp && view === "dashboard" && (
        <div className="w-20 md:w-64 bg-white border-r flex flex-col items-center md:items-start p-4">
          <h2 className="text-2xl font-bold text-[#0A4D3C] mb-8 hidden md:block">MELANDI</h2>
          
          <div className="flex flex-col gap-6 w-full">
            <button onClick={() => setActiveTab("ai")} className={`flex items-center gap-3 p-3 rounded-xl ${activeTab === "ai" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>
              <Sparkles size={22}/> <span className="hidden md:block">MELANDI AI</span>
            </button>
            <button onClick={() => setActiveTab("chat")} className={`flex items-center gap-3 p-3 rounded-xl ${activeTab === "chat" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>
              <MessageCircle size={22}/> <span className="hidden md:block">Chat</span>
            </button>
            <button onClick={() => setActiveTab("search")} className={`flex items-center gap-3 p-3 rounded-xl ${activeTab === "search" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>
              <Search size={22}/> <span className="hidden md:block">Search</span>
            </button>
            <button onClick={() => setActiveTab("review")} className={`flex items-center gap-3 p-3 rounded-xl ${activeTab === "review" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>
              <Star size={22}/> <span className="hidden md:block">Reviews</span>
            </button>
            <button onClick={() => setActiveTab("settings")} className={`flex items-center gap-3 p-3 rounded-xl ${activeTab === "settings" ? "bg-[#0A4D3C] text-white" : "hover:bg-gray-100"}`}>
              <Settings size={22}/> <span className="hidden md:block">Settings</span>
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex-col">
        
        {/* TOP BAR WITH PROFILE PIC */}
        {isSignedUp && view === "dashboard" && (
          <div className="bg-white border-b p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-[#0A4D3C] capitalize">{activeTab}</h1>
            <button onClick={() => setActiveTab("settings")} className="relative">
              <img src={profilePic} className="w-10 h-10 rounded-full border-2 border-[#D4AF37]"/>
              <Camera size={14} className="absolute -bottom-1 -right-1 bg-[#D4AF37] text-white p-0.5 rounded-full"/>
            </button>
          </div>
        )}

        {/* CONTENT BASED ON ACTIVE TAB */}
        <div className="flex-1 overflow-y-auto p-4">
          
          {/* SEARCH TAB */}
          {activeTab === "search" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Workers Near You</h2>
              {fakeWorkers.map(worker => (
                <div key={worker.id} onClick={() => {setSelectedWorker(worker); setActiveTab("profile")}}
                  className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition"
                >
                  <div className="flex gap-3">
                    <img src={worker.img} className="w-16 h-16 rounded-full"/>
                    <div className="flex-1">
                      <p className="font-bold">{worker.name}</p>
                      <p className="text-gray-600">{worker.skill}</p>
                      <span className="flex items-center gap-1 text-sm"><MapPin size={14}/>{worker.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* AI TAB */}
          {activeTab === "ai" && (
            <div className="text-center mt-20">
              <Sparkles size={50} className="mx-auto text-purple-500"/>
              <h2 className="text-2xl font-bold mt-4">MELANDI AI</h2>
              <p>Describe what you need and AI will match you instantly</p>
              <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl">Ask AI</button>
            </div>
          )}

          {/* CHAT TAB */}
          {activeTab === "chat" && (
            <div className="text-center mt-20">
              <MessageCircle size={50} className="mx-auto text-[#0A4D3C]"/>
              <h2 className="text-2xl font-bold mt-4">Your Chats</h2>
              <p>Chat with workers directly. Included in Pro ₦2000/mo</p>
            </div>
          )}

          {/* REVIEW TAB */}
          {activeTab === "review" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Community Reviews</h2>
              <div className="bg-white rounded-2xl p-4 shadow">
                <img src="https://picsum.photos/400/300" className="rounded-xl"/>
                <p className="font-bold mt-2">Tola reviewed this tailor</p>
                <p className="text-sm">Best agbada in Osogbo! ⭐⭐⭐⭐</p>
              </div>
            </div>
          )}

          {/* SETTINGS / PROFILE EDIT TAB */}
          {activeTab === "settings" && (
            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <div className="flex flex-col items-center">
                <img src={profilePic} className="w-24 h-24 rounded-full mb-2"/>
                <button className="text-sm text-[#D4AF37] flex items-center gap-1"><Camera size={14}/> Change Photo</button>
              </div>
              <input defaultValue="Your Name" className="border rounded-xl p-3 w-full mt-4"/>
              <input defaultValue="Your Phone" className="border rounded-xl p-3 w-full mt-2"/>
              <input defaultValue="Your Location" className="border rounded-xl p-3 w-full mt-2"/>
              <button className="w-full bg-[#0A4D3C] text-white py-3 rounded-xl mt-4 font-bold">Save Changes</button>
            </div>
          )}

          {/* WORKER PROFILE */}
          {activeTab === "profile" && selectedWorker && (
            <div>
              <button onClick={() => setActiveTab("search")} className="flex items-center gap-2 mb-4"><ArrowLeft/> Back</button>
              <div className="bg-white rounded-2xl p-4 shadow">
                <img src={selectedWorker.img} className="w-24 h-24 rounded-full mx-auto"/>
                <h2 className="text-2xl font-bold text-center mt-2">{selectedWorker.name}</h2>
                <div className="flex gap-2 mt-4">
                  <a href={`tel:${selectedWorker.phone}`} className="flex-1 bg-[#0A4D3C] text-white py-2 rounded-xl flex items-center justify-center gap-2"><Phone size={16}/> Call</a>
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl flex items-center justify-center gap-2"><MessageCircle size={16}/> Chat</button>
                </div>
                <p className="text-sm text-gray-600 mt-2"><Mail size={14}/> {selectedWorker.email}</p>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* LANDING + FORM - SAME AS BEFORE */}
      {view === "landing" && (
        <div className="w-full flex-col items-center justify-center h-screen px-6 text-center">
          <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#0A4D3C] to-[#D4AF37] bg-clip-text text-transparent">MELANDI</h1>
          <div className="flex flex-col md:flex-row gap-5 mt-12 w-full max-w-lg">
            <button onClick={() => setView("finder")} className="flex-1 bg-[#0A4D3C] text-white py-5 rounded-2xl font-bold text-lg">Skill Finder</button>
            <button onClick={() => setView("worker")} className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white py-5 rounded-2xl font-bold text-lg">Skill Worker</button>
          </div>
        </div>
      )}

      {view === "finder" && (
        <div className="w-full max-w-md mx-auto p-6">
          <button onClick={() => setView("landing")} className="flex items-center gap-2 mb-6"><ArrowLeft/> Back</button>
          <h2 className="text-3xl font-bold mb-2">Find a Skill</h2>
          <form onSubmit={(e) => {e.preventDefault(); handleSignup('finder')}} className="flex flex-col gap-4">
            <input required placeholder="Full Name" className="border-2 rounded-xl p-3"/>
            <input required placeholder="Phone Number" className="border-2 rounded-xl p-3"/>
            <button className="bg-[#0A4D3C] text-white py-4 rounded-xl font-bold">Start Free for 1 Month</button>
          </form>
        </div>
      )}

    </div>
  );
}
export default App;
