import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing");
  const [type, setType] = useState("");

  if (page === "landing") {
    return (
      <div style={{minHeight: "100vh", background: "#F8F5F0", padding: 24}}>
        <h1 style={{fontSize: 48, fontWeight: "bold", color: "#0A4D3C", textAlign: "center"}}>MELANDI</h1>
        <p style={{color: "#666", textAlign: "center"}}>Connect with trusted skilled workers</p>
        
        <button onClick={() => {setType("finder"); setPage("dashboard")}} 
          style={{marginTop: 32, background: "#0A4D3C", color: "white", padding: 16, borderRadius: 16, width: "100%", fontWeight: "bold", border: "none"}}>
          Skill Finder
        </button>
        
        <button onClick={() => {setType("worker"); setPage("dashboard")}} 
          style={{marginTop: 16, background: "#D4AF37", color: "white", padding: 16, borderRadius: 16, width: "100%", fontWeight: "bold", border: "none"}}>
          Skill Worker
        </button>
      </div>
    )
  }

  if (page === "dashboard" && type === "finder") {
    return (
      <div style={{minHeight: "100vh", background: "#F8F5F0"}}>
        <h2 style={{padding: 16, fontSize: 20, fontWeight: "bold", color: "#0A4D3C"}}>Find Workers</h2>
        <div style={{padding: 16}}>
          <div style={{background: "white", padding: 16, borderRadius: 12}}>
            <p style={{fontWeight: "bold"}}>Adebayo O. <span style={{background: "#d1fae5", color: "#065f46", fontSize: 12, padding: "2px 8px", borderRadius: 999}}>✓ Verified</span></p>
            <p style={{fontSize: 14, color: "#666"}}>Plumber • Ibadan • 2.1km</p>
            <p style={{fontSize: 14}}>⭐ 4.9 (23 reviews)</p>
          </div>
          <div style={{background: "#FDF6E3", padding: 12, borderRadius: 12, marginTop: 16}}>
            <p style={{fontWeight: "bold", textAlign: "center"}}>Pro: ₦2000/month for AI + Chat</p>
          </div>
        </div>
      </div>
    )
  }

  if (page === "dashboard" && type === "worker") {
    return (
      <div style={{minHeight: "100vh", background: "#F8F5F0"}}>
        <h2 style={{padding: 16, fontSize: 20, fontWeight: "bold", color: "#0A4D3C"}}>My Profile</h2>
        <div style={{padding: 16}}>
          <div style={{background: "white", padding: 16, borderRadius: 12}}>
            <p style={{fontWeight: "bold"}}>Your Profile is Live</p>
            <p style={{fontSize: 14, color: "#666"}}>Skill Finders can see you now</p>
          </div>
        </div>
      </div>
    )
  }
}
