import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import ProgressBar from './components/ProgressBar';
import BookPage from './pages/BookPage';
import { useEffect, useState } from 'react';
import InstructionsModal from './components/InstructionsModal';
import CelebrationModal from './components/CelebrationModal';
import { useGame } from './context/GameContext';

function App() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const { progress } = useGame();
  
  const handleGameCompletion = () => {
    setShowCelebration(true); 
  };

  useEffect(() => {
    if (progress === 100) { 
      handleGameCompletion();
    }
  }, [progress]);


  return (
    <div>
      <Router>
        <Navbar />
        <ProgressBar />
        <Routes> 
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </Router>
      {showInstructions && (
        <InstructionsModal onClose={() => setShowInstructions(false)} />
      )}
          {showCelebration && <CelebrationModal onClose={() => setShowCelebration(false)} />}
    </div>
  )
}

export default App
