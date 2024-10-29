import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import ProgressBar from './components/ProgressBar';
import BookPage from './pages/BookPage';
import { useState } from 'react';
import InstructionsModal from './components/InstructionsModal';

function App() {
  const [showInstructions, setShowInstructions] = useState(true);

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
    </div>
  )
}

export default App
