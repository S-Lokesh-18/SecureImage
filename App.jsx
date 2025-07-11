import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import EncryptionSection from './components/EncryptionSection'
import DecryptionSection from './components/DecryptionSection'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import './styles/App.css'

function App() {
  const [activeTab, setActiveTab] = useState('encrypt')

  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
          
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'encrypt' ? 'active' : ''}`}
              onClick={() => setActiveTab('encrypt')}
            >
              Encrypt
            </button>
            <button 
              className={`tab ${activeTab === 'decrypt' ? 'active' : ''}`}
              onClick={() => setActiveTab('decrypt')}
            >
              Decrypt
            </button>
          </div>
          
          <motion.div 
            className="tab-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'encrypt' ? (
              <EncryptionSection />
            ) : (
              <DecryptionSection />
            )}
          </motion.div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App