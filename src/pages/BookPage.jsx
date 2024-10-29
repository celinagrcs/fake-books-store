import { useParams } from 'react-router-dom';
import books from '../data/books.json';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useGame } from '../context/GameContext';
import BugModal from '../components/BugModal';

const BookPage = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { incrementProgress } = useGame();
  const [showModal, setShowModal] = useState(false);

  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(book);
    }
  };

  const handleBugSinopsis = () => {
    incrementProgress('sinopsis');
    setShowModal(true);
  };

  const handleBugImage = () => {
    incrementProgress('book-img');
    setShowModal(true);
  };

  const handleQuantityChange = () => {
    const randomQuantity = Math.floor(Math.random() * 10) + 1;
    setQuantity(randomQuantity); 
    incrementProgress('quantity-change');
    setShowModal(true);
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-24 p-4">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <img src={book.image} alt={book.title} onClick={handleBugImage} className="w-72 h-auto object-cover rounded-lg" />
      </div>
      <div className="p-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
        <p className="text-gray-700 mb-2">Autor: {book.author}</p>
        <p className="text-gray-900 font-bold mb-2">Precio: {book.price}</p>
        <p className="text-gray-700 mb-2" onClick={handleBugSinopsis}>Sinopsis:</p>
        <div className="flex items-center mb-4">
          <label className="mr-2" htmlFor="quantity">Cantidad:</label>
        <select
          id="quantity"
          value={quantity}
          onChange={handleQuantityChange} 
          className="border border-gray-300 rounded-md p-2"
          >
          {[...Array(10).keys()].map(num => (
            <option key={num} value={num + 1}>{num + 1}</option>
          ))}
        </select>
        </div>
        <button 
          className="mt-4 bg-[#dd7596] text-white py-2 px-4 rounded"
          onClick={handleAddToCart}
        >
          Agregar al carrito
        </button>
      </div>

      {showModal && <BugModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default BookPage;
