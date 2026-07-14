import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">MELANDI</h1>
        <p className="text-xl text-gray-400">Tech Services Coming Soon</p>
      </motion.div>
    </div>
  )
}

export default App
