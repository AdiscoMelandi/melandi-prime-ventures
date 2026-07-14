import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Send, User, Mail, Phone, MapPin, Lock, Briefcase, 
  Award, FileText, DollarSign, Eye, EyeOff, Star, 
  ArrowLeft, Navigation, MessageCircle, ChevronRight,
  Search, MessageSquare, Bot, CreditCard,
  Info, HelpCircle, Shield, Building2, Camera,
  ThumbsUp
} from 'lucide-react';

// Types
interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  photo: string;
  date: string;
}

interface Worker {
  id: number;
  name: string;
  skill: string;
  rating: number;
  reviews: number;
  distance: number;
  phone: string;
  bio: string;
  priceRange: string;
  yearsOfExperience: number;
  location: string;
  reviews_list: Review[];
}

interface CommunityReview {
  id: number;
  name: string;
  photo: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
}

// Fake data for workers
const WORKERS_DATA: Worker[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    skill: "Professional Plumber",
    rating: 4.8,
    reviews: 127,
    distance: 2.3,
    phone: "+20 111 234 5678",
    bio: "Experienced plumber with over 10 years in residential and commercial plumbing. Specializing in pipe repairs, installations, and emergency services.",
    priceRange: "$30-50/hr",
    yearsOfExperience: 10,
    location: "Downtown, Cairo",
    reviews_list: [
      { id: 1, user: "Sarah M.", rating: 5, comment: "Excellent work! Fixed my burst pipe in under an hour.", photo: "https://i.pravatar.cc/150?img=1", date: "2026-06-15" },
      { id: 2, user: "Karim A.", rating: 5, comment: "Best plumber in the area. Reasonable prices.", photo: "https://i.pravatar.cc/150?img=3", date: "2026-06-10" },
      { id: 3, user: "Layla H.", rating: 4, comment: "Good service, arrived on time.", photo: "https://i.pravatar.cc/150?img=5", date: "2026-06-05" }
    ]
  },
  {
    id: 2,
    name: "Mohamed Ali",
    skill: "Electrician",
    rating: 4.9,
    reviews: 203,
    distance: 1.8,
    phone: "+20 122 345 6789",
    bio: "Licensed electrician specializing in residential wiring, panel upgrades, and smart home installations.",
    priceRange: "$40-60/hr",
    yearsOfExperience: 8,
    location: "Garden City, Cairo",
    reviews_list: [
      { id: 1, user: "Omar F.", rating: 5, comment: "Incredible work on home automation!", photo: "https://i.pravatar.cc/150?img=2", date: "2026-06-20" },
      { id: 2, user: "Nadia K.", rating: 5, comment: "Very knowledgeable and professional.", photo: "https://i.pravatar.cc/150?img=4", date: "2026-06-18" }
    ]
  },
  {
    id: 3,
    name: "Fatima Zahra",
    skill: "Interior Designer",
    rating: 4.7,
    reviews: 89,
    distance: 3.5,
    phone: "+20 100 987 6543",
    bio: "Creative interior designer with a passion for modern spaces. 7 years of experience.",
    priceRange: "$50-100/hr",
    yearsOfExperience: 7,
    location: "Zamalek, Cairo",
    reviews_list: [
      { id: 1, user: "Rania S.", rating: 5, comment: "Transformed my apartment!", photo: "https://i.pravatar.cc/150?img=9", date: "2026-06-12" },
      { id: 2, user: "Tariq M.", rating: 4, comment: "Great eye for design.", photo: "https://i.pravatar.cc/150?img=7", date: "2026-06-08" }
    ]
  },
  {
    id: 4,
    name: "Youssef Ibrahim",
    skill: "Carpenter",
    rating: 4.6,
    reviews: 156,
    distance: 4.2,
    phone: "+20 115 456 7890",
    bio: "Master carpenter with 15 years of experience in custom furniture.",
    priceRange: "$35-55/hr",
    yearsOfExperience: 15,
    location: "Maadi, Cairo",
    reviews_list: [
      { id: 1, user: "Hassan R.", rating: 5, comment: "Exceptional craftsmanship!", photo: "https://i.pravatar.cc/150?img=11", date: "2026-06-14" },
      { id: 2, user: "Mona L.", rating: 4, comment: "Quality work on cabinets.", photo: "https://i.pravatar.cc/150?img=12", date: "2026-06-09" }
    ]
  },
  {
    id: 5,
    name: "Amira El-Sayed",
    skill: "Graphic Designer",
    rating: 4.9,
    reviews: 312,
    distance: 1.5,
    phone: "+20 128 789 0123",
    bio: "Creative graphic designer specializing in branding and logo design.",
    priceRange: "$25-45/hr",
    yearsOfExperience: 6,
    location: "New Cairo, Cairo",
    reviews_list: [
      { id: 1, user: "Khaled M.", rating: 5, comment: "Absolutely brilliant work!", photo: "https://i.pravatar.cc/150?img=14", date: "2026-06-22" },
      { id: 2, user: "Dina A.", rating: 5, comment: "Fast, professional, creative.", photo: "https://i.pravatar.cc/150?img=15", date: "2026-06-19" }
    ]
  }
];

const AI_RESPONSES: string[] = [
  "I can help you find the perfect skilled worker for your needs!",
  "Based on your location, there are several highly-rated professionals nearby.",
  "I recommend checking the worker's reviews and ratings before deciding.",
  "You can filter workers by distance, rating, or specific skills.",
  "Need help with a specific project? Tell me what you're looking for!",
  "The average rating for workers in your area is 4.7 stars.",
  "Plumbers and electricians are our most in-demand professionals.",
  "Would you like me to suggest top-rated workers for your need?"
];

// Star Rating Component
const StarRating = ({ rating, onRate, interactive = false }: { 
  rating: number; 
  onRate?: (star: number) => void; 
  interactive?: boolean;
}) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        onClick={() => interactive && onRate?.(star)}
        className={`h-5 w-5 ${
          star <= Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : star <= rating
            ? 'text-yellow-400 fill-yellow-400 opacity-50'
            : 'text-gray-400'
        } ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
      />
    ))}
    {!interactive && <span className="ml-1 text-white/80 text-sm">{rating}</span>}
  </div>
);

// Input Field Component
const InputField = ({ 
  icon: Icon, label, value, onChange, error, type = 'text', 
  placeholder, multiline = false 
}: {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  placeholder: string;
  multiline?: boolean;
}) => (
  <div className="mb-4">
    <label className="block text-white/90 text-sm font-medium mb-2">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-white/60" />
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full pl-10 pr-3 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-3 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all duration-300"
        />
      )}
    </div>
    {error && (
      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-300 text-xs mt-1">
        {error}
      </motion.p>
    )}
  </div>
);

// Footer Component
const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <footer className="relative z-10 bg-white/5 backdrop-blur-xl border-t border-white/10 mt-auto">
    <div className="max-w-6xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">MELANDI</h3>
          <p className="text-white/60 text-sm">
            Connecting skilled professionals with those who need them.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('landing')} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                <Info className="h-4 w-4" /> About Melandi
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('landing')} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                <HelpCircle className="h-4 w-4" /> Contact Us
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('landing')} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                <Shield className="h-4 w-4" /> Terms & Conditions
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <button onClick={() => onNavigate('landing')} className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                <Building2 className="h-4 w-4" /> CAC: MELANDI PRIME VENTURES
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} MELANDI PRIME VENTURES. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [freeTrialDays, setFreeTrialDays] = useState(30);
  const [showPaystackModal, setShowPaystackModal] = useState(false);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: 'bot', text: "Hello! I'm your MELANDI AI Assistant. How can I help you today? 👋" }
  ]);
  const [chatInput, setChatInput] = useState('');

  const [finderForm, setFinderForm] = useState({
    fullName: '', email: '', phoneNumber: '', location: '', password: '', otp: ''
  });
  const [workerForm, setWorkerForm] = useState({
    fullName: '', email: '', phoneNumber: '', location: '', password: '',
    occupation: '', yearsOfExperience: '', bio: '', priceRange: '', otp: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [communityReviews, setCommunityReviews] = useState<CommunityReview[]>([
    {
      id: 1, name: "Oluwaseun Adeyemi", photo: "https://i.pravatar.cc/150?img=20",
      location: "Lagos, Nigeria", rating: 5,
      comment: "MELANDI helped me find an amazing electrician within 30 minutes!",
      date: "2026-07-10", likes: 24
    },
    {
      id: 2, name: "Chioma Okafor", photo: "https://i.pravatar.cc/150?img=21",
      location: "Abuja, Nigeria", rating: 4,
      comment: "Great platform for finding skilled workers. The review system helps a lot.",
      date: "2026-07-08", likes: 18
    },
    {
      id: 3, name: "Emeka Nwankwo", photo: "https://i.pravatar.cc/150?img=22",
      location: "Port Harcourt, Nigeria", rating: 5,
      comment: "As a skill worker on MELANDI, I've gotten more clients than anywhere else!",
      date: "2026-07-05", likes: 32
    }
  ]);

  const [reviewForm, setReviewForm] = useState({
    name: '', location: '', rating: 0, comment: ''
  });
  const [reviewErrors, setReviewErrors] = useState<Record<string, string>>({});
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  // Free trial timer
  useEffect(() => {
    const savedDays = localStorage.getItem('melandiTrialDays');
    if (savedDays) {
      setFreeTrialDays(parseInt(savedDays));
    }
  }, []);

  useEffect(() => {
    if (freeTrialDays > 0) {
      const timer = setInterval(() => {
        setFreeTrialDays(prev => {
          const next = prev <= 1 ? 0 : prev - 1;
          localStorage.setItem('melandiTrialDays', next.toString());
          return next;
        });
      }, 86400000);
      return () => clearInterval(timer);
    }
  }, [freeTrialDays]);

  const filteredWorkers = WORKERS_DATA
    .filter(w => 
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => sortBy === 'distance' ? a.distance - b.distance : b.rating - a.rating);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);
    setChatInput('');
    
    if (freeTrialDays <= 0) {
      setShowPaystackModal(true);
      return;
    }
    
    setTimeout(() => {
      const randomResponse = AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)];
      setChatMessages(prev => [...prev, { type: 'bot', text: randomResponse }]);
    }, 1000);
  };

  const handleSubscribe = () => {
    setFreeTrialDays(30);
    localStorage.setItem('melandiTrialDays', '30');
    setShowPaystackModal(false);
    setChatMessages(prev => [...prev, { 
      type: 'bot', 
      text: '✅ Subscription successful! You now have full access to AI Assistant for 30 days.' 
    }]);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setUploadedPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!reviewForm.name.trim()) newErrors.name = 'Name is required';
    if (!reviewForm.location.trim()) newErrors.location = 'Location is required';
    if (reviewForm.rating === 0) newErrors.rating = 'Please select a rating';
    if (!reviewForm.comment.trim()) newErrors.comment = 'Comment is required';
    
    if (Object.keys(newErrors).length > 0) {
      setReviewErrors(newErrors);
      return;
    }

    const newReview: CommunityReview = {
      id: communityReviews.length + 1,
      name: reviewForm.name,
      photo: uploadedPhoto || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      location: reviewForm.location,
      rating: reviewForm.rating,
      comment: reviewForm.comment,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };

    setCommunityReviews(prev => [newReview, ...prev]);
    setReviewForm({ name: '', location: '', rating: 0, comment: '' });
    setPhotoPreview(null);
    setUploadedPhoto(null);
    setReviewErrors({});
  };

  // Landing Page
  const LandingPage = () => (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-7xl font-bold text-white mb-8 tracking-wider text-center"
      >
        MELANDI
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/80 text-xl mb-16 font-light text-center"
      >
        Connect with skilled professionals in your area
      </motion.p>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <motion.button
            onClick={() => setActiveModal('finder')}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white/20 backdrop-blur-lg rounded-2xl text-white font-semibold text-lg border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 min-w-[260px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">I'M A SKILL FINDER</span>
          </motion.button>

          <motion.button
            onClick={() => setActiveModal('worker')}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-white/20 backdrop-blur-lg rounded-2xl text-white font-semibold text-lg border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 min-w-[260px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">I'M A SKILL WORKER</span>
          </motion.button>
        </div>

        <motion.button
          onClick={() => setCurrentPage('findWorkers')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-white/20 backdrop-blur-lg rounded-2xl text-white font-semibold text-lg border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 min-w-[260px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Navigation className="h-5 w-5" />
            <span>FIND WORKERS NEAR ME</span>
          </div>
        </motion.button>

        <motion.button
          onClick={() => setCurrentPage('communityReviews')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-5 bg-white/20 backdrop-blur-lg rounded-2xl text-white font-semibold text-lg border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 min-w-[260px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex items-center justify-center gap-2">
            <MessageSquare className="h-5 w-5" />
            <span>COMMUNITY REVIEWS</span>
          </div>
        </motion.button>
      </div>
    </div>
  );

  // Worker Card
  const WorkerCard = ({ worker, onClick }: { worker: Worker; onClick: (w: Worker) => void }) => (
    <motion.div
      onClick={() => onClick(worker)}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 shadow-xl group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
            {worker.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{worker.name}</h3>
            <p className="text-white/70 text-sm">{worker.skill}</p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <StarRating rating={worker.rating} />
          <span className="text-white/60 text-sm">({worker.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/70">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{worker.location}</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Navigation className="h-4 w-4" />
            <span className="text-sm font-semibold text-white">{worker.distance} km</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 relative flex flex-col">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'landing' && <LandingPage key="landing" />}
          
          {currentPage === 'findWorkers' && (
            <motion.div key="findWorkers" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="min-h-screen p-8">
              <div className="max-w-6xl mx-auto">
                <button onClick={() => setCurrentPage('landing')} className="mb-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <ArrowLeft className="h-5 w-5" /> Back to Home
                </button>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                  <h1 className="text-4xl font-bold text-white mb-2">Find Workers Near Me</h1>
                  <p className="text-white/70 text-lg mb-8">Discover skilled professionals in your area</p>
                </motion.div>
                
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 mb-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                      <input type="text" placeholder="Search by name, skill, or location..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40" />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => setSortBy('distance')} className={`px-4 py-3 rounded-xl flex items-center gap-2 ${sortBy === 'distance' ? 'bg-purple-500/50' : 'bg-white/10 hover:bg-white/20'} transition-all`}>
                        <Navigation className="h-4 w-4 text-white" /> <span className="text-white text-sm">Nearest</span>
                      </button>
                      <button onClick={() => setSortBy('rating')} className={`px-4 py-3 rounded-xl flex items-center gap-2 ${sortBy === 'rating' ? 'bg-purple-500/50' : 'bg-white/10 hover:bg-white/20'} transition-all`}>
                        <Star className="h-4 w-4 text-white" /> <span className="text-white text-sm">Top Rated</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredWorkers.map((worker, i) => (
                    <motion.div key={worker.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                      <WorkerCard worker={worker} onClick={(w) => { setSelectedWorker(w); setCurrentPage('workerProfile'); }} />
                    </motion.div
