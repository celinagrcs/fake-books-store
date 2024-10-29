import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import ProgressBar from './components/ProgressBar';
import BookPage from './pages/BookPage';
import { useEffect, useState } from 'react';
import InstructionsModal from './components/InstructionsModal';

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const InstructionsShown = localStorage.getItem('instructionsShown');
    if(!InstructionsShown) {
      setShowInstructions(true);
      localStorage.setItem('instructionsShown', 'true');
    }
  }, []);

  return (
    <div>
      {showInstructions && (
        <InstructionsModal onClose={() => setShowInstructions(false)} />
      )}
      <Router>
        <Navbar />
        <ProgressBar />
        <Routes> 
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
