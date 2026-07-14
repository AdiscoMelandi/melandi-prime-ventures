import { motion } from "framer-motion";
import { Search, MapPin, Star } from "lucide-react";

const categories = [
  { name: "Plumber", icon: "🔧" },
  { name: "Electrician", icon: "⚡" },
  { name: "Tailor", icon: "✂️" },
  { name: "Painter", icon: "🎨" },
  { name: "Carpenter", icon: "🪚" },
  { name: "Cleaner", icon: "🧹" },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">MELANDI</h1>
        <div className="flex gap-4">
          <button className="text-sm">For Workers</button>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Login</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">Find Trusted Skilled Workers</h2>
        <p className="text-gray-600 mt-3">Connect with verified artisans near you</p>
        
        <div className="mt-8 max-w-2xl mx-auto flex items-center border rounded-full px-4 py-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input placeholder="Search plumber, tailor, electrician..." className="flex-1 outline-none ml-2" />
          <MapPin className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="px-6">
        <h3 className="text-2xl font-semibold mb-6">Popular Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <motion.div 
              key={cat.name}
              whileHover={{ scale: 1.05 }}
              className="border rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg"
            >
              <div className="text-4xl">{cat.icon}</div>
              <p className="font-semibold mt-2">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-8">How MELANDI Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl mb-2">1️⃣</div>
            <p className="font-semibold">Post Your Job</p>
            <p className="text-gray-600 text-sm">Tell us what you need done</p>
          </div>
          <div>
            <div className="text-4xl mb-2">2️⃣</div>
            <p className="font-semibold">Get Matched</p>
            <p className="text-gray-600 text-sm">Connect with verified workers</p>
          </div>
          <div>
            <div className="text-4xl mb-2">3️⃣</div>
            <p className="font-semibold">Get It Done</p>
            <p className="text-gray-600 text-sm">Pay securely after work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
