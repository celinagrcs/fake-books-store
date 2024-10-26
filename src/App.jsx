import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import BookList from './components/BookList'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import ProgressBar from './components/ProgressBar';
import BookPage from './pages/BookPage';
import ErrorPage from './pages/ErrorPage';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <ProgressBar />
        <Routes> 
          <Route path="/" element={<BookList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
