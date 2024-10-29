import { useState } from 'react';
import { useCart } from '../context/CartContext'
import { useGame } from '../context/GameContext';
import books from '../data/books.json'
import BugModal from './BugModal';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const BookList = () => {
  const { addToCart } = useCart();
  const { incrementProgress } = useGame();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (book) => {
    if (Math.random() < 0.3) {
      alert("no se pudo agregar al carrito");
      incrementProgress('add-to-cart');
      setShowModal(true);
    } else {
      const randomQuantity = Math.random() < 0.5 ? 1 : Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < randomQuantity; i++) {
        addToCart(book);
      }
      if (randomQuantity > 1) {
        incrementProgress('quantity-cart');
        setShowModal(true);
      }
    }
  }

  const handleBugClick = (book) => {
    if (book.price === "$") {
      incrementProgress('price');
      setShowModal(true);
    }
  }

  const handleBugTitle = (book) => {
    if (book.author === "William Shakespeare")
    incrementProgress('book-title');
    setShowModal(true);
  }

  return (
    <>
    <main className="bg-white min-h-screen p-6">
      <section className="container mx-auto p-4">
        <h2 className="font-extrabold text-2xl md:text-4xl py-5 text-center text-[#2a2a2a] mt-5 mb-6">🐞 Libros Disponibles 🐞</h2>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div key={book.id}  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center items-center mb-4">
              <img src={book.image} alt={book.title} className="object-contain h-48 w-48" />
            </div>
            <h3 className="text-base font-bold mb-2 hover:text-gray-800">
              <Link to={`/book/${book.id}`}>{book.title}</Link>
            </h3>
            <p className="text-gray-700" onClick={() => handleBugTitle(book)}>Autor: {book.author}</p>
            <p className="text-gray-900 font-bold" onClick={() => handleBugClick(book)}>Precio: {book.price || "$"}</p>
            <button 
            className="w-full bg-[#dd7596] text-white py-2 px-4 rounded-lg hover:bg-[#e55872] transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(book)}}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </section>

      {showModal && <BugModal onClose={() => setShowModal(false)} />}
    </main>
    <Footer />    
    </>
  )
}

export default BookList